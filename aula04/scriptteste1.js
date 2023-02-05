// Uso do ON
$(function(){
    $('img').on('error',function(){
        let srcImage = $(this).attr('src')
        alert('Imagem '+srcImage+ 'Indisponivel')
        $(this).attr('src', 'img/error.png')
    })
})

// Uso do Resize
$(document).ready(function(){
    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height())
    })
})

// Uso do Scroll e ScrollTop
$('body').css('height', '5000px')
$(document).ready(function(){
    $(document).scroll(function(){
        let t = $(window).scrollTop()
        if (t > 400) {
            $('img').fadeOut('1000')
        } else {
            $('img').fadeIn('1000')
        }
    })

})