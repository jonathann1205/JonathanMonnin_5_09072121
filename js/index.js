const url ="http://localhost:3000/api/cameras/";


// on recuperer la liste des produits
const getCams = function () {
  fetch(url).then(function (response) {
      response.json()

      .then(function(data) {
       
        let affichageList = ``;
       
        // afficher les produit  dans le html  avec une boucle
        for (let list of data){
         affichageList += `
        <div class=" mt-1 ">   
          <div class=" card border-end ">
            <a href="./produit.html?id=${list._id}" class=" text-dark text-decoration-none">
              <div class="card-body">
                  <div class=" blockImg ">
                      <img src="${list.imageUrl}" class="img-fluid shadow-1-strong rounded-1"  alt="image de l'appareil photo ${list.name} ">  
                  </div>
                  <div class = " card-back d-flex justify-content-between ">
                  <h2 class="card-title">${list.name}</h2>
                  <p class="card-price ">${list.price}</p>
                  </div>
              </div>
            </a>
          </div>
        </div>`
        }
        document.querySelector(".produit")
        .innerHTML = affichageList;
      })
      .catch(function(err){
        console.log("erreur: " +err );
     
      })
  });  
};

async  function imgCarousel() {
  let response = await fetch(url);
  
  let data = await response.json();
  
  let affichageList = `   
          <div class="carousel-item active img-Carousel">
               <img src="${data[2].imageUrl}" class="d-block w-100 " alt="...">
          </div>`;
  try{
      for (let list of data){
        
        affichageList += `   
            <div class="carousel-item  img-Carousel">
          <img src="${list.imageUrl}" class="d-block w-100  " alt="...">
            </div>`
            }
      document.querySelector(".carousel-inner")
      .innerHTML = affichageList;
  }      
  catch(err){
   
    console.log("erreur: " +err );
       
  };
      

  
};


getCams();
imgCarousel();


