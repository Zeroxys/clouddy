import '../css/style.styl'
import '../googlec54e055a9da49684.html'
import '../404.html'
import 'jquery-validation'
import Toastr from 'toastr'
import axios from 'axios'

$(function() {
     
    Toastr.options = {
        'hideDuration'  : 1000,
        'closeDuration' : 1000,
        'showDuration'  :1000,
        'onShown'       :1000,
        'timeOut'       :4000,
        'positionClass' :'toast-bottom-center',
    }

   var validator = $("#form").validate({
       errorClass:'invalid',
        rules: {
            name: {
            required: true
            },
            email: {
                required: true,
                email: true
            },
            context:{
                required: true,
                minlength: 80
            }
        },
        messages:{
            name: 'Su nombre completo',
            email: {
                required: 'Es requerido su correo',
                email: 'No es un correo válido',
            },
            context:{
                required: 'Es necesario que nos describas tu proyecto',
                minlength: 'Mínimo de 80 caracteres' 
            }
        },
        submitHandler: function(form) {
           var form = $(form).serializeArray()
           var obj = [];

           $.each(form, function(i, val){
                obj.push(val.value)
           });
            //objeto que enviamos 
        //   console.log(obj)

        //   axios.post('http://localhost:8181/api/person', obj).then( (response) => {
        //     console.log(response)
        //   }).catch((err) => {
        //     console.log(`err : ${err}`)
        //   })
    
            Toastr.success('Su mensaje ha sido enviado' );
        },
        invalidHandler: function(event, validator){
            var errors  = validator.errorList
            if(errors.length <= 2){
                $.each( errors, function( key, value ) {
                    Toastr.error(value.message);  
                });
            }else if(errors.length == 3){
                Toastr.error('Es necesario que llene el formulario' );  
            }
        },
        showErrors: function(errorMap, errorList) {  
            return true;   
        }
    });


   

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
