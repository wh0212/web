const url = require("url");
const path = require("path");
const querystring = require("querystring");
var Model = require("./model/urlmodel");
function urll(req,chk){
    var pathName = url.parse(req.url,true);
    var pathname = pathName.pathname;
    var postfix = path.extname(pathname);
    var parms;
    var model = new Model();
    if (req.method == "GET") {
        parms= pathName.query;
        model.parse(pathname,postfix,parms);
        chk(model);
    } else {
        var json = "";
        req.on("data",(shuju)=>{
            json +=shuju;
        })
        req.on("end",()=>{
            json = querystring.parse(json);
            parms=json;
            model.parse(pathname,postfix,parms);
            chk(model);
        })
    }
}
exports.urll = urll;