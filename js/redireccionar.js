function redireccionar(){
    if(localStorage.getItem("user")=== null){
        window.location.href= "index.html";
    }
}
redireccionar ();