// recuperation du paramettre de reqquete dans l'url



let params = (new URL(document.location)).searchParams;
let id = params.get('id');


//  url avec l'ajout de id 
const urlId = `http://localhost:3000/api/cameras/${id}`;

//  recuperation de la liste des produits
 const pageProduits = function () {
    fetch(urlId).then(function (response) {
        response.json()
  
        .then(function(data) {
//   affichage du produit  
         let affichageProduit = `
            <div class="col-12 col-md-6">
                <img src="${data.imageUrl}" class="d-block w-100" alt="..."></div>
            </div>
            <div class="col-12 col-md-6">
                <div>
                    <h1>${data.name}</h1>
                </div>
                <div>
                    <p> Prix ${data.price} </p>
                </div>
                <div>
                    <label for="form-select" class="form-label">Lentille</label>
                    <select class="form-select optionlentille" aria-label="lentilles" >
                        
                    </select>
                </div>
                <div>
                    <label for="form-select" class="form-label mt-2">Quantité</label>
                    <select class="form-select " aria-label="Quantité" id="quantité" >
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
                 <button type="submit" class="btn btn-primary mt-4" id="btnPanier">Ajouter au panier</button>
                </div>
                <div class=" deroulant bg-success rounded  ">
                <p class="ajoutPanier text-center text-white mt-5  ">Le produit a été ajouté au panier. </p>
                </div>
            </div>
            <div class="row col-12 mt-5 justify-content-center border-bottom border-top ">
                <div class=" col-12  mt-4    ">
                        <h2> Description </p>
                        <p> ${data.description} </p>
                </div>
            </div>
            `;
         
 //      insertion de la fiche produit dans le html
     
            document.querySelector(".fiche-produit")
            .innerHTML = affichageProduit;

//      boucle pour les valeur de lentille et insertion dans le html

            let affichageList = '';
            for (let list of data.lenses){
                affichageList += `   
                        <option value="${list}">${list}</option>
               `
            }
               document
                .querySelector(".optionlentille")
                .innerHTML = affichageList;
             ;





//      recuparation et ecoute du bouton 
          const ajout = document.getElementById("btnPanier");
          

          
          ajout.addEventListener('click', (e) =>{
                
                e.preventDefault();
                e.stopPropagation();
                deroulant();

                //     recuperation de la quantité
                let quantiteProduit = document.getElementById("quantité");  
                quantiteChoisi = quantiteProduit.value;
                  
                //     multiplication du prix par rapport a la quantite
                let prixMulti = 0;
                if(quantiteChoisi >1){
                     prixMulti = quantiteChoisi * data.price
                    
                } else {
                    prixMulti = data.price
                    
                }

                //     recuperation de la lentille choisi
                let lentille = document.querySelector(".optionlentille");  
                lentilleChoisi = lentille.value;
                 
                //    creation fiche produit et sauvegarde dans le local storage

                let ficheProduit = {
                    idProduit : data._id,
                    nomProduit : data.name,
                    lentilleChoisi : lentilleChoisi,
                    quantite :quantiteChoisi,
                    prix: prixMulti

                };

                let produitStorage = JSON.parse(localStorage.getItem('produit'));
                
                if (produitStorage ){
                    
                    produitStorage.push(ficheProduit);
                    localStorage.setItem('produit',JSON.stringify(produitStorage)); 
                    
                  
                } else {
                    produitStorage= [] ;
                    produitStorage.push(ficheProduit);
                    localStorage.setItem('produit',JSON.stringify(produitStorage)); 
                    
                };
                
          });
       
        })
        .catch(function(err){
            console.log("erreur: " +err );
          })
    });  
  };

function deroulant(){
  let deroulant = document.querySelector(".deroulant")
  deroulant.style.display = "block";
  
  
}


pageProduits();





