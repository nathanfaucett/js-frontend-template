var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper");


var FooterPrototype;


function Footer(props, context) {
    React.Component.call(this, props, context);
}
inherits(Footer, React.Component);
FooterPrototype = Footer.prototype;

FooterPrototype.render = function() {
    return (
        React.createElement(Wrapper, {
            className: "Footer"
        })
    );
};


module.exports = Footer;