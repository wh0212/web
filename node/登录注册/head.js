const mongoose = require("mongoose");
var utill = require("./uitt");
var Datamodel = require("./model/datamodel");
var url = "mongodb://127.0.0.1:27017/rounnb";
function add(parms,chk){
    var code = utill.generate();
    var data = {
        zt:"验证成功",
        data:{
            code:code
        }
    }
    var datamodel = new Datamodel({'Conent-Type':'application/json'},data);
    chk(datamodel);
}
var status = mongoose.Schema({
    user:String,
    pass:String,
    phone:String
});
var Login = mongoose.model("Login",status);
function mongo(chk){
    mongoose.connect(url);
    var db = mongoose.connection;
    db.on("error",()=>{});
    db.once("open",()=>{
        chk(db)
    })
}
//注册
function btnadd(parms,chk){
    var login = new Login({
        user:parms.user,
        pass:parms.pass,
        phone:parms.phone
    });
    mongo((db)=>{
        login.save((err,res)=>{
            if (!err) {
                console.log(res)
                var data = {
                    zt:"注册成功",
                    data:res
                }
                var datamodel = new Datamodel({'Conent-Type':'application/json'},data);
                chk(datamodel);
                db.close();
            }
        })
    })
}
//登录
function enter(parms,chk){
    var json = {user:parms.user}
    console.log(parms,'dddgg')
    mongo((db)=>{
        Login.find(json,(err,res)=>{
            if (!err) {
                var data = {
                    zt:"登录成功",
                    data:res
                }
                console.log(res,'123');
                if (res == "") {
                    data.zt ="登录失败"
                }
                var datamodel = new Datamodel({'Conent-Type':'application/json'},data);
                chk(datamodel);
                db.close();
            }
        })
    })
}

exports.add = add;
exports.btnadd = btnadd;
exports.enter = enter