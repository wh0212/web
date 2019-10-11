const url = require("url");
const path = require("path");
const querystring = require("querystring")
function urll(req,callback){
    var pathName = url.parse(req.url,true);
    var pathname = pathName.pathname;
    var porstfix = path.extname(pathname);
    var parame;
    if (req.method == "GET") {
        parame = pathName.query;
        console.log(parame)
        callback(pathname,porstfix,parame);
    }else if(req.method == "POST") {
        var shuju = "";
        req.on("data",(json)=>{
            shuju+=json;
        })
        req.on("end",()=>{
            var parame = querystring.parse(shuju);
            callback(pathname,porstfix,parame);
        })
    }
}

exports.urll = urll;