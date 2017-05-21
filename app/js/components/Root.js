var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    ReactRedux = require("react-redux"),
    propTypes = require("prop-types"),
    App = require("./App");


var Provider = ReactRedux.Provider,
    RootPrototype;


function Root(props, context) {
    React.Component.call(this, props, context);
}
inherits(Root, React.Component);
RootPrototype = Root.prototype;

Root.propTypes = {
    store: propTypes.object.isRequired
};

Root.propTypes = {
    store: propTypes.shape({
        getState: propTypes.func.isRequired,
        dispatch: propTypes.func.isRequired
    }).isRequired
};

RootPrototype.render = function() {
    return (
        React.createElement(Provider, {
                store: this.props.store
            },
            React.createElement(App, null)
        )
    );
};


module.exports = Root;