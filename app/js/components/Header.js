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
inherits(Header, React.Component);
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

    return (
        React.createElement(Wrapper, {
                className: "Header"
            },
            React.createElement("ul", {
                    style: styles.ul
                },
                arrayMap(LINKS, function each(link) {
                    return (
                        React.createElement("li", {
                                key: link.key,
                                style: styles.li
                            },
                            React.createElement("a", {
                                    href: link.href
                                },
                                "nav." + link.key
                            )
                        )
                    );
                })
            )
        )
    );
};


module.exports = Header;