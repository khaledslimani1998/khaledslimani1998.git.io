
/* Smooth scroll*/


$(function(){
    'use strict';
    $('.title').click(function(){
        $('html, body').animate({
            scrollTop:$("#" + $(this).data('scroll')).offset().top
        },1000);
    });
});