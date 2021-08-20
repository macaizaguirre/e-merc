//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("boton").addEventListener("click", function(){
    let inputcorreo = document.getElementById("inputcorreo");
    let inputpassword =document.getElementById("inputpassword");
    let camposcompletos=true;

    if(inputcorreo.value==='') {
        inputcorreo.classList.add("invalid");
        camposcompletos=false;
    }  else{
        inputcorreo.classList.remove("invalid");
    }

    if(inputpassword.value===''){
        inputpassword.classList.add("invalid");
        camposcompletos=false;
    }  else{
        inputpassword.classList.remove("invalid");
    }
    if(camposcompletos){
       window.location='home.html';
    }
});