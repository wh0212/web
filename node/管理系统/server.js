const express = require("express");
const app = express();
//引入body-parser模块
const bodyParser = require("body-parser");

var user = require("./user");
var student = require("./student");

function server(){
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/user",user);
    app.use("/student",student);
    /**
     * npm下载body-parse模块
     * 引用body-parse模块
     * 设置参数解析器
     */
    app.listen(8080,()=>{
        console.log("ok");
    })
}
exports.server =server;