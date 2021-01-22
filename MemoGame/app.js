document.addEventListener ('DOMContentLoaded', () => {
    
        const cardArray = [
        {
            name: 'Bluey1'
            img: 'pic\Bluey1.jpg'
        
        }
    
        {
            name: 'Bluey1'
            img: 'pic\Bluey1.jpg'
        
        }
        {
            name: 'Bandit'
            img: 'pic\Bandit.jpg'
        }
        {
            name: 'Bandit'
            img: 'pic\Bandit.jpg'
        }
    
        {
            name: 'Bingo'
            img: 'pic\Bingo.jpg'
        }
        {
            name: 'Bingo'
            img: 'pic\Bingo.jpg'
        }
        {
            name: 'Bingo1'
            img: 'pic\Bingo1.jpg'
        }
        {
            name: 'Bingo1'
            img: 'pic\Bingo1.jpg'
        }
        {
            name: 'bingo_bluey'
            img: 'pic\Bingo_bluey.jpg'
        }
        {
            name: 'Bingo_bluey'
            img: 'pic\Bingo_bluey.jpg'
        }
        {
            name: 'chilly'
            img: 'pic\Chilly.jpg'
        }
        {
            name: 'chilly'
            img: 'pic\Chilly.jpg'
        }
        {
            name: 'Sokk_muffin'
            img: 'pic\Sokk_muffin.jpg'
        }
        {
            name: 'Sokk_muffin'
            img: 'pic\Sokk_muffin.jpg'
        }
        {
            name: 'Bluey'
            img: 'pic\Bluey.jpg'
        }
        {
            name: 'Bandit'
            img: 'pic\Bluey.jpg'
        }
        
        cardArray.sort(()=0.5 -math.random())
        const grid =document.querySelector('.grid')
        var cardChosen= []
        var cardChosenId= []
        var cardsWon =[]
        const resultDisplay = document.querySelector('#result')
    
        //create your board 
        function createBoard ()
        
            for ( let i =0; i <cardArray.length; i++ ) {
                var card = document.createElement('img')
                card.setAttribute('src', 'pic\Blank.jpg')
                card.setAttribute('data-id', i)
            //card.addEventListner('click', flipCard)
            gridappendChild(card)}
            
    //check for matches
        function checkForMatch () {
        var cards =document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]¨
        const optionTwoID = cardChosenId[1]
        if (cardChosen[0] === cardChosen [1])
        alert('you found a match')
        cards [optionOneId].setAttribute('src','pic/Blank.jpg')
        cards  [optionTwoID].setAttribute('src','pic/Blank.jpg')
        cardsWon.push(cardChosen)
        
    }else {cards [optionOneId].setAttribute('src','pic/Blank.jpg')
    cards  [optionTwoID].setAttribute('src','pic/Blank.jpg')
            alert (sorry, no match try again)
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length ===cardArray.length/2){
        resultDisplay.textContent = 'congratulations! you found them all !'
    }
    
    
    //flip your card
    
                function flipCard () {
                  var cardId =this.getAttribute('data-id') 
                  cardChosen.push(cardArray[cardId].name)
                  cardChosenId.push
                  this.setAttribute('src', cardArray[cardId].img)
                  if (cardChosen.length ==2) {
                      setTimeout(checkForMatch, 500)
                  }
                
                }
    
    
    
    
    createBoard ()
    
    
    
    
    
    
    ]}         )

