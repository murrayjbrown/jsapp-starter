'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var pkg = require('./package.json');

// var cdn = process.env.REMIND_CDN || '';

module.exports = {
    resolve: {
        root: path.resolve('./build'),
        extensions: ['', '.js']
    },
    entry: {
        app: ["app/demo", ],
        common: ["lib/demo_mod1", "lib/demo_mod2", ],
    },
    output: {
        path: path.join(__dirname, "build", "app"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js",
        libraryTarget: "umd",
        crossOriginLoading: "use-credentials"
    },
    externals: ["demoContainer", "mithril", "jquery"],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"common", /* filename= */"common.bundle.js")
    ],
    devtool: "#inline-source-map",
    target: "web"
};
