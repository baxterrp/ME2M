var bodyParser = require('body-parser'),
    express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    session = require('express-session');

module.exports = function(app){
	
    // set up bodyparser	
	app.use(bodyParser.urlencoded({'extended':true}));
	app.use(bodyParser.json()); 
    
    // setup sessions
    app.use(session({
	  secret: '2jjf23fj3f409455565j36fafjdas0943j43j',
	  resave: false,
	  saveUninitialized: false
	}));
    
    // put app into routes constructor
	routes(app);
    
    // make public folder visible
	app.use('/public/', express.static(path.join(__dirname, '../public')));
    
    // setup handlebars
	app.engine('handlebars', exphbs.create({
		defaultLayout: 'main',
		layoutDir: app.get('views') + '/layouts',
		partialDir: app.get('views') + '/partials'
	}).engine);

    // set view engine to handlebars
	app.set('view engine', 'handlebars');
    
    return app;
}