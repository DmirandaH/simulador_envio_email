document.addEventListener('DOMContentLoaded', function() {
    
    //Seleccionando los elementos de la interfax

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    
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
      error.classList.add ('bg-red-600',  'text-center',  'text-white',  'p-2');

    // Inyectar el error al formulario
     formulario.appendChild(error);

      
    }
        
   
    });