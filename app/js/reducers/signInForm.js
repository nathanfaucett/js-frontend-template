var extend = require("@nathanfaucett/extend"),
    user = require("./user");


var actions = {
    SET_EMAIL: "signInForm.SET_EMAIL",
    SET_PASSWORD: "signInForm.SET_PASSWORD",

    SUBMIT: "signInForm.SUBMIT"
};

function getInitialState() {
    return {
        email: "",
        password: ""
    };
}

function signInFormMiddleware(store) {

    return function(next) {

        return function(action) {

            switch (action.type) {

                case actions.SUBMIT:
                    store.dispatch({
                        type: user.actions.GET_SUCCESS,
                        user: {
                            email: store.getState().signInForm.email
                        }
                    });
                    break;
            }

            return next(action);
        };
    };
}

function signInForm(state, action) {

    switch (action.type) {

        case actions.SET_EMAIL:
            return extend({}, state, {
                email: action.value
            });

        case actions.SET_PASSWORD:
            return extend({}, state, {
                password: action.value
            });

        default:
            return state || getInitialState();
    }
}


signInForm.actions = actions;
signInForm.getInitialState = getInitialState;
signInForm.middleware = signInFormMiddleware;

module.exports = signInForm;