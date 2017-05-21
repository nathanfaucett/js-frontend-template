var environment = require("@nathanfaucett/environment"),
    extend = require("@nathanfaucett/extend");


var actions = {
    CHANGE: "size.CHANGE"
};


function getInitialState() {
    return {
        width: environment.window.innerWidth || 960,
        height: environment.window.innerHeight || 640
    };
}

function size(state, action) {

    switch (action.type) {

        case actions.CHANGE:
            return extend({}, state, {
                width: action.width,
                height: action.height
            });

        default:
            return state || getInitialState();
    }
}


size.actions = actions;
size.getInitialState = getInitialState;

module.exports = size;