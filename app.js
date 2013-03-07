/**
 * Module dependencies.
 */
var express = require('express'),
    db = require('./model/db'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
//app.get('/users', user.list);
//app.post('/create', routes.create);
//app.get('/destroy/:id', routes.destroy);
//app.get('/edit/:id', routes.edit );


//app.get('/instrument', instrument.showHome);
//app.get('/shop', instrument.showShop);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
