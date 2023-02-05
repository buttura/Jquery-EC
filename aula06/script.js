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
})

let ex = $('.ex1')
$('.placekey').keyup(function(){
    ex.text($(this).val())
})

