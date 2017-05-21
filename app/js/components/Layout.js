var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Header = require("./Header"),
    Footer = require("./Footer");


var LayoutPrototype;


function Layout(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(Layout, "Layout");
LayoutPrototype = Layout.prototype;

LayoutPrototype.render = function() {
    return <div className = "Layout" >
        <
        Header / >
        <
        div > {
            this.props.children
        } < /div> <
    Footer / >
        <
        /div>;
};


module.exports = Layout;