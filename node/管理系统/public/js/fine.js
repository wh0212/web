//搜索
$("#grabble").click(function(){
    var shuju = $("#way").val();
    var json = {
        name:shuju
    }
    $.ajax({
        url:"http://127.0.0.1:8080/student/grabble",
        data:json,
        type:"GET",
        dataType:"json",
        success:function(data){
            alert(data.zt);
            var dataj = data.code;
            grabblefun(dataj);
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