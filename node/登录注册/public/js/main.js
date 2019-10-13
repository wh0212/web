$("#yzm").click(function(){
    var phone = $("#sjh").val();
    var yzmtxt = $("#yzmtxt").val();
    var pagg = /^1[3456789]\d{9}$/;
    if (!phone) {
        alert("不能为空");
        return;
        // $("#getVeritifyCode").attr("data-toggle","#myModal")
        // $("#myModalLabel").text("提示");
        // $(".modal-body").text("手机号不能为空");
    }
    if (!(pagg.test(phone))) {
        alert("错误");
        return
    }
    var json = {
        phone:phone
    };
    $.ajax({
        url:"http://127.0.0.1:8080/add",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            alert(data.data.code)
        }
    })
})
//注册
$("#btnadd").click(function(){
    var user = $("#zh").val();
    var pass = $("#pass").val();
    var phone = $("#sjh").val();
    var pass2 = $("#pass2").val();
    if (pass != pass2) {
        alert("密码不一致");
        return;
    }
    var json = {
        user:user,
        pass:pass,
        phone:phone
    }
    // location.reload()
    $.ajax({
        url:"http://127.0.0.1:8080/btnadd",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt);
            setTimeout(function(){
                alert("即将跳转登录页面")
                window.location.href="./logon.html"
            },1000)
             
        }
    })
})
//登录
$("#enter").click(function(){
    var user = $("#zh").val();
    var pass = $("#pass").val();
    var phone = $("#sjh").val();
    var pass2 = $("#pass2").val();
    if (pass != pass2) {
        alert("密码不一致");
        return;
    };
    var json = {
        user:user,
        pass:pass,
        phone:phone
    }
    $.ajax({
        url:"http://127.0.0.1:8080/enter",
        type:"GET",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt)
        }
    })
})