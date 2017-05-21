var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper"),
    Layout = require("./Layout");


var NotFoundPrototype;


function NotFound(props, context) {
    React.Component.call(this, props, context);
}
inherits(NotFound, React.Component);
NotFoundPrototype = NotFound.prototype;

NotFoundPrototype.render = function() {
    return (
        React.createElement(Layout, null,
            React.createElement(Wrapper, null,
                React.createElement("h1", null, "404 - Not Found")
            )
        )
    );
};


module.exports = NotFound;