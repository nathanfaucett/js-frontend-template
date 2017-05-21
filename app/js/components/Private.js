var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper"),
    Layout = require("./Layout");


var PrivatePrototype;


function Private(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(Private, "Private");
PrivatePrototype = Private.prototype;

PrivatePrototype.render = function() {
    return <Layout >
        <
        Wrapper >
        <
        h1 > Private < /h1> < /
    Wrapper > <
        /Layout>;
};


module.exports = Private;