$(".hqyzm").click(function(){
    var phone = $("#phone").val();
    var pagg = /^1[3456789]\d{9}$/;
    if (!(pagg.test(phone))) {
        alert("格式不正确");
        return;
    }
    $.ajax({
        url:"http://127.0.0.1:8080/user/obtain",
        type:"POST",
        dataType:"json",
        success:function(data){
            console.log(data);
            alert(data.zt+'\n'+data.code);
        }
    })
})
$("#yzm").blur(function(){
    $("#pass").attr("disabled",false);
})
$(".login").click(function(){
    var phone = $("#phone").val();
    var yzm = $("#yzm").val();
    var pass = $("#pass").val();
    if (!yzm) {
        alert("验证码不能为空");
        return;
    }
    if (!pass) {
        alert("密码不能为空");
        return;
    }
    var json = {
        phone:phone,
        yzm:yzm,
        pass:pass
    }
    $.ajax({
        url:"http://127.0.0.1:8080/user/login",
        type:"GET",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt) 
            window.location.href = "./index.html"   
        }
    })
})