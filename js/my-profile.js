
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("mostrarUsuario").innerHTML = `Usuario: `+localStorage.getItem("user");
    
    });
    

  

    function recuperarDatos(){
        if (localStorage.getItem("datosDelPerfil")){

            let datosDelPerfil_json= localStorage.getItem("datosDelPerfil");
            let datosDelPerfil= JSON.parse(datosDelPerfil_json);

            document.getElementById("datos").innerHTML =
            "Nombre: " + datosDelPerfil.nombre + "<br>" +
            "Apellido: " + datosDelPerfil.apellido + "<br>" +
            "Email: " + datosDelPerfil.email + "<br>" +
            "Telefono: " + datosDelPerfil.telefono + "<br>" +
            "Edad: " + datosDelPerfil.edad + "<br>" ;
        }else{
            document.getElementById("datos").innerHTML="No hay datos almacenados";
        }
    }

    $(function () {
        $('[data-toggle="popover"]').popover()
      })
  
    
      function guardarDatos() {
        let datosDelPerfil={
            nombre: document.getElementById("mostrarNombre").value,
            apellido: document.getElementById("mostrarApellido").value,
            email:document.getElementById("mostrarEmail").value,
            telefono:document.getElementById("mostrarTelefono").value,
            edad:document.getElementById("mostrarEdad").value
        };
  
        let datosDelPerfil_json= JSON.stringify(datosDelPerfil);
        localStorage.setItem("datosDelPerfil", datosDelPerfil_json);
       
    }
  