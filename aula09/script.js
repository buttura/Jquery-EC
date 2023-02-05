$(function(){
    let ex1 = $('.ex1')
    let ex2 = $('.ex2')
    let button = $(':button')
    /*

    button.click(function(){
        ex1.fadeOut('slow')
    }).dblclick(function(){
        ex1.fadeIn('slow')
    })

    */

   /*

    button.click(function(){
        ex1.fadeTo('slow', 0.5)
    })

    */

    button.click(function(){
        ex1.fadeTo(3000, 0.5, function(){
            ex2.fadeTo('slow', 0.2)
        })
    })

    
})