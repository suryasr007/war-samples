$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('.section');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {          
           $('.uk-navbar').css('background-color', 'black');
        } else {
           $('.uk-navbar').css('background-color', 'transparent');
        }
    });
 });