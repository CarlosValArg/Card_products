let divData = document.getElementById("divData");

function getData(){
    const promesa=fetch("https://freetestapi.com/api/v1/products",{method:"GET"});
    promesa.then((response)=>{
        response.json().then(
        (data)=>{
            console.log(data);
            createCards(data);
         }) .catch((error)=>console.log("Problema con el json",error));
        }).catch((err)=>console.log("Existió un problema con la solicitud.", err));
    }/**getData */

    function createCards(products) {
        console.log(products.length);
        products.forEach(p =>{
            divData.insertAdjacentHTML("beforeend",
                `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
            )
        })
    }