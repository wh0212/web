function generate(){
    var code = "";
    var random = new Array(0,1,2,3,4,5,6,7,8,9); 
    for(var i = 0; i < 6; i++){  
       var index = Math.floor(Math.random()*10);  
       code += random[index];
  } 
    return code;
}
exports.generate = generate