
document.addEventListener("DOMContentLoaded", function(e){
});
    async function showProductsList(){
        
            let promise = await fetch ("https://japdevdep.github.io/ecommerce-api/product/all.json")
              let data = await promise.json()
          
          
        let htmlProducts = "";
        for(let index = 0; index < data.length; index++){
            
                htmlProducts += `
                <a href="products.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="${data[index].imgSrc}
                            " alt="${data[index].description}
                            " class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${data[index].name}
                                </h4>
                                <small class="text-muted">${data[index].soldCount}
                                artículos</small>
                            </div>
                            <p class="mb-1">${data[index].description}
                            </p>
                            <p> ${data [index].cost} ${data[index].currency}</p>
                        </div>
                    </div>
                </a>
                `
            }


         let informacion=`${htmlProducts}`
         let nuevodiv=document.createElement("div");
         nuevodiv.setAttribute("Id", "productlist");
         document.body.appendChild(nuevodiv);
        document.getElementById("productlist").innerHTML = informacion;
    };
         showProductsList();
