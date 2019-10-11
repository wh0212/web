const fs = require("fs");
const mongoose = require("mongoose");
var url = "mongodb://127.0.0.1:27017/rounnb";
//读取静态文件
function read(pathname,porstfix,parame,chk){
    fs.readFile(pathname.substr(1),(err,data)=>{
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
var studes = mongoose.Schema({
    name:String,
    age:String,
    sex:String,
    phone:String
});
var Kitten = mongoose.model("Kitten",studes);
function mongo(cobk){
    mongoose.connect(url);
    var db = mongoose.connection;
    db.on("error",()=>{

    })
    db.once("open",()=>{
        cobk(db)
    })
}
//添加数据
function add(pathname,porstfix,parame,chk){
    var studel = new Kitten({
        name:parame.name,
        age:parame.age,
        sex:parame.sex,
        phone:parame.phone
    })
    mongo((db)=>{
        studel.save((err,objj)=>{
            if (!err) {
                console.log(obj)
                obj = {
                    data:objj,
                    type:{'Content-Type':'application/json'},
                    zt:"添加成功"
                }
                chk(obj);
                db.close();
            }
        })
    })
}
//页面查询
function load(pathname,porstfix,parame,chk){
    mongo((db)=>{
        Kitten.find({},(error,kittens)=>{
            if (!error) {
                console.log(kittens);
                obj = {
                    data:kittens,
                    type:{'Content-Type':'application/json'}
                }
                chk(obj);
                db.close();
            }else{
                console.log(error)
            }
        })
    })
}
//条件查询
function search(pathname,porstfix,parame,chk){
    var json = {name:parame.name};
    mongo((db)=>{
        Kitten.find(json,(error,kittens)=>{
            if (!error) {
                console.log(kittens);
                obj = {
                    data:kittens,
                    type:{'Content-Type':'application/json'},
                    zt:"查询成功"
                }
                chk(obj);
                db.close();
            }else{
                console.log(error)
            }
        })
    })
}
//删除
function del(pathname,porstfix,parame,chk){
    var json = {name:parame.name};
    mongo((db)=>{
        Kitten.remove(json,(error,kittens)=>{
            if (!error) {
                console.log(kittens);
                obj = {
                    data:kittens,
                    type:{'Content-Type':'application/json'},
                    zt:"删除成功"
                }
                chk(obj);
                db.close();
            }
        })
    })
}
//更新
function update(pathname,porstfix,parame,chk){
    var json = {name:parame.name};
    mongo((db)=>{
        Kitten.update(json,parame,(err,kitten)=>{
            if (!err) {
                Kitten.find({},(error,kittens)=>{
                    if (!error) {
                        console.log(kittens);
                        obj = {
                            data:kittens,
                            type:{'Content-Type':'application/json'},
                            zt:"更新成功"
                        }
                        chk(obj);
                        db.close();
                    }else{
                        console.log(error)
                    }
                })
            }
        })
    })
}
//删除
function delsc(pathname,porstfix,parame,chk){
    var json = {name:parame.name};
        mongo((db)=>{
            Kitten.remove(json,(err,kittens)=>{
                if (!err) {
                    console.log(kittens);
                    Kitten.find({},(error,kittens)=>{
                        if (!error) {
                            console.log(kittens);
                            obj = {
                                data:kittens,
                                type:{'Content-Type':'application/json'},
                                zt:"删除成功"
                            }
                            chk(obj);
                            db.close();
                        }else{
                            console.log(error)
                        }
                    })
                }
            })
        })
}

exports.read = read;
exports.add = add;
exports.load = load;
exports.search = search;
exports.del = del;
exports.update = update;
exports.delsc = delsc
