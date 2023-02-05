$(function(){
    let ex = $('.ex1')
    $('.ev1').focus(function(){
        ex.html('Você deu foco no campo: '+$(this).attr('name'))
    }).keyup(function(){
        if ($(this).val() == 'pontocom') {
            $('.ev2').focus()
        }
    })
})

$(function(){
    let ex = $('.ex1')
     $('.ev1').blur(function(){
         ex.html('Você saiu do campo: '+$(this).attr('name'))
     })
})

$(function(){
    let ex = $('.ex1')
    $('.ev1').change(function(){
        ex.html('Campo modificado: '+$(this).val())
    })
})

$()