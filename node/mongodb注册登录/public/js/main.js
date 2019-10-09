$("#register").click(function(){
    var phone = $("#phone").val();
    var name = $("#name").val();
    var age = $("#age").val();
    var aihao = $("#aihao").val();
    var hobby = aihao.split(",")
    var json = {
        phone:phone,
        name:name,
        age:age,
        aihao:hobby
    }
    $.ajax({
        url:"http://127.0.0.1:8080/register",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data);
            alert(data);

        }
    })
})

$("#login").click(function(){
    var json = {"name":'王皓'};
    $.ajax({
        url:"http://127.0.0.1:8080/login",
        type:"GET",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data);
            alert(data);
        }
    })

})
//删除
$("#logout").click(function(){
    var json = {"name":'王皓'};
    $.ajax({
        url:"http://127.0.0.1:8080/logout",
        type:"GET",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data);
            alert(data);
        }
    })
})
//更新
$("#update").click(function(){
    var json = {
        name:'王皓',
        age:18
    };
    $.ajax({
        url:"http://127.0.0.1:8080/update",
        type:"GET",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data);
            alert(data);
        }
    })
})