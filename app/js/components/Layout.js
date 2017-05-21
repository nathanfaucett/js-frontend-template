var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Header = require("./Header"),
    Footer = require("./Footer");


var LayoutPrototype;


function Layout(props, context) {
    React.Component.call(this, props, context);
}
inherits(Layout, React.Component);
LayoutPrototype = Layout.prototype;

LayoutPrototype.render = function() {
    return (
        React.createElement("div", {
                className: "Layout"
            },
            React.createElement(Header, null),
            React.createElement("div", null, this.props.children),
            React.createElement(Footer, null)
        )
    );
};


module.exports = Layout;