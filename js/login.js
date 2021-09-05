
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("mostrarUsuario").innerHTML = `Usuario logueado `+localStorage.getItem("user");
    });
    
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
    
    let username = document.getElementById("correo").value;
    
    
    localStorage.setItem('user', JSON.stringify({correo:inputcorreo.value}));
    location.href='home.html'; 
    }); 