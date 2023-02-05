$(function(){
    let ex = $('.ex1')

    $('.ev1').click(function(){
        ex.hide('slow')
    })

    $('.ev2').click(function(){
        ex.show('slow')
    })

    $('.ev3').click(function(){
        ex.toggle('slow')
    })

    $('.ev4').keyup(function(){
        if ($(this).val() == 'hide') {
            ex.hide('slow')
        } else if ($(this).val() == 'show') {
            ex.show('slow')
        } else if ($(this).val() == 'toggle') {
            ex.toggle('slow')
        }
    })
})