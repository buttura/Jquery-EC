/*

$(function(){
    $('img').error(function(){
        $('img').attr('src', 'img/error.png')
    })
})

*/

/*

$(function(){
    $('img').on('error', function(){
        $(this).attr('src', 'img/error.png')
        let imagem = $(this).attr('src')
        alert('Imagem '+imagem+ ' Inválida')
    })
})

*/

/*

$('img').width($(window).width()).height($(window).height())
$(function(){
    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height())
    })
})

*/

/*

$(function(){
    $(window).scroll(function(){
        $('img').fadeOut('1000')
    })
})

*/

$('#corpo').css("height", "5000px")

$(function(){
    $(window).scroll(function(){
        let topo = $(window).scrollTop()
        if (topo > 100) {
            $('img').fadeOut('1000')
        } else {
            $('img').fadeIn('1000')
        }
    })
})