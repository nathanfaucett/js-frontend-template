var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper"),
    Layout = require("./Layout");


var HomePrototype;


function Home(props, context) {
    React.Component.call(this, props, context);
}
inherits(Home, React.Component);
HomePrototype = Home.prototype;

HomePrototype.render = function() {
    return (
        React.createElement(Layout, null,
            React.createElement(Wrapper, null,
                React.createElement("h1", null, "Home")
            )
        )
    );
};


module.exports = Home;