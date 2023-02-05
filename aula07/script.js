$(function(){
    $('.place').each(function(){
        let place = $(this).attr('title')
        let input = $(this)
        input
            .val(place)
            .css('color', '#ccc')
            .focusin(function(){
                input.css('color', '#000')
                if (input.val() == place) {
                    input.val('')
                }
            }).focusout(function(){
                if (input.val() == '') {
                    input.css('color', '#ccc')
                    input.val(place)
                }
            })
    })
    let ex = $('.ex1')
    $('.ev1').focus(function(){
        ex.html($(this).attr('title'))
    }).keyup(function(){
        if ($(this).val() == 'pontocom')
        $('.ev2').focus()
    })
    $('.ev1').blur(function(){
        ex.html('Saida do campo: '+$(this).attr('name'))
    })

    $('.ev1').change(function(){
        ex.html('Campo mudado: '+$(this).val())
    })

    $('.selecionar').click(function(){
        $('.ev3').select()
        $('form').submit(function(){
            return false
        })
    })
})
