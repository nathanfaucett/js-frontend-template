var React = require("react"),
    ReactDOM = require("react-dom"),
    inherits = require("@nathanfaucett/inherits"),
    environment = require("@nathanfaucett/environment"),
    eventListener = require("@nathanfaucett/event_listener"),
    once = require("@nathanfaucett/once"),
    app;


React.Component.extend = function extend(Child, displayName) {
    inherits(Child, this);
    Child.displayName = Child.prototype.displayName = displayName || Child.name;
    return Child;
};


app = require("./app");


eventListener.on(environment.window, "load DOMContentLoaded", once(function onLoad() {
    ReactDOM.render(
        React.createElement(app.Root, {
            store: app.store
        }),
        document.getElementById("app")
    );
    app.init();
}));