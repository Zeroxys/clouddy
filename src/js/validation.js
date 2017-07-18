
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

        Toastr.success('Su mensaje ha sido enviado');
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