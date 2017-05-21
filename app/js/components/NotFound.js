var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper"),
    Layout = require("./Layout");


var NotFoundPrototype;


function NotFound(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(NotFound, "NotFound");
NotFoundPrototype = NotFound.prototype;

NotFoundPrototype.render = function() {
    return <Layout >
        <
        Wrapper >
        <
        h1 > 404 - Not Found < /h1> < /
    Wrapper > <
        /Layout>;
};


module.exports = NotFound;