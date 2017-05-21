var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    ReactRedux = require("react-redux"),
    app = require("../app");


var AppPrototype;


function App(props, context) {
    React.Component.call(this, props, context);
}
inherits(App, React.Component);
AppPrototype = App.prototype;

AppPrototype.render = function() {
    var state = this.props.state,
        Component = app.getView(state);

    if (Component) {
        return (
            React.createElement("div", {
                    key: "app",
                    className: "App"
                },
                React.createElement(Component, null)
            )
        );
    } else {
        return (
            React.createElement("div", {
                    key: "app",
                    className: "App"
                },
                React.createElement("p", null, "ERROR")
            )
        );
    }
};


function mapDispatchToProps( /* dispatch */ ) {
    return {};
}

function mapStateToProps(state) {
    return {
        state: state.route.state
    };
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);