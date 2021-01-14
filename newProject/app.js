

const cards = document.querySelectorAll('.memo-Card');//storing all memo-Card in a classlist//

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() { 
  this.classList.add('flip')  //adding and removing Flip as class through

     
    flipped = document.getElementsByClassName('flipped');
            if(flipped[0].dataset.framework == flipped[1].dataset.framework){
                console.log("java");
            }
      
    //do cards match ?
   if (firstCard.dataset.framework==
    secondCard.dataset.framework && firstCard.dataset.framework != "") { 
        
        //its a match 
        firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
  } else { 
    //   console.log("test");
     //not a match 
    firstCard.classList.remove('flip');
    // console.log (firstCard.classList);
    secondCard.classList.remove('flip');
  }
       
  
}


cards.forEach(card => card.addEventListener('click', flipCard));

 
