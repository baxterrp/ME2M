var express = require('express'),
    router = express.Router(),
    user = require('../controllers/user'),
    admin = require('../controllers/admin');

module.exports = function(app){
   	
    // render user views
	router.get('/', user.renderIndex);
    router.get('/blog', user.renderBlog);
    router.get('/testimonials', user.renderTestimonials);
    router.get('/nutrition', user.renderNutrition);
    router.get('/faq', user.renderFaq);
    
    // render admin views
    router.get('/admin', admin.renderHome);
    router.get('/admin-blog-management', admin.renderBlog);
    router.get('/admin-testimonial-management', admin.renderTestimonials);
    router.get('/admin-nutrition-management', admin.renderNutrition);
        
    app.use(router);
}