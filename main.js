const cards = document.querySelectorAll(".cards");
let user_return = 0;
let game_return = 0;
let firstCard;
let secondCard;

let tab = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
let result = [];

while(tab.length > 0) {
  let random = Math.floor(Math.random() * tab.length);
  result.push(tab[random]);
  tab = tab.slice(0, random).concat(tab.slice(random + 1));
}

for(let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element.textContent = result[i];
  element.dataset.indexNumber = result[i];
  cards[i].addEventListener("click", ()=> {
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

    if(i = cards.length) {
      alert("Ok")
    }
  });
}