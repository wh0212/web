const http = require("http");

function server(urll,route,houst){
    http.createServer((req,res)=>{
        urll(req,(pathname,porstfix,parame)=>{
            route(pathname,porstfix,parame,houst,(data)=>{
                res.writeHead(200,data.type);
                if (porstfix) {
                    res.write(data.data);
                } else {
                    var shuju = {
                        data:data.data,
                        zt :data.zt
                    }
                    var shuju = JSON.stringify(shuju);
                    res.write(shuju);
                }
                res.end();
            })
        })

    }).listen(8080,'127.0.0.1',()=>{
        console.log("ok");
    })
}

exports.server = server