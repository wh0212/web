const http = require("http");
function server(urll,route,porst){
    http.createServer((req,res)=>{
        urll(req,(pathname,porstfix,parmes)=>{
            route(parmes,pathname,porstfix,porst,(data)=>{
                res.writeHead(200,data.type);
                if (porstfix) {
                    res.write(data.data);
                } else {
                    var datajson = JSON.stringify(data.data);
                    res.write(datajson);
                }
                res.end();
            })
        })
    }).listen(8080,'127.0.0.1',()=>{
        console.log('ok')
    })
}

exports.server = server