
$("#btn").click(function(){
    var user = $("#user").val();
    var pass = $("#pass").val();
    var perm = {
        username :user,
        password:pass
    }
    $.ajax({
        url:"http://127.0.0.1:8080/server",
        type:"POST",
        dataType:'json',
        data:perm,
        success:function(data){
            alert("注册成功")
        }
    })
})

$("#btn2").click(function(){
    var user = $("#username").val();
    var pass = $("#password").val();
    var perm = {
        username :user,
        password:pass
    }
    $.ajax({
        url:"http://127.0.0.1:8080/login",
        type:"GET",
        dataType:'json',
        data:perm,
        success:function(data){
            alert("注册成功")
        }
    })
})