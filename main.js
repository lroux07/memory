let cards = document.querySelectorAll(".cards")

function clickCards() {
  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", ()=> {
      cards[i].style.backgroundColor = "rgb(228, 228, 228)";
      cards[i].style.color = "#1e1e1e";
    })
  }
}

clickCards();