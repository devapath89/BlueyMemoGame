
let clickedCard =null;




function randomNumber () {
 Math.floor(math.randomNumber() *16)



function onCardClicked(e) {
    const target = e.currentTarget;
   console.log('clicked',e.currentTarget) 
   //target.className = target.className.replace('color-hidden','').trim();//
   clickedCard =target;
    
    // if we havent clicked a card, keep track of the card, display its charater
    if (!clickedCard){
        target.className = target.classId.replace('color-hidden','').trim();
        clickedCard =target;

    //  }else if (clickedCard) {
    //      if 
    }
    //if we have allready clicked a card, check if the new card matches the old card
 clickedCard.classlist = "Bandit";
}
