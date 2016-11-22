var express = require('express'),
    config = require('./config.json').configuration,
    development = config.development,
    production = config.production,
    redis = require('redis'),
    client = redis.createClient(
        config.redis.port,
        config.redis.host
    ),
    async = require('async'),
    _ = require('underscore'),
    path = require('path'),
    api = require('./api');

var app = express();

client.debug_mode = true;

app.configure(function () {
    app.set('strict routing', true);
    app.set("shift address", "http://" + config.shift.host + ":" + config.shift.port);

    if (config.shift.port == 8000) {
        app.set("shift network", 'mainnet');
    } else {
        app.set("shift network", 'testnet');
    }

    app.locals.passphrase = config.shift.passphrase;
    app.locals.address = config.shift.address;
    app.locals.amountToSend = config.amount;
    app.locals.cacheTTL = config.cacheTTL;

    app.use(function (req, res, next) {
        req.shift = app.get("shift address");
        return next();
    });

    app.use(function (req, res, next) {
        req.fixedPoint = config.fixedPoint;
        next();
    });

    app.use(function (req, res, next) {
        req.redis = client;
        return next();
    });


    app.use(express.logger());
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.compress());
    app.use(express.methodOverride());
    app.use(express.bodyParser());
});

app.configure("development", function () {
    app.set("host", development.host);
    app.set("port", development.port);
    app.locals.captcha = development.captcha;
});

app.configure("production", function () {
    app.set("host", production.host);
    app.set("port", production.port);
    app.locals.captcha = production.captcha;
});

api(app);
app.listen(app.get('port'), app.get('host'), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started at " + app.get('host') + ":" + app.get('port'));
    }
});
