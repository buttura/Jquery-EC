$(function(){
    $(window).scroll(function(){
        let ScrollTop = $(this).scrollTop()
        if (ScrollTop > 173) {
            $('menu').addClass('menu-fixo')
        } else {
            $('menu').removeClass('menu-fixo')
        }
    })
})