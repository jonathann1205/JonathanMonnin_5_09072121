// recuperation du paramettre de reqquete dans l'url

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

//  url avec l'ajout de id 
const urlId = `http://localhost:3000/api/cameras/${id}`;

//  recuperation de la liste des produits
 const pageProduits = function () {
    fetch(urlId).then(function (response) {
        response.json()
  
        .then(function(data) {
          console.log(data);

         let affichageProduit = `
            <div class="col-6 bg-dark">
                <img src="${data.imageUrl}" class="d-block w-100" alt="..."></div>
            </div>
            <div class="col-6">
                <div>
                    <h1>${data.name}</h1>
                </div>
                <div>
                    <p>${data.description}</p>
                </div>
                <div>
                    <label for="form-select" class="form-label">lentilles</label>
                    <select class="form-select optionlentille" aria-label="quantité" >
                        
                    </select>
                </div>
                <div>
                    <label for="form-select" class="form-label">quantité</label>
                    <select class="form-select" aria-label="quantité" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>   
                <button type="submit" class="btn btn-primary">Ajouter au panier</button>
            </div> 
            `;
         
            //   boucle pour option de la lentille
     
          document.querySelector(".fiche-produit")
          .innerHTML = affichageProduit;

       
        });
  
    });  
  };


async  function selectionLentilles() {
    let response = await fetch(urlId);
    let data = await response.json();
    console.log(data);
    let affichageList = ` `;
         
    for (let list of data.lenses){
        console.log(typeof(list));
       affichageList += `   
                <option value="${list}">${list}</option>
       `
    }
       console.log(affichageList);
       document
        .querySelector(".optionlentille")
        .innerHTML = affichageList;
        
  
    
  };
  pageProduits();
  selectionLentilles();