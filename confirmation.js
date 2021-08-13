


affichageId();

function affichageId(){

    let orderId = JSON.parse( localStorage.getItem("commandeInfos"));
    

    let affichageOrderId = `<p class="mt-3" >Votre numéro de commande est <strong> ${orderId}</strong> </p>`;

    document.querySelector('.recu')
    
    .innerHTML = affichageOrderId;

};