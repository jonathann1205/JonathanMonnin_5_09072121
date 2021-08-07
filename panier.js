 
//   recupertion du panier clients 
 let panierClient = JSON.parse( localStorage.getItem("produit"));
 console.log(panierClient);

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

function totalPanierClient() {
let totalPanier = [];

for (let i =0; i < panierClient.length; i++){
    let  PrixClient = panierClient[i].prix;
    totalPanier.push(PrixClient);
    
};

const reducer = (accumlator, currentValue) => accumlator + currentValue;
const prixTotalPanier = totalPanier.reduce(reducer,0);
console.log(prixTotalPanier);

let affichagePrixTotal =`
                        <p class="fs-4 col-4 ps-3 "><strong> Total </strong></p>
                        <p class="fs-4  text-center  col-4 ps-5 ">${prixTotalPanier}</p>
                        `;



document
    .querySelector(".total")
    .innerHTML = affichagePrixTotal;

};

// function validiteForm(){

//     //          test  nom   
//     let formNom = document.querySelector("#nomForm").value;
//     let regexNom = /^[A-Z]{1}[A-Za-zÀ-ÿ\ -]+$/;
//     console.log(formNom);
//     if (!regexNom.test(formNom)){
//         console.log("pas ok");

//         let classNom = document.querySelector("#nomForm");
            
//         classNom.classList.add("border-danger");
       
//     } else {
//         console.log(" ok");
        
//     }
    


// };
let formNom = document.querySelector("#nomForm").value
let regexNom = /^[A-Z]{1}[A-Za-zÀ-ÿ\ -]+$/
console.log(formNom);
if (!regexNom.test(formNom)){
    console.log("pas ok")

    let classNom = document.querySelector("#nomForm")
        
    classNom.classList.add("border-danger")
   
} else {
    console.log(" ok")
    
};




totalPanierClient();
// validiteForm();