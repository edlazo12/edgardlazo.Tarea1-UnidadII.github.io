document.addEventListener("DOMContentLoaded", function () {
    const acapite1 = document.getElementById("acapite1");
    const acapite2 = document.getElementById("acapite2");
    const acapite3 = document.getElementById("acapite3");
    const acapite4 = document.getElementById("acapite4");
    const mostrarMensajeBtn = document.getElementById("mostrarMensaje");
    const mensaje = document.getElementById("mensaje");
    const formulario = document.getElementById("formulario");
    const Guardar = document.getElementById("Guardar");

  


    acapite1.addEventListener("click", function () {
        
        mensaje.style.display = "none";
        formulario.style.display = "none";
        mostrarMensajeBtn.style.display = "none";
        acapite2.style.display = "block"
        
    });
    acapite2.addEventListener("click", function () {
        mensaje.style.display = "none";
        formulario.style.display = "none";
        mostrarMensajeBtn.style.display = "block";
        
    });

    acapite3.addEventListener("click", function () {
        mensaje.style.display = "none";
        mostrarMensajeBtn.style.display = "none";
        formulario.style.display = "none";
    });
   
    acapite4.addEventListener("click", function () {
        mensaje.style.display = "none";
        mostrarMensajeBtn.style.display = "none";
        formulario.style.display = "block";
    });

    mostrarMensajeBtn.addEventListener("click", function () {
        mensaje.style.display = "block";
    });

    mensaje.addEventListener("click", function () {
        mensaje.style.display = "none";
    });
    Guardar.addEventListener("click", function (event) {
        event.preventDefault();

    });
    
});
