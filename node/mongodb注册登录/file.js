const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/rounnb";
function mongo(callbok){
    mongodb.connect(url,{useNewUrlParser:true},(error,db)=>{
        if (!error) {
            callbok(error,db);
        }
    })
}
//读取
function read(parmes,path,porstfix,chk){
    fs.readFile(path.substr(1),(err,data)=>{
        if (!err) {
            var content;
            if (porstfix == ".html") {
                content = {'Content-Type':'text/html'};
            } else if(porstfix == ".css") {
                content = {'Content-Type':'text/css'};
            }else if(porstfix == ".js") {
                content = {'Content-Type':'application/javascript'};
            }
            obj = {
                data:data,
                type:content
            }
            chk(obj);
        }
    })
}
//写入
function write(parmes,path,porstfix,chk){
    console.log('dd',parmes)
    mongo((error,db)=>{
        var dbpars = db.db("rounnb");
            dbpars.collection("user").insertOne(parmes,(error,res)=>{
            if (!error) {
                obj = {
                    data:"注册成功",
                    type:{'Content-Type':'application/json'}
                }
                console.log("注册写入成功");
                chk(obj);
            }
            })
    })
}
//读取
function ready(parmes,path,porstfix,chk){
    mongo((error,db)=>{
        var dbpars = db.db("rounnb");
            dbpars.collection("user").find(parmes).toArray((error,result)=>{
                if (!error) {
                    obj = {
                        data:"登录成功",
                        type:{'Content-Type':'application/json'}
                    }
                    chk(obj);
                    console.log(result)
                }
            })
    })
}
//删除
function del(parmes,path,porstfix,chk){
    mongo((error,db)=>{
        var dbpars = db.db("rounnb");
            dbpars.collection("user").deleteOne(parmes,(error,result)=>{
                if (!error) {
                    obj = {
                        data:"注销成功",
                        type:{'Content-Type':'application/json'}
                    }
                    chk(obj);
                    console.log("删除成功")
                }
        })
    })
}
//更新
function update(parmes,path,porstfix,chk){
    var updateobj = {"name":parmes.name}
    var updatejson = {$set:{'age':parmes.age}};
    mongo((error,db)=>{
        var dbpars = db.db("rounnb");
        dbpars.collection("user").updateOne(updateobj,updatejson,(err,res)=>{
            if (!err) {
                obj = {
                    data:"更新成功",
                    type:{'Content-Type':'application/json'}
                }
                chk(obj);
                console.log("更新成功")
            }
        })
    })
}
exports.read = read;
exports.write = write;
exports.ready = ready;
exports.del = del;
exports.update = update
