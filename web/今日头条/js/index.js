window.onload = function(){
    var wind = document.documentElement.clientWidth;
    var ww = wind/320*16;
    document.documentElement.style.fontSize=ww+'px';

    var navone = new IScroll('.nav',{
        scrollX:true,
        scrollY:false,
    })
    var xinwen = new IScroll('#xinwen',{
        scrollX:false,
        scrollY:true,
    })

$('#input').focus(function(){
    $('#input').prop('placeholder','')
})
$('#input').blur(function(){
    $('#input').prop('placeholder','猪肉价格近期暴涨 | 央视指香港该排毒了...')
})


var xhr = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
}else if (window.ActiveXObject) {
    xhr = new ActiveXObject()
}
xhr.open("GET","http://localhost/test/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1/Source/one.json",true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        // console.log(json)
        for (index = 0; index < json.length; index++) {
            // console.log(index);
            var li = $('<li></li>');
            console.log(json[index].one)
            $(li).html(json[index].one)
            $('.ul').append(li)
        }

    }
}

xhr.send()









}