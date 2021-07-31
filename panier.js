 
//   recupertion du panier clients 
 let panierClient = JSON.parse( localStorage.getItem("produit"));
 

// si le panier est vide 
 if (panierClient == null){
     console.log("vide");
     document
        .querySelector(".pagePanier")
        .style.display = "none";
//  si le panier est plein 
 } else {
     console.log(panierClient);
     
    let affichagePanier ='';
    //   boucle pour afficher les information dans le tableau 
    for (let list of panierClient){
        affichagePanier +=` 
        <tr>
            <th scope="row">1</th>
            <td>${list.nomProduit}</td>
            <td>${list.lentilleChoisi}</td>
            <td>${list.quantite}</td>
            <td>${list.prix}</td>
      </tr>
     
      `;


    };
    document.querySelector(".produit")
        .innerHTML = affichagePanier;
 }
