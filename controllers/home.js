module.exports = {
    index : function(req, res){
        res.render('home', {title : "Home Page", home: true});   
    }
}