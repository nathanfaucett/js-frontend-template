var React = require("react"),
    ReactDOM = require("react-dom"),
    environment = require("@nathanfaucett/environment"),
    eventListener = require("@nathanfaucett/event_listener"),
    once = require("@nathanfaucett/once"),
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