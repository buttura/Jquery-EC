$(function(){
        let ex = $('.ex1')
    $('.ev1').click(function(){
        $(this).css({background: '#ccc'})
        ex.html('Você clicou')
    })

    $('.ev2').dblclick(function(){
        $(this).css({background: '#ccc'})
        ex.html('Você deu dois Cliques!')
    })

    $('.ev3').focusin(function(){
        $(this).css({background: '#ccc'})
        ex.html('Você deu foco')
    }).focusout(function(){
        $(this).css('background', '#000')
        ex.html('Você tirou o focus')
    })

    $('.ev4').hover(function(){
        $(this).css('background', '#ccc')
        ex.html('Você passou o mouse!')
    })

    $('.ev5').mousedown(function(){
        $(this).css('background', '#ccc')
        ex.html('Você Apertou o botão do Mouse')
    }).mouseup(function(){
        $(this).css('background', '#000')
        ex.html('Você Soltou o botão do Mouse')
    })
    let a = 0
    $('.ev6').mouseenter(function(){
        a += 1
        $(this).css('background', '#ccc')
        ex.html('Entradas do mouse: '+a)
    }).mouseout(function(){
        ex.html('Saída do Mouse')
        $(this).css('background', '#000')
    })
    let b = 0
    $('.ev7').mouseover(function(){
        b += 1
        ex.html('Mouse Over: '+b)
    }).mouseleave(function(){
        ex.html('Mouse Leave')
    })
    $('.ev8').mousemove(function(move){
        let x = move.pageX
        let y = move.pageY

        ex.html('Movimento X: '+x+' - Movimento Y: '+y)
    })
})