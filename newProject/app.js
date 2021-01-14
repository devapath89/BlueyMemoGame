
const cards = document.querySelectorAll('.memo-Card');//storing all memo-Card in a classlist//

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() { //     console.log('I was clicked!'); //     console.log(this);

  this.classList.add('flip')  //adding and removing Flip as class through

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  }else{
      //second card //
      hasFlippedCard =false
      secondCard =this; 

      console.log ({firstCard, secondCard})
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));

 
