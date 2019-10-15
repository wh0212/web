(function(){
    $.ajax({
        url:"http://127.0.0.1:8080/student/load",
        type:"GET",
        dataType:"json",
        success:function(data){
            console.log(data);
            dataj = data;
            datazi(dataj);
        }
    })
}())
function datazi(dataj){
dataj.forEach(element => {
    var tr = $("<tr></tr>");
    var td = $("<td></td>").text(element.name);
    tr.append(td);
    var td1 = $("<td></td>").text(element.age);
    tr.append(td1);
    var td2 = $("<td></td>").text(element.sex);
    tr.append(td2);
    var td3 = $("<td></td>").text(element.phone);
    tr.append(td3);
    var td4 = $("<td></td>").text(element.system);
    tr.append(td4);
    var td5 = $("<td></td>").text(element.remark);
    tr.append(td5);
    var td6 = $("<td></td>");
    var btn = $("<button>删除</button>").addClass("btn btn-default dell");
    var btn2 = $("<button>更新</button>").addClass("btn btn-default gengxin");
    td6.append(btn);
    td6.append(btn2);
    tr.append(td6)
    $("#tobody").append(tr)
});
}
//搜索
$("#grabble").click(function(){
    var shuju = $("#way").val();
    var json = {
        phone:shuju
    }
    $.ajax({
        url:"http://127.0.0.1:8080/student/grabble",
        data:json,
        type:"GET",
        dataType:"json",
        success:function(data){
            console.log(data)
            var dataj = data.code;
            grabblefun(dataj)
        }
    })
})
function grabblefun(dataj){
    $("#table").children("tbody").children().remove();
    dataj.forEach(element => {
        var tr = $("<tr></tr>");
        var td = $("<td></td>").text(element.name);
        tr.append(td);
        var td1 = $("<td></td>").text(element.age);
        tr.append(td1);
        var td2 = $("<td></td>").text(element.sex);
        tr.append(td2);
        var td3 = $("<td></td>").text(element.phone);
        tr.append(td3);
        var td4 = $("<td></td>").text(element.system);
        tr.append(td4);
        var td5 = $("<td></td>").text(element.remark);
        tr.append(td5);
        var td6 = $("<td></td>");
        var btn = $("<button>删除</button>").addClass("btn btn-default dell");
        var btn2 = $("<button>更新</button>").addClass("btn btn-default gengxin");
        td6.append(btn);
        td6.append(btn2);
        tr.append(td6)
        $("#tobody").append(tr)
    });
}
//删除
$(document).on('click','.dell',function(){
    var tr = this.parentNode.parentNode;
    var name = tr.firstChild;
    console.log(name.innerHTML);
    var json = {
        name:name.innerHTML,
    }
    $.ajax({
        url:"http://127.0.0.1:8080/student/del",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt);
            tr.remove()
        }
    })
})
//更新
$(document).on('click','.gengxin',function(){
    var name = $("#name").val();
    var age = $("#age").val();
    var sex = $("#sex").val();
    var phone = $("#phone").val();
    var system = $("#system").val();
    var remark = $("#remark").val();
    var json = {
        name:name,
        age:age,
        sex:sex,
        phone:phone,
        system:system,
        remark:remark
    }
    $.ajax({
        url:"http://127.0.0.1:8080/student/gengxin",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt);
            var dataj = data.code;
            grabblefun(dataj)
        }
    })
})

//新增
$("#add").click(function(){
    var name = $("#name").val();
    var age = $("#age").val();
    var sex = $("#sex").val();
    var phone = $("#phone").val();
    var system = $("#system").val();
    var remark = $("#remark").val();
    var json = {
        name:name,
        age:age,
        sex:sex,
        phone:phone,
        system:system,
        remark:remark
    }
    $.ajax({
        url:"http://127.0.0.1:8080/student/add",
        data:json,
        type:"POST",
        dataType:"json",
        success:function(data){
            console.log(data);
            alert(data.zt)
            var shuju = data.code;
            addfun(shuju)
        }
    })
})
function addfun(shuju){
        var tr = $("<tr></tr>");
        var td = $("<td></td>").text(shuju.name);
        tr.append(td);
        var td1 = $("<td></td>").text(shuju.age);
        tr.append(td1);
        var td2 = $("<td></td>").text(shuju.sex);
        tr.append(td2);
        var td3 = $("<td></td>").text(shuju.phone);
        tr.append(td3);
        var td4 = $("<td></td>").text(shuju.system);
        tr.append(td4);
        var td5 = $("<td></td>").text(shuju.remark);
        tr.append(td5);
        var td6 = $("<td></td>");
        var btn = $("<button>删除</button>").addClass("btn btn-default dell");
        var btn2 = $("<button>更新</button>").addClass("btn btn-default gengxin");
        td6.append(btn);
        td6.append(btn2);
        tr.append(td6)
        $("#tobody").append(tr)
}