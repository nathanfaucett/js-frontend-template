var app = require("../../app");


module.exports = redirect;


function redirect(ctx, next) {
    var pathname = ctx.pathname,
        user = app.store.getState().user;

    if (!!user.email) {
        next();
    } else {
        if (pathname !== "/sign_in") {
            app.page.go("/sign_in");
        } else {
            next();
        }
    }
}