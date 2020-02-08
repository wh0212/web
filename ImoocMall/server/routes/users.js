var express = require('express');
var router = express.Router();
var User = require("../models/user");

require('../util/util')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", function (req, res, next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  if (!param.userName) {
    res.json({
      status: "1",
      msg: "用户名不能为空"
    })
    return
  }
  if (!param.userPwd) {
    res.json({
      status: "1",
      msg: "密码不能为空"
    })
    return
  }
  User.find(param, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      })
    } else {
      if (doc == '') {
        console.log(11111,doc);
        param.userId = req.body.userId
        var userReg = new User(param)
        userReg.save().then(() => {
          res.json({
            status: '0',
            msg: '注册成功',
            result: ''
          })
        })
      } else {
        console.log(22222,doc);
        
        res.json({
          status: "1",
          msg: "用户名已被注册"
        })
      }
    }
  })
})

// 登录接口
router.post("/login", function (req, res, next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      })
    } else {
      if (doc) {
        res.cookie("userId", doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        // req.session.user = doc
        res.json({
          status: "0",
          msg: "",
          result: {
            userName: doc.userName
          }
        })
      } else {
        res.json({
          status: "1",
          msg: "账号密码错误",
          result: ''
        })
      }
    }
  })
})

//登出接口
router.post("/logout", function (req, res, next) {
  res.cookie("userId", "", {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '',
    rersult: ''
  })
})
//是否登录
router.get("/checkLogin", function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName
    })
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    })
  }
})

router.get("/getCartCount", function (req, res, next) {
  if (req.cookies && req.cookies.userId) {
    var userId = req.cookies.userId;
    User.findOne({ userId: userId }, function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
          result: ''
        })
      } else {
        var cartList = doc.cartList;
        let cartCount = 0;
        cartList.map((item) => {
          cartCount += parseInt(item.productNum);
        })
        res.json({
          status: "0",
          msg: '',
          result: cartCount
        })
      }
    })
  }
})

//查询用户的购物车数据
router.get("/cartList", function (req, res, next) {
  var userId = req.cookies.userId;
  User.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (doc) {
        res.json({
          status: "0",
          msg: '',
          result: doc.cartList
        })
      }
    }
  })
})

//购物车删除
router.post("/cartDel", function (req, res, next) {
  var userId = req.cookies.userId;
  var productId = req.body.productId;
  User.update({ userId: userId }, {
    $pull: {
      'cartList': {
        'productId': productId
      }
    }
  }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: 'suc'
      })
    }
  })
})

//购物车数量修改
router.post("/cartEdit", function (req, res, next) {
  var userId = req.cookies.userId;
  var productId = req.body.productId;
  var productNum = req.body.productNum;
  var checked = req.body.checked;
  User.update({ "userId": userId, "cartList.productId": productId }, {
    "cartList.$.productNum": productNum,
    "cartList.$.checked": checked
  }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: 'suc'
      })
    }
  })
})

//是否选中状态
router.post("/editCheckAll", function (req, res, next) {
  var userId = req.cookies.userId;
  var checkAll = req.body.checkAll ? "1" : "0";
  User.findOne({ userId: userId }, function (err, user) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (user) {
        user.cartList.map((item) => {
          item.checked = checkAll
        })
        user.save(function (err1, doc) {
          if (err1) {
            res.json({
              status: '1',
              msg: err1.message,
              result: ''
            })
          } else {
            res.json({
              status: '0',
              msg: '',
              result: 'suc'
            })
          }
        })
      }
    }
  })
})

//查询用户地址接口
router.get("/addressList", function (req, res, next) {
  var userId = req.cookies.userId;
  User.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '',
        result: doc.addressList
      })
    }
  })
})

//设置默认地址接口
router.post("/setDefault", function (req, res, next) {
  var userId = req.cookies.userId;
  var addressId = req.body.addressId;
  if (!addressId) {
    res.json({
      status: "1003",
      msg: 'addressId is null',
      result: ''
    })
  }
  User.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      })
    } else {
      var addressList = doc.addressList;
      addressList.map((item) => {
        if (item.addressId == addressId) {
          item.isDefault = true
        } else {
          item.isDefault = false
        }
      })
      doc.save(function (err1, doc1) {
        if (err1) {
          res.json({
            status: "1",
            msg: err.message,
            result: ''
          })
        } else {
          res.json({
            status: "0",
            msg: '',
            result: ''
          })
        }
      })
    }
  })
})

//删除地址
router.post("/delAddress", function (req, res, next) {
  var userId = req.cookies.userId;
  var addressId = req.body.addressId;
  User.update({
    userId: userId
  }, {
    $pull: {
      'addressList': {
        'addressId': addressId
      }
    }
  }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '',
        result: ''
      })
    }
  })
})

//
router.post("/payMent", function (req, res, next) {
  var userId = req.cookies.userId;
  var orderTotal = req.body.orderTotal;
  var addressId = req.body.addressId
  User.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      })
    } else {
      var address = '';
      var goodsList = []
      //获取当前用户的地址信息
      doc.addressList.map((item) => {
        if (addressId == item.addressId) {
          address = item
        }
      })
      //获取用户购物车的用户商品
      doc.cartList.filter((item) => {
        if (item.checked == '1') {
          goodsList.push(item)
        }
      })
      var platform = '622'
      var r1 = Math.floor(Math.random() * 10);
      var r2 = Math.floor(Math.random() * 10);
      var sysDate = new Date().Format('yyyyMMddhhmmss');
      var createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');

      var orderId = platform + r1 + sysDate + r2

      var order = {
        orderId: orderId,
        orderTotal: orderTotal,
        addressInfo: address,
        goodsList: goodsList,
        orderStatus: '1',
        createDate: createDate
      };

      doc.orderList.push(order);
      doc.save(function (err1, doc2) {
        if (err1) {
          res.json({
            status: "1",
            msg: err.message,
            result: ''
          })
        } else {
          res.json({
            status: "0",
            msg: '',
            result: {
              orderId: order.orderId,
              orderTotal: order.orderTotal
            }
          })
        }
      })

    }
  })
})

//根据订单id查询订单信息
router.get("/orderDetail", function (req, res, next) {
  var userId = req.cookies.userId;
  var orderId = req.param("orderId");
  User.findOne({ userId: userId }, function (err, userInfo) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      })
    } else {
      var orderList = userInfo.orderList;
      if (orderList.length > 0) {
        var orderTotal = 0;
        orderList.map((item) => {
          if (item.orderId == orderId) {
            orderTotal = item.orderTotal
          }
        })
        if (orderTotal > 0) {
          res.json({
            status: "0",
            msg: '',
            result: {
              orderId: orderId,
              orderTotal: orderTotal
            }
          })
        } else {
          res.json({
            status: "12002",
            msg: "无此订单",
            result: ''
          })
        }

      } else {
        res.json({
          status: "12001",
          msg: "当前用户未创建订单",
          result: ''
        })
      }
    }
  })
})


module.exports = router;
