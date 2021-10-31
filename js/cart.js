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
                 <td><input type="number" onchange='multiplicacionSub()' value="${articles.count}" max="" min=1></td>
                 <td class="precio">${articles.unitCost} ${articles.currency}</td>
                 <td id="sub"></td>

                
               
               `
               }

               
            document.getElementById("cart").innerHTML = htmlContentToAppend;
                     
            
                 }
            
                

});

function multiplicacionSub (){
  let precios = document.getElementsByClassName("precio");
  let cantidades = document.getElementsByTagName ('input');
  let multiplicacionSub=0;

   for (let i=0; i< precios.length; i++){
  
    multiplicacionSub+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);

    document.getElementById("sub").innerHTML = parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
}

document.getElementById('sub').innerHTML=`${(multiplicacionSub)} UYU `;
}



document.addEventListener('DOMContentLoaded',()=>{
    
  getJSONData(CART_INFO_URL).then( resultado=>{
      if (resultado.status=="ok"){
           cartdatos = resultado.data;
           multiplicacionSub();
              
          
      }
  })
  
})

