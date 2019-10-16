window.onload = function(){
    var one = new Swiper(".swiper-container",{
        loop:true,
        autoplay:true
    })
    //注册
    $("#register").click(function(){
        window.location.href = "./register.html"
    })
    //登录
    $("#login").click(function(){
        window.location.href = "./login.html"
    })

    $(".active").click(function(){
        window.location.href = "./main.html"
    })
    $("#cj").click(function(){
        window.location.href = "./fine.html"
    })

    $(".nav li").click(function(){
        var index = $(this).index();
        $(".nav li").eq(index).addClass('active').siblings().removeClass('active')
    })
}