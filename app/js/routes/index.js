var Home = require("../components/Home"),
    SignIn = require("../components/SignIn"),
    Private = require("../components/Private"),
    NotFound = require("../components/NotFound"),
    redirect = require("./middleware/redirect"),
    app = require("../app");


app.route("/not_found", "not_found", NotFound);

app.route("/", "index", Home);
app.route("/sign_in", "sign_in", SignIn);

app.middleware("/", redirect);

app.route("/private", "private", Private);