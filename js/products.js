//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

const ORDER_ASC_BY_PRECIO = "$asc";
const ORDER_DESC_BY_PRECIO = "$desc";
const ORDER_BY_PROD_RELEV = "Relevancia";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRECIO)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRECIO){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_RELEV){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showCategoriesList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.cost) <= maxCount))){

            htmlContentToAppend += `
            <a href= "product-info.html"
            target="_blank">Más información</a> 
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                
                    <div class="col-3"> 
                 <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                    </div>
                    
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ category.name +`</h4>
                            <small class="text-muted">` + category.soldCount + ` vendidos</small>
                        </div>
                        <p class="mb-1">` + category.description + `</p>
                        <p class="mb-1">` + category.currency + ` ` + category.cost + `</p>
                       
                    </div>
                </div>
            </a>
            `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
        
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowCategories(ORDER_ASC_BY_PRECIO, resultObj.data);
        }
    });

document.getElementById("ascendente").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_PRECIO); 
    });

    document.getElementById("descendente").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_PRECIO);
    });

    document.getElementById("relevancia").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_RELEV);
    });
 
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
});


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