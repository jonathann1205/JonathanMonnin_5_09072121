const url ="http://localhost:3000/api/cameras/";


// on recuperer la liste des produits
const getCams = function () {
  fetch(url).then(function (response) {
      response.json()

      .then(function(data) {
        console.log(data);
        let affichageList = ``;
       
        // afficher les produit  dans le html  avec une boucle
        for (let list of data){
         affichageList += `   
        <div class="card col-4">
          <a href="./produit.html?id=${list._id}">
            <div class="card-body">
                <div class="card-img"><img src="${list.imageUrl}" class="d-block w-100" alt="..."></div>
                <h3 class="card-title">${list.name}</h3>
                <p class="card-price">${list.price}</p>
            </div>
          </a>
        </div>`
        }
        document.querySelector(".produit")
        .innerHTML = affichageList;
      })

  });  
};

async  function imgCarousel() {
  let response = await fetch(url);
  console.log(response.json);
  let data = await response.json();
  console.log(data);
  let affichageList = `   
          <div class="carousel-item active img-Carousel">
               <img src="${data[0].imageUrl}" class="d-block w-100" alt="...">
          </div>`;
       
  for (let list of data){
    console.log(list);
     affichageList += `   
        <div class="carousel-item  img-Carousel">
          <img src="${list.imageUrl}" class="d-block w-100" alt="...">
        </div>`
        }
  document.querySelector(".carousel-inner")
  .innerHTML = affichageList;
      

  
};

getCams();
imgCarousel();