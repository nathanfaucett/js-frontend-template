var environment = require("@nathanfaucett/environment"),
    eventListener = require("@nathanfaucett/event_listener"),
    page = require("@nathanfaucett/page"),
    request = require("@nathanfaucett/request"),
    layers = require("@nathanfaucett/layers_browser"),
    apply = require("@nathanfaucett/apply"),
    redux = require("redux"),
    reduxDevtoolsExtension = require("redux-devtools-extension/logOnlyInProduction"),
    objectForEach = require("@nathanfaucett/object-for_each"),
    config = require("./config"),
    Root = require("./components/Root"),
    reducers, routes;


var window = environment.window,
    app = exports,
    VIEWS = {},
    router = layers.Router.create();


request.defaults.headers.Accept = "application/json";
request.defaults.headers["Content-Type"] = "application/json";
request.defaults.withCredentials = true;


app.config = config;
app.Root = Root;
app.router = router;
app.page = page;

app.setView = function(state, Component) {
    VIEWS[state] = Component;
};
app.getView = function(state) {
    return VIEWS[state];
};

app.route = function(path, state, Component) {

    app.router.route(path, function(ctx, next) {

        app.store.dispatch({
            type: reducers.route.actions.SET_STATE,
            ctx: ctx,
            state: state
        });

        ctx.end();
        next();
    });

    app.setView(state, Component);
};

app.middleware = function(path, fn) {
    router.use(path, fn);
};

app.init = function() {
    page.setHtml5Mode(config.html5Mode);
    page.listen();
};


var initialState = {},
    storeMiddleware = [];

reducers = require("./reducers");
routes = require("./routes");

objectForEach(reducers, function(reducer, name) {
    initialState[name] = reducer.getInitialState();

    if (reducer.middleware) {
        storeMiddleware.push(reducer.middleware);
    }
});

app.store = redux.createStore(
    redux.combineReducers(reducers),
    initialState,
    reduxDevtoolsExtension.composeWithDevTools(
        apply(redux.applyMiddleware, storeMiddleware)
    )
);

eventListener.on(window, "resize orientationchange", function onResize() {
    app.store.dispatch({
        type: reducers.size.actions.CHANGE,
        width: window.innerWidth,
        height: window.innerHeight
    });
});

page.on("request", function onRequest(ctx) {
    app.store.dispatch({
        type: reducers.route.actions.CHANGE,
        ctx: ctx
    });
});