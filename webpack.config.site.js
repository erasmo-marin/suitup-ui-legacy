var path = require("path");
var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");
var chalk = require("chalk");
var CleanCSSPlugin = require("less-plugin-clean-css");

module.exports = {
    context: __dirname,
    cache: true,
    devtool: false,
    entry: [
        "webpack-hot-middleware/client",
        "react-hot-loader/patch",
        "./demo/index.jsx"
    ],
    output: {
        publicPath: "/",
        path: __dirname,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    babelrc: false,
                    presets: [
                        ["es2015", { modules: false }],
                        "stage-3",
                        "react"
                    ],
                    plugins: [
                        "transform-decorators-legacy",
                        "react-hot-loader/babel",
                        "jsx-control-statements",
                        "transform-function-bind",
                        "transform-class-properties",
                        "lodash"
                    ]
                }
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },{
                    loader: "postcss-loader"
                },
                {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.md$/,
                use: ["raw-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".md", ".json", ".less"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
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
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};