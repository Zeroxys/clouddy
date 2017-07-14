import '../css/style.styl'

$(function() {


    var alto = $( window ).height();
    var nvMovil = $('.nav-movil');
    var contHeader = $('container-header');


    //show menu movil
    $('#menu-toggle-wrapper').click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('body').css('overflow','hidden')
            $('#head-logo').css('color','white')
            nvMovil.css({
                'height': alto,
                'display': 'block'
            })
        }else{
            $('body').css('overflow','auto')
            $('#head-logo').css('color','#2c6ef0')
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
                $('body').css('overflow','auto')

                $('#menu-toggle-wrapper').removeClass('active');

                //desk
                if(!$(this).hasClass('active-item')){
                    $(this).siblings().removeClass('active-item');
                    $(this).addClass('active-item');
                }

            
                // condicional para evento scroll con respecto a la funcion
                idSection == 'services'? scrollToContent(100):scrollToContent(0)

                function scrollToContent(m){
                    m==0?$('#head-logo').css('color','#2c6ef0'): $('#head-logo').css('color','white')

                    $('html,body').animate({
                        scrollTop: target.offset().top + m
                    }, 1000);  
                }
                    
                return false;
            }
        }
    });

    var home = $('#home');
    var services = $('#services');
    var portfolio = $('#portfolio');
    var contact = $('#contact');

    var navA = $('.nav-menu').find('a')
    var scrollTopWindow

    $(window).scroll(function(){
        scrollTopWindow = $(this).scrollTop();
        
        if(scrollTopWindow < services.offset().top){
            navA.removeClass('active-item');
            $("[href='#home']").addClass("active-item");  
        }

        if(scrollTopWindow > services.offset().top && scrollTopWindow < portfolio.offset().top-100){
            navA.removeClass('active-item');
            $("[href='#services']").addClass("active-item");  
        }

        if(scrollTopWindow > portfolio.offset().top-10 && scrollTopWindow < contact.offset().top){
            navA.removeClass('active-item');
            $("[href='#portfolio']").addClass("active-item");  
        }
        if(scrollTopWindow > contact.offset().top-10){
            navA.removeClass('active-item');
            $("[href='#contact']").addClass("active-item");  
        }


        if(scrollTopWindow > 40){

            $('.cont-logo .logo').addClass('scroll-logo');
            $('.container-header').addClass('scroll-container-header');

            $('.container-header header').addClass('scroll-header').find('a').addClass('scroll-link');
        }else{
            $('#head-logo').css('color','#2c6ef0')
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


