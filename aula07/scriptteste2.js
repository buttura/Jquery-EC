$(function(){
    let ex = $('ex1')
    $('.ev1').focus(function(){
        ex.html($(this).attr('title'))
    }).keyup(function(){
        if ($(this).val() == 'pontocom') {
            $('.ev2').focus()
        }
    })
})

$(function(){
    $('.ev1').blur(function(){
        ex.html('Saida do campo: '+$(this).attr('name'))
    })
})

$(document).ready(function(){
    $('.ev1').change(function(){
        ex.html('Campo mudado: '+$(this).attr('name'))
    })
})

$(document).ready(function(){
    $('.selecionar').click(function(){
        $('.ev1').select()
        $('form').submit(function(){
            return false
        })
    })
})