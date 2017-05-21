var extend = require("@nathanfaucett/extend"),
    app = require("../app");


var actions = {
    SET_STATE: "route.SET_STATE",

    CHANGE: "route.CHANGE",
    CHANGE_SUCCESS: "route.CHANGE_SUCCESS",
    CHANGE_ERROR: "route.CHANGE_ERROR"
};

function copyCtx(ctx) {
    return {
        pathname: ctx.pathname || "/",
        params: ctx.params || {},
        query: ctx.query || ""
    };
}

function getInitialState() {
    return {
        error: null,
        ctx: copyCtx({}),
        state: null
    };
}

function routeMiddleware(store) {

    return function(next) {

        return function(action) {

            switch (action.type) {

                case actions.CHANGE:
                    var ctx = action.ctx;

                    app.router.handler(ctx, function onHandle(error) {
                        process.nextTick(function onNextTick() {
                            if (error) {
                                store.dispatch({
                                    type: actions.CHANGE_ERROR,
                                    error: error,
                                    ctx: ctx
                                });
                                console.error(error);
                            } else {
                                store.dispatch({
                                    type: actions.CHANGE_SUCCESS,
                                    ctx: ctx
                                });
                            }
                        });
                    });
                    break;
            }

            return next(action);
        };
    };
}

function route(state, action) {

    switch (action.type) {

        case actions.SET_STATE:
            return extend({}, state, {
                state: action.state
            });

        case actions.CHANGE_ERROR:
            return extend({}, state, {
                error: action.error,
                ctx: copyCtx(action.ctx)
            });

        case actions.CHANGE_SUCCESS:
            return extend({}, state, {
                error: null,
                ctx: copyCtx(action.ctx)
            });

        default:
            return state || getInitialState();
    }
}


route.actions = actions;
route.getInitialState = getInitialState;
route.middleware = routeMiddleware;

module.exports = route;