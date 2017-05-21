var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper"),
    Layout = require("./Layout");


var HomePrototype;


function Home(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(Home, "Home");
HomePrototype = Home.prototype;

HomePrototype.render = function() {
    return <Layout >
        <
        Wrapper >
        <
        h1 > Home < /h1> < /
    Wrapper > <
        /Layout>;
};


module.exports = Home;