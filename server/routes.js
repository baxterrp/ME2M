var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    blog = require('../controllers/blog'),
    testimonials = require('../controllers/testimonials'),
    nutrition = require('../controllers/nutrition'),
    faq = require('../controllers/faq');

module.exports = function(app){
   	
    // home
	router.get('/', home.index);
    
    // blog
    router.get('/blog', blog.index);

    // testimonials
    router.get('/testimonials', testimonials.index);
    
    // nutrition
    router.get('/nutrition', nutrition.index);

    // faq
    router.get('/faq', faq.index);
    
    app.use(router);
}