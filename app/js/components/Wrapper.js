var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    extend = require("@nathanfaucett/extend");


var WrapperPrototype;


function Wrapper(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(Wrapper, "Wrapper");
WrapperPrototype = Wrapper.prototype;

WrapperPrototype.getStyles = function() {
    return {
        root: {
            maxWidth: "960px",
            padding: "0px 16px",
            margin: "0px auto"
        }
    };
};

WrapperPrototype.render = function() {
    var styles = this.getStyles(),
        props = this.props;

    return <div
    className = {
        "Wrapper" + (props.className ? " " + props.className : "")
    }
    style = {
            extend(styles.root, props.style)
        } > {
            this.props.children
        } <
        /div>;
};


module.exports = Wrapper;