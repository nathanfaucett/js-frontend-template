var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    Wrapper = require("./Wrapper");


var FooterPrototype;


function Footer(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(Footer, "Footer");
FooterPrototype = Footer.prototype;

FooterPrototype.render = function() {
    return <Wrapper className = "Footer" >
        Footer <
        /Wrapper>;
};


module.exports = Footer;