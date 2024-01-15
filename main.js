let cards = document.querySelectorAll(".cards");
let returnCard1 = "";
let returnCard2 = "";

function clickCards() {
  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", ()=> {
      if(returnCard1 == "") {
        returnCard1 = cards[i].textContent;
        cards[i].style.backgroundColor = "rgb(228, 228, 228)";
        cards[i].style.color = "#1e1e1e";
      } else if(returnCard2 == "") {
        returnCard2 = cards[i].textContent;
        cards[i].style.backgroundColor = "rgb(228, 228, 228)";
        cards[i].style.color = "#1e1e1e";
      } else if(returnCard1 !== returnCard2 ) {
        cards[i].style.backgroundColor = "violet";
        cards[i].style.color = "violet";
      }
    });
  }
}

clickCards();