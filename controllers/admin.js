var title = "Administrative Panel";
var testimonial = require('../models').Testimonial;

//ToDo: add admin pages and change what renders here
module.exports = {
    renderHome : function(req, res){
        res.render('home', {title : title, admin: true, home: true});   
    },
    renderBlog : function(req, res){
        res.render('blog', {title: title, admin: true, blog: true});
    },
    renderTestimonials : function(req, res){
        res.render('admin_add_testimonial', {title: title, admin: true, clients: true});
    },
    renderNutrition : function(req, res){
        res.render('nutrition', {title: title, admin: true, nutrition: true});
    },
    addTestimonial : function(req, res){
        if(req.body != null){
            var newTestimonial = new testimonial(JSON.parse(JSON.stringify(req.body)));
            newTestimonial.save(function(error){
                if(error){
                    res.send("error");
                }else{
                    res.send("success");
                }
            });
        }else{
            res.send("error");
        }
    }
}