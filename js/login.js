
document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("mostrarUsuario").innerHTML = `Usuario: `+localStorage.getItem("user");
  });
  
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
  
  let username = document.getElementById("correo").value;
  
  
  localStorage.setItem('user', username);
  location.href='home.html'; 
  }); 
  
  function cerrar(){
    localStorage.clear();
    location.href="index.html";
  }
  
  
  
  
  