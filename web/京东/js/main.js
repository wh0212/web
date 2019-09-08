window.onload =function(){


var one = new IScroll('#wai',{
    scrollX:false,
    scrollY:true,
})


var chr = null;
if (window.XMLHttpRequest) {
    chr = new XMLHttpRequest();
}else if(window.ActiveXObject){
    chr = new ActiveXObject();
}
chr.open("GET","http://localhost/test/%E4%BA%AC%E4%B8%9C/Source/main.json",true);
chr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
chr.onreadystatechange = function(){
    if (chr.readyState == 4 &&chr.status == 200) {
        var json = JSON.parse(chr.responseText);
        for (index = 0; index < json.length; index++) {
            // console.log(index)
            //创建li
            var li = $("<li class='li'></li>");
            $(li).addClass('.li');
            //创建img
            var img = $("<img class='img' src=''/>");
            img.addClass('.img')
            img.prop('src',json[index].img);
            $(li).append(img)
            //
            var div = $("<div class='left'></div>")
            div.addClass('.left');
            $(li).append(div)

            var pone = $('<p></p>');
            pone.text(json[index].name);
            var ponespan = $('<span></span>')
            var poneimg = $("<img style='float:left;margin-top:5px' class='shouji' src=''/>");
            poneimg.addClass('.shouji');
            poneimg.prop('src',json[index].jingpin);
            $(ponespan).append(poneimg);
            $(pone).append(ponespan);
            

            $(div).append(pone);
            
            //
            var ptwo = $('<p></p>');
            var ptwospan = $("<span class='twospan'></span>");
            ptwospan.addClass('.twospan');
            ptwospan.text(json[index].one);

            var ptwospan2 = $("<span class='twospan'></span>");
            ptwospan2.addClass('.twospan');
            ptwospan2.text(json[index].two);

            var ptwospan3 = $("<span class='twospan'></span>");
            ptwospan3.addClass('.twospan');
            ptwospan3.text(json[index].san);
            $(ptwo).append(ptwospan)
            $(ptwo).append(ptwospan2)
            $(ptwo).append(ptwospan3)
            $(div).append(ptwo);


            
            var sanp = $('<p></p>');
            var sanspan = $("<span style='margin-right:15px' class='sanspan'></span>")
            sanspan.addClass('.sanspan');
            sanspan.text(json[index].si);
            var sanspan2 = $("<span class='sanspan'></span>")
            sanspan2.addClass('.sanspan');
            sanspan2.text(json[index].wu)
            var sanspan3 = $("<span class='sanspan'></span>")
            sanspan3.addClass('.sanspan');
            sanspan3.text(json[index].liu);
            $(sanp).append(sanspan)
            $(sanp).append(sanspan2)
            $(sanp).append(sanspan3)
            $(div).append(sanp);

            var psi = $("<p></p>");
            var sispan = $("<span class='jiage'></span>")
            sispan.addClass('.jiage')
            sispan.text(json[index].jige);
            var sispan2 = $("<span class='zeng'></span>")
            sispan2.addClass('.zeng')
            sispan2.text(json[index].zeng);
            
            $(psi).append(sispan);
            $(psi).append(sispan2);

            $(div).append(psi)




            $('#ul').append(li)
        }
    }
}

chr.send()








}