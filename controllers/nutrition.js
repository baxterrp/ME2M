module.exports = {
    index : function(req, res){
        res.render('nutrition', {title : "Nutrition", nutrition: true});   
    }
}