//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("mostrarUsuario").innerHTML = `Usuario: `+localStorage.getItem("user");
  });

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        cartdatos = resultObj.data; 
        informacionCarrito = cartdatos.articles; 
        funcionCarro (informacionCarrito)});
        
        function funcionCarro(array){

            let htmlContentToAppend = '';
            
               for (index =0; index <array.length; index++) {
                 let articles = array[index];
                 
               

                 htmlContentToAppend += `
                 <tr>
                 <td><img src= "${articles.src}"width="100"></td>
                 <td>${articles.name}</td>
                 <td><input type="number" id= "input" onchange='subtotal()' value="${articles.count}"  max="" min=1></td>
                 <td class="precio">${articles.unitCost} ${articles.currency}</td>
                 <td id="sub"></td>
                
               
               `
               }

               
            document.getElementById("cart").innerHTML = htmlContentToAppend;
                     
            
                 }
            
                

});


function subtotal (){
  let subtotall=0;
  let precioo = document.getElementsByClassName("precio");
let cantidades = document.getElementsByTagName ('input');
   for (let i=0; i< precioo.length; i++){
  
    subtotall+= parseFloat(precioo[i].innerHTML) * parseFloat(cantidades[i].value);

}

document.getElementById('sub').innerHTML=`UYU <span id="subtotalotro">${(subtotall)}</span>`;
document.getElementById('subtotal').innerHTML=`UYU ${(subtotall)}`;
}


document.addEventListener('DOMContentLoaded',()=>{
    
  getJSONData(CART_INFO_URL).then( resultado=>{
      if (resultado.status=="ok"){
           datosCarrito = resultado.data;
           subtotal();
              
          
      }
  })
  
})



function totalCosto(){
  let costofinal= parseFloat(document.getElementById("subtotalotro").innerHTML);
  let costodelenvio = document.getElementById("envio");
  let preciototalfinal = document.getElementById("total");


  let costoEnvio = (Math.round(costofinal * porcentaje * 100) / 100);
  let totalPrecio = (Math.round(costoEnvio + costofinal));

  costodelenvio.innerHTML = costoEnvio;
  preciototalfinal.innerHTML =  totalPrecio; 
}


document.getElementById("premium").addEventListener("change", function(){
  porcentaje = 0.15;
  totalCosto();
});

document.getElementById("express").addEventListener("change", function(){
  porcentaje = 0.07;
  totalCosto();
});

document.getElementById("standard").addEventListener("change", function(){
  porcentaje = 0.05;
  totalCosto();
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();





function validacion(){
  let articulos = document.getElementsByClassName("articlesCount");
  let cantidadDeArticulos = 0;
  

  let calle = document.getElementById("validarcalle").value;
  let esquina = document.getElementById("validaresquina").value;
  let numero = document.getElementById("validarnumero").value;
  
  let tarjeta = document.getElementById("tarjetainfo").value;
  let codigo = document.getElementById("codigoinfo").value;
  let vencimiento = document.getElementById("vencimiento").value;
  
  let cuenta = document.getElementById("cuentainfo").value;
  
  let costo = document.getElementById("envio").innerHTML;
  
  for (let i=0; i< articulos.length; i++){
    
   cantidadDeArticulos+= parseFloat(articulos[i].value);
  
  }
  if (cantidadDeArticulos != 0  && calle != "" && esquina != "" && numero != ""
  && tarjeta != "" && codigo != "" && vencimiento != "" && costo != "" || 
  cantidadDeArticulos != 0  && calle != "" && esquina != "" && cuenta != ""
  && costo != "" ) {
    alert("Su compra fue realizada con éxito :)");
  }
  else {
    alert("Su compra no se pudo efecturar,complete todos los campos :/");
  }
  
  }
