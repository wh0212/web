$(".login").click(function(){
    window.location.href="./login.html";
})

$("#obtain").click(function(){
    var phone = $("#phone").val();
    var pagg = /^1[3456789]\d{9}$/;
    if (!(pagg.test(phone))) {
        alert("格式不正确");
        return
    }
    $.ajax({
        url:"http://127.0.0.1:8080/user/obtain",
        type:"POST",
        dataType:"json",
        success:function(data){
            console.log(data);
            alert(data.zt+'：'+data.code);
        }
    })
})
$("#yzm").blur(function(){
    $("#pass").attr("disabled",false);
    $("#pass2").attr("disabled",false);
})
$(".register").click(function(){
    var phone = $("#phone").val();
    var yzm = $("#yzm").val();
    var pass = $("#pass").val();
    var pass2 = $("#pass").val();
    var paggpass = /^[a-z | A-Z]\w{5,15}$/;
    if (!yzm) {
        alert("验证码不能为空");
        return
    }
    if (!(paggpass.test(pass))) {
        alert("密码格式不正确");
        return
    }

    if (pass !=pass2) {
        alert("密码不正确");
        return;
    }
    var json = {
        phone:phone,
        yzm:yzm,
        pass:pass
    }
    $.ajax({
        url:"http://127.0.0.1:8080/user/register",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            alert(data.zt)
            console.log(data);
            window.location.href="./login.html";
        }
    })
})