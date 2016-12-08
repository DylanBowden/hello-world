var d, num
var ld = require('lodash);


module.exports = function(objects) {
    
    var string = "hello"
    
    
    for(i=0; i++)
    {
    if(objects[i].name.val.indexOf("day") > 0) {
        string += '! Today is' +objects.name.val
    }
    
     
        string += ' and the time is ' + Date.now();
        
        
        string += "welcome to the "+objects[i].world.type
        
        
        return string
    
        
    }
    
    return "hello world";

}
