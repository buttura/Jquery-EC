$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 173) {
            $('.menu').addClass("menu-fixo")
        } else {
            $('.menu').removeClass("menu-fixo")
        }
    })
})
