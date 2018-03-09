admin = {
    MapObject : function(item){
        object = {};
        for(var i in item){
            object[item[i].name] = item[i].value;
        }
        return object;
    }
}