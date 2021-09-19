const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


//para las estrellas:
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
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

