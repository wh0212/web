const express = require("express");
const uitt = require("./uitt");
// const reg = require("./register");
var Dbase = require("./dbase");
var userdbase = new Dbase();
const router = express.Router();

/**
 * 作用:向express的路由模块注册处理请求方法
 */

router.post('/register',(req,res)=>{
    userdbase.insertUser(req.body,(obj)=>{
        res.send(obj)
    })
    
    // reg.register(req,res,(obj)=>{
    //     res.send(obj)
    // });
})

router.get('/login',(req,res)=>{
    console.log(req.query);
    userdbase.login(req.query,(obj)=>{
        res.send(obj)
    });
    console.log("dl");
})

router.post('/obtain',(req,res)=>{
    var code = uitt.generate();
        var json = {
            zt:"获取成功",
            code:code
        }
        res.send(json)
})




module.exports = router;