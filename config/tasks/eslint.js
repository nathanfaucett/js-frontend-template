var vfs = require("vinyl-fs"),
    eslint = require("gulp-eslint");


module.exports = function(config) {
    return function() {
        return vfs.src(config.paths.js + "/**/*.js")
            .pipe(eslint({
                useEslintrc: false,
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true
                    }
                }
            }))
            .pipe(eslint.format());
    };
};
