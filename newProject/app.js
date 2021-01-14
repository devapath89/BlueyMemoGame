
const cards = document.querySelectorAll('.memo-Card');//storing all memo-Card in a classlist//

let hasFlipCard = false //added varieable hasFliped//
let firstCard, secondCard;





function flipCard() { //     console.log('I was clicked!'); //     console.log(this);

  this.classList.add('flip');  //adding and removing Flip as class through classList//
  if (!hasFlippedCard) {
      //first Card//
    hasFlippedCard = true;
    firstCard = this;
  }
 }
    console.log({hasFlippedCard, firstCard});
 


cards.forEach(card => card.addEventListener('click', flipCard));


