module.exports = {
    index : function(req, res){
        res.render('blog', {title : "MEM Blog", blog: true});   
    }
}