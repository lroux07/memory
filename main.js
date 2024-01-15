const cards = document.querySelectorAll(".cards");
let user_return = 0;
let game_return = 0;
let firstCard;
let secondCard;

for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", ()=> {
    const element = cards[i];
    if(user_return === 0) {
      firstCard = element;
      firstCard.style.backgroundColor = "#ffffff5a";
      firstCard.style.color = "black";
      user_return ++;
    }
    if (user_return === 1) {
      secondCard = element;
      if (firstCard === secondCard) {
        return;
      }
      secondCard.style.backgroundColor = "#ffffff5a";
      secondCard.style.color = "black";
      user_return ++;

      if(firstCard.dataset.indexNumber === secondCard.dataset.indexNumber) {
        user_return = 0;
        game_return += 2;  
      } else {
        setTimeout(()=> {
          user_return = 0;
          secondCard.style.backgroundColor = "violet";
          secondCard.style.color = "violet";
          firstCard.style.backgroundColor = "violet";
          firstCard.style.color = "violet";
        }, 500)
      }
    }
  });
}