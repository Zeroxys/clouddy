import '../css/style.styl'

$(function() {

    var alto = $( window ).height();
    var nvMovil = $('.nav-movil');
    var contHeader = $('container-header');


    //show menu movil
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

    //get event click link
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            var idSection = target[0].id; 

            var that = $(this);

            if (target.length) {

                //movil
                nvMovil.hide()

                $('#menu-toggle-wrapper').removeClass('active').css({
                    'position' : 'relative !important',
                    'top' : '0',
                    'right' : '10px'
                }, callbackSyle());

                //desk
                if(!$(this).hasClass('active-item')){
                    $(this).siblings().removeClass('active-item');
                    $(this).addClass('active-item');
                }

            
                // condicional para evento scroll con respecto a la funcion
                idSection == 'services'? scrollToContent(100):scrollToContent(0)

                function scrollToContent(m){
                    $('html,body').animate({
                        scrollTop: target.offset().top + m
                    }, 1000);  
                }
                    
                return false;
            }
        }
    });
    function callbackSyle(){
        
    }
    

    $(window).scroll(function(){
        var scrollTopWindow = $(this).scrollTop();
        
        if(scrollTopWindow > $('#services').offset().top){
            console.log('mayor')
        }


        if(scrollTopWindow > 40){
          

            $('.cont-logo .logo').addClass('scroll-logo');
            $('.container-header').addClass('scroll-container-header');

            $('.container-header header').addClass('scroll-header').find('a').addClass('scroll-link');
        }else{
            $('.cont-logo .logo').removeClass('scroll-logo');
            $('.container-header').removeClass('scroll-container-header');

            $('.container-header header').removeClass('scroll-header').find('a').removeClass('scroll-link')
        }

    });


});


/*
function(){
    // agregar lo del cambio de menú

    var idSection = target.attr('id') // id del section o contendedor
    var lnk = that // link donde se hace click

    '#'+idSection?lnk.attr('href'):lnk.addClass('active-item').siblings().removeClass('active-item')


    return false;
}


*/


