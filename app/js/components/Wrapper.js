var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    extend = require("@nathanfaucett/extend");


var WrapperPrototype;


function Wrapper(props, context) {
    React.Component.call(this, props, context);
}
inherits(Wrapper, React.Component);
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

    return (
        React.createElement("div", {
                className: "Wrapper" + (props.className ? " " + props.className : ""),
                style: extend(styles.root, props.style)
            },
            this.props.children
        )
    );
};


module.exports = Wrapper;