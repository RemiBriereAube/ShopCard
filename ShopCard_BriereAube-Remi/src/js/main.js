// Déclaration variable - sélectionner l'élément html contenant .cart-items
const cartItemsHtml = document.querySelector("#ocCart .cart-items");
// Déclaration variable - sélectionner l'élément html contenant .cart-total
const cartTotalHtml = document.querySelector("#ocCart .cart-total > span");
// Déclaration variable - sélectionner tout les éléments html .card
const itemsHtml = document.querySelectorAll(".card");

// Function pour retirer un item du cart
function removeItem(item) {
  // décrémenter le total du panier du prix de l'article
  const itemPrice = parseFloat(
    item.querySelector(".card-price > span").innerHTML
  );
  cartTotal -= itemPrice;
  // mettre à jour le total du panier
  cartTotalHtml.innerHTML = cartTotal;
  // supprimer l'article du panier
  cartItemsHtml.removeChild(item);
}

// Déclaration variable contenant un float 0.00
let cartTotal = 0.0;

// foreach card in items html
itemsHtml.forEach((item) => {
  // selectionner le prix de notre carte.
  const cardPrice = parseFloat(
    item.querySelector(".card-price > span").innerHTML
  );

  // ajouter un écouteur d'événement au bouton d'achat
  item.querySelector(".btn-buy").addEventListener("click", () => {
    // créer un clone de la card
    const itemClone = item.cloneNode(true);
    // ajouter un bouton de suppression au clone
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Retirer du Panier";
    removeButton.classList.add("btn-remove");
    removeButton.addEventListener("click", () => {
      removeItem(itemClone);
    });
    itemClone.appendChild(removeButton);
    //
    itemClone.querySelector(".btn-buy").remove();
    // ajouter l'article au panier et mettre à jour le total
    cartTotal += cardPrice;
    cartTotalHtml.innerHTML = cartTotal;
    cartItemsHtml.appendChild(itemClone);
  });
});

// Récupère les éléments avec class="column"
var elements = document.getElementsByClassName("col-12 col-lg-4 col-md-6 p-3");

// Déclarer une variable de boucle
var i;

// Function pour afficher en liste
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "60%";
  }
}

// Function pour afficher en grid/ mosaique
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "";
  }
}
