var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    ReactRedux = require("react-redux"),
    app = require("../app");


var AppPrototype;


function App(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(App, "App");
AppPrototype = App.prototype;

AppPrototype.render = function() {
    var state = this.props.state,
        Component = app.getView(state);

    if (Component) {
        return <Component / > ;
    } else {
        return <p > ERROR < /p>;
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