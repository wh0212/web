let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let serfer = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/plain; charset=utf-8");
    var path = url.parse(req.url).pathname;
    //读取
    fs.readFile(path.substring(1), function (err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            })
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data.toString())
        }
        res.end()
    })
})

serfer.listen(3000, '127.0.0.1', () => {
    console.log("已经运行")
})