const express = require("express");
const uitt = require("./uitt");
// const reg = require("./register");
var Dbase = require("./dbase");
var studdbase = new Dbase();
const router = express.Router();
//搜索
router.get('/grabble',(req,res)=>{
    console.log(req.query,'eee')
    userdbase.grabble(req.query,(obj)=>{
        res.send(obj)
    })
})
//新增
router.post('/add',(req,res)=>{
    studdbase.insert(req.body,(obj)=>{
        res.send(obj);
    })
})

router.get('/load',(req,res)=>{
    studdbase.load((obj)=>{
        res.send(obj)
    })
    console.log("xinxi")
})
//删除
router.post('/del',(req,res)=>{
    studdbase.del(req.body,(obj)=>{
        res.send(obj);
    })
})
//更新
router.post('/gengxin',(req,res)=>{
    studdbase.gengxin(req.body,(obj)=>{
        res.send(obj);
    })
})


module.exports = router