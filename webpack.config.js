var path = require('path');
var webpack = require('webpack');
var chalk = require('chalk');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = 'development';
env = process.env.ENVIRONMENT || env;

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')),
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.ENVIRONMENT || env)
    }
});

/*var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');*/
var pluginsSettings = [];

if (env == 'production') {
    console.log("Building in production mode");
    pluginsSettings = [
        definePlugin,
        /*commonsPlugin,*/
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          sourcemap: false,
          compress: {
            warnings: false,
          }
        })
    ];
} else {
    console.log("Building in development mode");
    pluginsSettings = [
        definePlugin,
        /*commonsPlugin,*/
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("suitup-toolkit.css")
    ];
}

module.exports = {
    context: __dirname,
    cache: true,
    entry: ['./client/index.jsx', 'webpack-hot-middleware/client'],
    output: {
        publicPath: '/',
        path: __dirname,
        filename: 'suitup-toolkit.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                /*include: path.join(__dirname, 'src'),*/
                exclude: '/node_modules'/*,
                query: {
                    plugins: ['react-hot-loader/babel'],
                    presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-1'].map(require.resolve)
                }*/
            },
            {
                test:/\.less$/,
                exclude:'/node_modules',
                loader: ExtractTextPlugin.extract(['css','less'])
            } 
        ]
    },
    resolve: {
        extensions: ['', '.js','.jsx']
    },
    plugins: pluginsSettings
};