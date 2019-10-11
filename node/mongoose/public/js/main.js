(function(){
    $.ajax({
        url:"http://127.0.0.1:8080/load",
        type:"GET",
        dataType:"json",
        success:function(data){
            console.log(data);
            dataj = data.data;
            datazi(dataj)
        }
    })
}())
function datazi(dataj){
    $("#table").children().children("tr").eq(0).siblings().remove();
    dataj.forEach(element => {
        var tr = $("<tr></tr>");
        var td = $("<td></td>").text(element.name);
        tr.append(td);
        var td2 = $("<td></td>").text(element.age);
        tr.append(td2);
        var td3 = $("<td></td>").text(element.sex);
        tr.append(td3);
        var td4 = $("<td></td>").text(element.phone);
        tr.append(td4);
        var td5 = $("<td></td>");
        var but = $("<button id='btnDel'>删除</button>").addClass("btnDel");
        td5.append(but)
        tr.append(td5);
        $("#table").append(tr);
    });
}
//单条删除操作
$(document).on('click','td>button',function(){
    var tr = this.parentNode.parentNode;
    var name = tr.firstChild;
    console.log(name.innerHTML);
    var json = {
        name:name.innerHTML,
    }
    $.ajax({
        url:"http://127.0.0.1:8080/del",
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
    //添加
    $("#add").click(function(){
        var name = $("#name").val();
        var nameZy = /^[\u4e00-\u9fa5]{0,}$/;
        var age = $("#age").val();
        var sex = $("#sex").val();
        var phone = $("#phone").val();

        if (!(nameZy.test(name)) || name == "") {
            alert("用户名不正确");
            return;
        }
        var json = {
            name:name,
            age:age,
            sex:sex,
            phone:phone
        }
        $.ajax({
            url:"http://127.0.0.1:8080/add",
            type:"POST",
            dataType:"json",
            data:json,
            success:function(data){
                alert(data.zt);
                var dataadd = data.data;
                addfun(dataadd)
            }
        })
    })
    function addfun(dataadd){
        var tr = $("<tr></tr>");
        var td1 = $("<td></td>").text(dataadd.name);
        var td2 = $("<td></td>").text(dataadd.age);
        var td3 = $("<td></td>").text(dataadd.sex);
        var td4 = $("<td></td>").text(dataadd.phone);
        var td5 = $("<td></td>");
        var but = $("<button>删除</button>").addClass("btnDel");
        td5.append(but)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5)
        $("#table").append(tr);
    }
//条件查询
$("#search").click(function(){
    var name = $("#cxinp").val();
    var json = {
        name:name,
    }
    $.ajax({
        url:"http://127.0.0.1:8080/search",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            alert(data.zt);
            var cxdata = data.data;
            cxfun(cxdata)
        }
    })
})
function cxfun(cxdata){
    console.log(cxdata)
    $("#table").children().children("tr").eq(0).siblings().remove();
    cxdata.forEach(element => {
        var tr = $("<tr></tr>");
        var td1 = $("<td></td>").text(element.name);
        var td2 = $("<td></td>").text(element.age);
        var td3 = $("<td></td>").text(element.sex);
        var td4 = $("<td></td>").text(element.phone);
        var td5 = $("<td></td>");
        var but = $("<button id='btnDel'>删除</button>").addClass("btnDel");
        td5.append(but)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5);
        $("#table").append(tr);
    });
}
//更新
$("#update").click(function(){
        var name = $("#name").val();
        var age = $("#age").val();
        var sex = $("#sex").val();
        var phone = $("#phone").val();
        var json = {
        }
        json.name = name;
        if (age) {
            json.age =age
        }
        if (sex) {
            json.sex =sex
        }
        if (phone) {
            json.phone =phone
        } 
    $.ajax({
        url:"http://127.0.0.1:8080/update",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt);
            var dataj = data.data;
            datazi(dataj)
        }
    })
})
//删除
$("#dell").click(function(){
    var name = $("#name").val();
    var json = {
        name:name,
    };
    $.ajax({
        url:"http://127.0.0.1:8080/delsc",
        type:"POST",
        dataType:"json",
        data:json,
        success:function(data){
            console.log(data)
            alert(data.zt);
            dataj = data.data;
            datazi(dataj);
        }
    })
})