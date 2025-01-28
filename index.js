// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const occasion =  "birthday";

function writeCards(names, occasion) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    console.log(cards);
  }
  return cards;
}

writeCards(names, occasion);

function countDown() {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown();