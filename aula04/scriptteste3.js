$(function(){
    $('img').on('error', function(){
        let srcName = $(this).attr('src')
        alert('Imagem '+srcName+' Indisponivel')
        $(this).attr('src', 'error.png')
    })
})

$(function(){
    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height())
    })
})

$(function(){
    $(window).scroll(function(){
        let ScrollTop = $(this).scrollTop()
        if (ScrollTop > 400) {
            $('img').fadeOut('1000')
        } else {
            $('img').fadeIn('1000')
        }
    })
})