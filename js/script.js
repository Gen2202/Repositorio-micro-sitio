$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validacion de nombre
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // validacion de correo
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // validacion de mensaje 
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // envio de mensaje
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Requieres</h3>'+
                                        errores+
                                        '<span id="btnClose">Entendido</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }
//Cerrar la ventana modal 
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
