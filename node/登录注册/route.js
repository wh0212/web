var File = require("./file");
var Head = require("./head")
function route(model,houst,chk){
    var file = new File();
    var fun ;
    if (model.postfix) {
        file.read(model.pathname,model.postfix,(data)=>{
            chk(data);
        });
    }else{
        fun = houst[model.pathname];
        if (typeof(fun) == 'function') {
            fun(model.parms,(data)=>{
                chk(data);
            })
        }
    }
}
exports.route = route