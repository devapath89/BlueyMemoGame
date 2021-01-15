let cards = document.getElementsByClassName("card");
    if (cards !== 0) {
      let card_array = [];
      for (let i = 0; i < cards.length; i++) {
        card_array.push(i);
      }
      for (let i = 0; i < cards.length; i++) {
        let j = Math.floor(Math.random() * card_array.length);
        let card = cards.item(card_array[j]);
        card.parentNode.appendChild(card);
        card_array.splice(j, 1);
      }
    }

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
      if (lockBoard) return;
      if (this == firstCard) return;
      this.classList.add('flip');
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
      }
      secondCard = this;
      checkForMatch();
    }

    function checkForMatch() {
      let isMatch = firstCard.framework == secondCard.framework;
      isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    }

    function unflipCards() {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
      }, 1500);
    }

    function resetBoard() {
      hasFlippedCard = false;
      loackBoard = false;
      firstCard = null;
      secondCard = null;
    }

    window.addEventListener("load", function() {
      document.querySelector(".card-container").addEventListener("  ", function(e) {
        const tgt = e.target;
        const card = tgt.closest("div");
        if (card.classList.contains("card-front") || card.classList.contains("card-back")) {
          card.closest(".card").classList.toggle("flip");
        }
      });
    });