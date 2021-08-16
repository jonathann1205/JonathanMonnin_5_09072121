


affichageId();

function affichageId(){

    
    let params = (new URL(document.location)).searchParams;
    let id = params.get('orderId');

    let affichageOrderId = `<p class="mt-3" >Votre numéro de commande est <strong> ${id}</strong> </p>`;

    document.querySelector('.recu')
    
    .innerHTML = affichageOrderId;

};