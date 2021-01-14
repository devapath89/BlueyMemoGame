
const cards = document.querySelectorAll('.memo-Card');//storing all memo-Card in a classlist//

function flipCard() { //     console.log('I was clicked!'); //     console.log(this);

  this.classList.toggle('flip');  //adding and removing Flip as class through classList//

}

cards.forEach(card => card.addEventListener('click', flipCard));


