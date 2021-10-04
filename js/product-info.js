//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){   
});

var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-4">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productPriceHTML = document.getElementById("productPrice");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productPriceHTML.innerHTML = `` + product.currency + ` ` + product.cost + ``;
            productCountHTML.innerHTML = product.soldCount;
            productCriteriaHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});



document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCTS_URL).then(function(resultObjeto){
      if (resultObjeto.status === "ok")
      
      productosAutos = resultObjeto.data; 
      productosRelacionados (productosAutos)});

      function productosRelacionados(array){

          let htmlContentToAppend = '';
          
             for (index =0; index <product.relatedProducts.length; index++) {
                 let relatedProducts = array[product.relatedProducts[index]];
               htmlContentToAppend += `<div class="card" style="width: 18rem;">
                  <img src="${relatedProducts.imgSrc}" class="btn btn-info" alt="...">
                  <div class="card-body">
                   <h5 class="btn btn-primary">${relatedProducts.name}</h5>
                    <p class="card-text">${relatedProducts.description}</p>
                  <a href="#" class="btn btn-success">Ver producto</a>
                  </div>
               </div>`
}
              
              
          document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
                         

}
});

// 

function insertar_comentarios(data){

    let filas = '';

    for (let index =0; index <data.length; index++) {
        filas += `
        <p> Por: <strong> ${data[index].user} </strong> <span class="fa fa-star checked">${data[index].score}</span><p> 
        <p>${data[index].description}</p>
        <p2>  el ${data[index].dateTime} </p>`
    }
    
    let contenido = `${filas}`
    

    usersComments.innerHTML = contenido;
}; 


fetch(PRODUCT_INFO_COMMENTS_URL)
.then(response => response.json())
.then(datos => insertar_comentarios(datos)) 

function getRating (){
    var elements= document.getElementsByName("rating");
    for (var i=0;i < elements.length; i++){
      if(elements[i].checked) {
        return parseInt (elements[i].value);
      }
    }
  }
 


    
