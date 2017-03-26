var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    cache: true,
    devtool: "cheap-module-eval-source-map",
    entry: [
        "webpack-hot-middleware/client",
        "react-hot-loader/patch",
        "./demo/devEntry.jsx"
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
                        "transform-class-properties",
                        "transform-decorators-legacy",
                        "react-hot-loader/babel",
                        "jsx-control-statements",
                        "transform-function-bind",
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
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};