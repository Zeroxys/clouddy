import '../css/style.styl'

var alto = $( window ).height();
var nvMovil = $('.nav-movil');

$('#menu-toggle-wrapper').click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
        $(this).css({
            'position': 'fixed',
            'top':'60px',
            'right': '30px',
        })
        nvMovil.css({
            'height': alto,
            'display': 'block'
        })
    }else{
        $('.nav-movil').css('display', 'none')
    }
});

$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');


            if (target.length) {
                nvMovil.hide()

                $('#menu-toggle-wrapper').removeClass('active').css({
                    'position' : 'relative !important',
                    'top' : '0',
                    'right' : '10px'
                }, callbackSyle());

                if(target[0].id == 'services'){

                  $('html,body').animate({
                        scrollTop: target.offset().top + 160
                    }, 1000, function(){
                        return false;
                    });  
                }else{
                     $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function(){
                        return false;
                    }); 
                }
                return false;
            }
        }
    });
    function callbackSyle(){
        
    }
});


