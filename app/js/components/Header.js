var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    arrayMap = require("@nathanfaucett/array-map"),
    Wrapper = require("./Wrapper");


var LINKS = [{
        key: "home",
        href: "/"
    }, {
        key: "private",
        href: "/private"
    }, {
        key: "sign_in",
        href: "/sign_in"
    }],
    HeaderPrototype;


function Header(props, context) {
    React.Component.call(this, props, context);
}
React.Component.extend(Header, "Header");
HeaderPrototype = Header.prototype;

HeaderPrototype.getStyles = function() {
    return {
        ul: {},
        li: {
            margin: "0px 8px",
            padding: "8px",
            display: "inline-block"
        }
    };
};

HeaderPrototype.render = function() {
    var styles = this.getStyles();

    return <Wrapper className = "Header" >
        <
        ul style = {
            styles.ul
        } > {
            arrayMap(LINKS, function each(link) {
                return <li key = {
                    link.key
                }
                style = {
                        styles.li
                    } >
                    <
                    a href = {
                        link.href
                    } > {
                        "nav." + link.key
                    } < /a> < /
                li > ;
            })
        } <
        /ul> < /
    Wrapper > ;
};


module.exports = Header;