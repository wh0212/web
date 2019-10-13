const http = require("http");
function server(urll,route,houst){
    http.createServer((req,res)=>{
        urll(req,(model)=>{
            console.log('dd',model)
            route(model,houst,(data)=>{
                res.writeHead(200,data.type);
                if (model.postfix) {
                    res.write(data.data);
                }else{
                    data = JSON.stringify(data.data);
                    res.write(data);
                }
                res.end();
            })
        })
    }).listen(8080,'127.0.0.1',()=>{
        console.log("ok")
    })
}
exports.server = server;