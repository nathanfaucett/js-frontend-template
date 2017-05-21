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
React.Component.extend(Root, "Root");
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
    return <Provider store = {
            this.props.store
        } >
        <
        App / >
        <
        /Provider>;
};


module.exports = Root;