 
//   recupertion du panier clients 
 let panierClient = JSON.parse( localStorage.getItem("produit"));
 
function affichagePanier(){

// si le panier est vide 
 if (panierClient == null){
     
     document
        .querySelector(".pagePanier")
        .style.display = "none";
//  si le panier est plein 
 } else {
     
     document
     .querySelector(".panierVide")
     .style.display = "none";


    let affichagePanier ='';
    //   boucle pour afficher les information dans le tableau 
    for (let list of panierClient){
        affichagePanier +=` 
        <tr>
            
            <td>${list.nomProduit}</td>
            <td>${list.lentilleChoisi}</td>
            <td>${list.quantite}</td>
            <td class="prix">${list.prix}</td>
           
      </tr>
     
      `;


    };
    document
        .querySelector(".produit")
        .innerHTML = affichagePanier;
 };
  
};


function totalPanierClient() {
let totalPanier = [];

for (let i =0; i < panierClient.length; i++){
    let  PrixClient = panierClient[i].prix;
    totalPanier.push(PrixClient);
    
};

const reducer = (accumlator, currentValue) => accumlator + currentValue;
const prixTotalPanier = totalPanier.reduce(reducer,0);


let affichagePrixTotal =`
                        <p class="fs-4 col-4 ps-3 "><strong> Total </strong></p>
                        <p class="fs-4  text-center  col-4 ps-5 ">${prixTotalPanier}</p>
                        `;



document
    .querySelector(".total")
    .innerHTML = affichagePrixTotal;

};


//   function     vidage du panier et rechagement de la page

function vidagePanier (){


    localStorage.clear();
    document.location.reload();
    console.log("localStorage vidé");
    

};

//   ecoute du bouton vide le panier  et utilasation de la fonction vidage panier

const btnVidePanier = document.querySelector('#btnViderPanier');

btnVidePanier.addEventListener('click' ,function (){

    vidagePanier();
    });

//  validation du formullaire  (valide en amont par des regex dans le html  grace a required pattern)
 

function validiteForm(){
  
    var forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()   ) {
            event.preventDefault()
            event.stopPropagation()
            
          } else{
            envoiCommande()
            event.preventDefault()
            event.stopPropagation()
            console.log("ok");
          }
  
            form.classList.add('was-validated')
    
        
            
        }, 
            false  )
            
      });
      
};




function envoiCommande(){

  //    recuperation des donnes du formulaire
let nom = document.querySelector('#nomForm').value
let prenom = document.querySelector('#prenomForm').value
let email = document.querySelector('#EmailForm').value
let address = document.querySelector('#AddressForm').value
let ville = document.querySelector('#villeForm').value
let codePostal = document.querySelector('#codePostalForm').value


  //   creation 

let donneClient = {

  contact : {
    firstName : nom,
    lastName: prenom,
    address: address ,
    city: ville,
    email: email
  },  
  products: panierClient,
}
console.log(JSON.stringify(donneClient));
//   envois vers l api les donnée du formulaire

const requestOptions = {
  method: 'POST',
  body: JSON.stringify(donneClient),
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
}

 fetch(" http://localhost:3000/api/cameras/order", requestOptions)

    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("commandeInfos", JSON.stringify(data))
    })
    .catch((error) => console.log("erreur de type : ", error))


  };


  affichagePanier();
totalPanierClient();
validiteForm();
