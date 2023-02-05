// Uso do ON
$(function(){
    $('img').on('error', function(){
        let srcName = $(this).attr('src')
        $(this).attr('src', 'img/error.png')
        alert('Imagem '+srcName+' Inválida')
    })
})

// Uso do RESIZE

$(document).ready(function(){
    $(window).resize(function(){
        $('img').height($(window).height()).width($(window).width())
    })
})

// Uso do SCROLL e Calcular a distancia com SCROLLTOP
$('body').css({height: '5000px'})

$(document).ready(function(){
    $(window).scroll(function(){
        let topo = $(window).scrollTop()
        if (topo > 400) {
            $('img').fadeOut('1000')
        } else {
            $('img').fadeIn('1000')
        }
    })
})


