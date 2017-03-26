var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var helpers = require("./views/helpers");
var webpack = require("webpack");
var compression = require('compression');
var helmet = require('helmet');
var oneDay = 86400000;

//routes
var routes = require("./routes/index");
var app = express();

app.use(helmet({
    noCache: false
}));
app.use(compression());
app.use(express.static(path.join(__dirname, "public"), { maxAge: oneDay/2 }));


if(process.env.NODE_ENV != "production") {

    var configFile = "./webpack.config.demo";
    var webpackConfig = require(configFile);
    var compiler = webpack(webpackConfig);

    app.use(
        require("webpack-dev-middleware")(compiler, {
            publicPath: webpackConfig.output.publicPath
        })
    );
    app.use(require("webpack-hot-middleware")(compiler));
}

hbs.registerPartials(__dirname + "/views/partials");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});

module.exports = app;