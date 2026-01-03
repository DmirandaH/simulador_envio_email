document.addEventListener('DOMContentLoaded', function() {
    
    //Seleccionando los elementos de la interfax

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    // Asignar eventos
    // el evento blur se ejecuta al abandonar un campo a otro del formulario.

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);


    function validar (evento) {
        if (evento.target.value.trim() === '') {
          mostrarAlerta();

        } else {
            console.log('si hay algo');
        }

    

    }

    function mostrarAlerta() {
      const error = document.createElement('p');
      error.textContent = "Hubo un error.....";

      console.log(error);
    }
        
    });