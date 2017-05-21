var vfs = require("vinyl-fs"),
    webpack = require("webpack-stream"),
    filePath = require("@nathanfaucett/file_path");


var webpackConfig = function(config) {
    return {
        devtool: "source-map",
        output: {
            filename: "index.js"
        },
        module: {
            loaders: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"]
                }
            }]
        }
    };
}


module.exports = function(config) {
    return function() {
        return vfs.src(config.paths.js_src)
            .pipe(webpack(webpackConfig(config)))
            .on("error", function handleError(e) {
                this.emit("end");
            })
            .pipe(vfs.dest(config.paths.out));
    };
};
