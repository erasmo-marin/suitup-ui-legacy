var path = require("path");
var webpack = require("webpack");
var chalk = require("chalk");

module.exports = {
    context: __dirname,
    cache: true,
    entry: ["./src/components/index.jsx"],
    output: {
        path: "./dist",
        filename: "suitup.toolkit.min.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: "/node_modules",
                options: {
                    presets: [["es2015", { modules: false }]]
                }
            },
            {
                test: /\.less$/,
                exclude: "/node_modules",
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            mangle: true,
            sourcemap: false,
            debug: false,
            minimize: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};