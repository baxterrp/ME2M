var testimonial = require('../models').Testimonial;

module.exports = {
    renderIndex : function(req, res){
        res.render('home', {title : "Home Page", home: true});   
    },
    renderBlog: function(req, res){
        res.render('blog', {title: "MEM Blog", blog: true});
    },
    renderTestimonials : function(req, res){
        testimonial.find({}, function(error, results){
            res.render('testimonials', {testimonials: results, title: "Client Testimonials", clients: true});
        });
    },
    renderNutrition : function(req, res){
        res.render('nutrition', {title: "Nutrition Tips", nutrition: true});
    },
    renderFaq : function(req, res){
        res.render('faq', {title: "Frequently Asked Questions", faq: true});
    }
}