var extend = require("@nathanfaucett/extend");


var actions = {
    GET_SUCCESS: "user.GET_SUCCESS"
};

function getInitialState() {
    return {
        email: ""
    };
}

function user(state, action) {

    switch (action.type) {

        case actions.GET_SUCCESS:
            return extend({}, state, {
                email: action.user.email
            });

        default:
            return state || getInitialState();
    }
}


user.actions = actions;
user.getInitialState = getInitialState;

module.exports = user;