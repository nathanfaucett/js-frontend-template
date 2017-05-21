var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    ReactRedux = require("react-redux"),
    signInForm = require("../reducers/signInForm"),
    Wrapper = require("./Wrapper"),
    Layout = require("./Layout"),
    app = require("../app");


var SignInPrototype;


function SignIn(props, context) {
    var _this = this;

    React.Component.call(this, props, context);

    this.onEmailChange = function(e) {
        _this.props.setEmail(e.target.value);
    };
    this.onPasswordChange = function(e) {
        _this.props.setPassword(e.target.value);
    };
    this.onSubmit = function() {
        _this.props.submit();
    };
}
React.Component.extend(SignIn, "SignIn");
SignInPrototype = SignIn.prototype;

SignInPrototype.componentDidUpdate = function() {
    if (this.props.signedIn) {
        app.page.go("/private");
    }
};

SignInPrototype.getStyles = function() {
    return {
        root: {
            margin: "0px auto",
            maxWidth: "480px"
        },
        input: {
            padding: "8px",
            borderBottom: "1px solid black",
            marginBottom: "16px"
        },
        submit: {
            padding: "8px",
            background: "#aaa"
        }
    }
};

SignInPrototype.render = function() {
    var props = this.props,
        styles = this.getStyles();

    return (
        React.createElement(Layout, null,
            React.createElement(Wrapper, null,
                React.createElement("div", {
                        style: styles.root
                    },
                    React.createElement("input", {
                        style: styles.input,
                        onChange: this.onEmailChange,
                        value: props.email,
                        type: "email"
                    }),
                    React.createElement("input", {
                        style: styles.input,
                        onChange: this.onPasswordChange,
                        value: props.password,
                        type: "password"
                    }),
                    React.createElement("input", {
                        style: styles.submit,
                        onClick: this.onSubmit,
                        type: "submit"
                    })
                )
            )
        )
    );
};


function mapDispatchToProps(dispatch) {
    return {
        setEmail: function(value) {
            dispatch({
                type: signInForm.actions.SET_EMAIL,
                value: value
            });
        },
        setPassword: function(value) {
            dispatch({
                type: signInForm.actions.SET_PASSWORD,
                value: value
            });
        },
        submit: function() {
            dispatch({
                type: signInForm.actions.SUBMIT
            });
        }
    };
}

function mapStateToProps(state) {
    return {
        email: state.signInForm.email,
        password: state.signInForm.password,
        signedIn: !!state.user.email
    };
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SignIn);