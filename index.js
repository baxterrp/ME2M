var express = require("express"),
	config = require('./server/configure'),
    app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');

app = config(app);

app.listen(app.get('port'), function(){
	console.log("ME2M is online");
})

