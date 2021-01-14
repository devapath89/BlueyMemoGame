
// scripts.js
const cards = document.querySelectorAll('.memo-Card');//storing all memo-Card in a classlist//

function flipCard() {
  this.classList.toggle('flip'); //     console.log('I was clicked!'); //     console.log(this);


}

cards.forEach(card => card.addEventListener('click', flipCard));


