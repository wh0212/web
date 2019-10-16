const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/rounnb";

var status = mongoose.Schema({
    phone :{type:[String],index:true},
    pass :String,
    yzm:String,
    name:String,
    age:String,
    sex:String,
    system:String,
    remark:String
})
var studentS = mongoose.Schema({
    phone :{type:[String],index:true},
    pass :String,
    yzm:String,
    name:String,
    age:String,
    sex:String,
    system:String,
    remark:String
})
var User = mongoose.model("User",status);
var Student = mongoose.model("Student",studentS);

function Dbase(){
    this.connect = function(callbaack){
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on("error",()=>{
            
        })
        db.once("open",()=>{
            callbaack(db)
        })
    }
    this.insertUser = function(parms,chk){
        user = new User({
            phone:parms.phone,
            yzm:parms.yzm,
            pass:parms.pass,
            name:"",
            age:"",
            sex:"",
            system:"",
            remark:""
        })
        this.connect((db)=>{
            user.save((err,res)=>{
                if (!err) {
                    console.log(res);
                    var json = {
                        zt:"注册成功",
                        code:res
                    }
                    chk(json);
                    db.close();
                }
            })
        })
    };
    this.login = function(parms,chk){
        var json = {phone:parms.phone}
        this.connect((db)=>{
            User.find(json,(err,res)=>{
                if (!err) {
                    res.forEach(element => {
                        if (parms.pass != element.pass) {
                            var jso = {
                                zt:"登录失败",
                                code:res
                            }
                            chk(jso);
                        }else{
                            var jso = {
                                zt:"登录成功",
                                code:res
                            }
                            chk(jso);
                        }
                    });
                    db.close();
                }
            })
        })
    };
    this.load= function(chk){
        this.connect((db)=>{
            Student.find({},(err,res)=>{
                if (!err) {
                    chk(res);
                    db.close();
                }
            })
        })
    }
    this.grabble = function(parms,chk){
        this.connect((db)=>{
            Student.find(parms,(err,data)=>{
                if (!err) {
                    console.log(data);
                    if (data !=0) {
                        var jso = {
                            zt:"查询成功",
                            code:data
                        }
                        chk(jso);
                    }else{
                        var jso = {
                            zt:"没有该数据",
                            code:""
                        }
                        chk(jso);
                    }
                    db.close();
                }
            })
        })
    };
    this.insert = function(parms,chk){
        student = new Student({
            phone:parms.phone,
            name:parms.name,
            age:parms.age,
            sex:parms.sex,
            system:parms.system,
            remark:parms.remark   
        })
        this.connect((db)=>{
            Student.find({name:parms.name},(err,data)=>{
                if (!err) {
                    console.log(data);
                    if (data != 0) {
                        var jso = {
                            zt:"数据库已有该数据",
                            code:""
                        }
                        chk(jso);
                        return;
                    }
                    student.save((err,res)=>{
                        if (!err) {
                            console.log(res);
                            var jso = {
                                zt:"新增成功",
                                code:res
                            }
                            chk(jso);
                        }
                    })
                }
            })
        })
    };
    this.del = function(parms,chk){
        console.log(parms.name);
        var json = {name:parms.name}
        this.connect((db)=>{
            Student.remove(json,(err,data)=>{
                if (!err) {
                    console.log(data);
                    var jso = {
                        zt:"删除成功",
                        code:data
                    }
                    chk(jso);
                }
            })
        })
    }
    this.gengxin = function(parms,chk){
        this.connect((db)=>{
            console.log(parms.name,'123456')
            Student.update({name:parms.name},parms,(err,res)=>{
                if (!err) {
                    Student.find({},(err,data)=>{
                        if (!err) {
                            console.log(data);
                            var jso = {
                                zt:"更新成功",
                                code:data
                            }
                            chk(jso);
                        }
                    })
                }
            })
            
        })
    }
}

module.exports = Dbase;





