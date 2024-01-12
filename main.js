let cards = document.querySelectorAll(".cards")

// Commencer par les faces numéroté


// Click des cartes:
// On fait une boucle sur "cards" et on s'assure que ça marche en console.log
// !Pas de foreach!

function clickCards() {
  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", ()=> {
      console.log("click")
    })
  }
}

clickCards();


// Pas besoin de while pour pas prendre de la mémoire pour rien