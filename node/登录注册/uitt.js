function generate(){
    var code = "";
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'); 
    for(var i = 0; i < 6; i++){ //循环codeLength 我设置的4就是循环4次   
       var index = Math.floor(Math.random()*36); //设置随机数范围,这设置为0 ~ 36  
       code += random[index]; //字符串拼接 将每次随机的字符 进行拼接 
  } 
    return code;
}
exports.generate = generate