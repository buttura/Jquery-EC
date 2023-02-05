let msg = $('ex1')
$(function(){
    $('.ev1').click(function(){
        $(this).css('background', 'gray')
        msg.html('Você clicou!')
    })
})

$(function(){
    $('.ev2').dblclick(function(){
        $(this).css('background','gray')
        msg.html('Você deu dois cliques!')
    })
})

$(function(){
    $('.ev3').focusin(function(){
        $(this).css('background', 'gray')
        msg.html('Você deu foco!')
    }).focusout(function(){
        $(this).css('background', '#000')
        msg.html('VocÊ saiu do foco!')
    })
})

$(function(){
    $('.ev4').hover(function(){
        $(this).css('background', 'gray')
        msg.html('Você passou o mouse!')
    })
})

$(function(){
    $('.ev5').mousedown(function(){
        $(this).css('background', 'gray')
        msg.html('Você deixou pressionado o Click do Mouse!')
    }).mouseup(function(){
        $(this).css('background', '#000')
        msg.html('Você soltou!')
    })
})

let a = 0
$(function(){
    $('.ev6').mousenter(function(){
        $(this).css('background', 'gray')
        a += 1
        msg.html('Entradas do Mouse: '+a)
    }).mouseout(function(){
        $(this).css('background', '#000')
        msg.html('Você saiu!')
    })
})

let b = 0
$(function(){
    $('.ev7').mouseover(function(){
        $(this).css('background', 'gray')
        b += 1
        msg.html('Mouse over: '+b)
    }).mouseleave(function(){
        $(this).css('background', '#000')
        msg.html('Mouse Leave')
    })
})

$(function(){
    $('.ev8').mousemove(function(move){
        let x = move.pageX
        let y = move.pageY

        msg.html('Movimento X: '+x+' - Movimento Y: '+y)
    })
})