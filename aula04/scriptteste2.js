$(document).ready(function(){
    $('img').on('error', function(){
        let srcName = $(this).attr('src')
        alert('Imagem '+srcName+' Indisponivel')
        $(this).attr('src', 'error.png')
    })
})

$(document).ready(function(){
    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height())
    })
})
$('body').css('height','5000px')
$(document).ready(function(){
    $(window).scroll(function(){
        ScrollTop = $(window).scrollTop()
        if (ScrollTop > 200) {
            $('img').fadeOut('1000')
        } else {
            $('img').fadeIn('1000')
        }
    })
})