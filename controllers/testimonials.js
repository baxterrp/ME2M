module.exports = {
    index : function(req, res){
        res.render('testimonials', {title : "Client Testimonials", clients: true});   
    }
}