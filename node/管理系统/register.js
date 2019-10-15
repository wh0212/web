const querystring = require("querystring");
var Dbase = require("./dbase");
var userdbase = new Dbase();

function register(req,res,chk){
    var shuju = "";
    req.on("data",(json)=>{
        shuju+=json
    })
    req.on("end",()=>{
        parms = querystring.parse(shuju);
        console.log(parms);
        userdbase.insertUser(parms,(obj)=>{
            chk(obj)
        })
    })
}
exports.register = register;