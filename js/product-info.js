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
        <div class="col-lg-3 col-md-4 col-6">
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

function showRelatedProducts(data){

    let contenido = '';

    for (index =0; index <data.length; index++) {
        contenido += `<div class="card" style="width: 18rem;">
        <img src="${data[index].imgSrc}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[index].name}</h5>
          <p class="card-text">${data[index].description}</p>
          <a href="#" class="btn btn-dark">Ver producto</a>
        </div>
      </div>`
    }
    
    let info = `${contenido}`
    

    relatedProducts.innerHTML = info;
         

        }
    


fetch(PRODUCTS_URL)
.then(response => response.json())
.then(datos => showRelatedProducts(datos)) 

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
  
  document.addEventListener("DOMContentLoaded", function(e){
     document.getElementById("stars").innerHTML= `
                                      <div class="star-rating">
                                      <input id="star-5" type="radio" name="rating" value="5" />
                                      <label for= "star-5" title "5 stars">
                                      <i class="active fa fa-star"></i>
                                      </label>
  
                                      <input id="star-4" type="radio" name="rating" value="4" />
                                      <label for= "star-4" title "4 stars">
                                      <i class="active fa fa-star"></i>
                                      </label>
  
                                      <input id="star-3" type="radio" name="rating" value="3" />
                                      <label for= "star-3" title "3 stars">
                                      <i class="active fa fa-star"></i>
                                      </label>
  
                                      <input id="star-2" type="radio" name="rating" value="2" />
                                      <label for= "star-2" title "2 stars">
                                      <i class="active fa fa-star"></i>
                                      </label>
  
                                      <input id="star-1" type="radio" name="rating" value="1" />
                                      <label for= "star-1" title "1 star">
                                      <i class="active fa fa-star"></i>
                                      </label>
  
                                      </div>
                                      `;
                                    })