$(document).ready(function(){
    $('.place').each(function(){
        let t = $(this).attr('title')
        let input = $(this)
        input.val(t).css('color', '#ccc').focusin(function(){
            input.css('color', '#000')
            if (input.val() == t) {
                input.val('')
            }
        }).focusout(function(){
            if (input.val() == '') {
                input.val(t).css('color', '#ccc')
            }
        })
    })
})