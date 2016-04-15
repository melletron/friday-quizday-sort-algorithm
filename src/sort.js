function sort(array) {
    "use strict";

    var suitsOrder = ['♠','♥','♦','♣'];

    var deckObject = array.map(function(el, i) {
        return { index: i, suit: el.substr(0,1), value: el.substr(1,3) };
    });

    var deckObjectSorted = [];
    suitsOrder.forEach(function(suit){
        deckObjectSorted.push(deckObject.filter(checkCard.bind(this, suit)).sort(function(cardA, cardB){
              return +(cardA.value < cardB.value) || +(cardA.value === cardB.value) - 1;
        }));
    });

    var flattenedDeck = deckObjectSorted.reduce(function(a, b) {
      return a.concat(b);
    }, []); 

    return array = flattenedDeck.map(function(el){
      return array[el.index];
    });
}

function checkCard(suit, card) {
    if(card.value === 'J') card.value = 11;
    if(card.value === 'Q') card.value = 12;
    if(card.value === 'K') card.value = 13;
    if(card.value === 'A') card.value = 14;
    card.value = parseFloat(card.value);
    return card.suit.indexOf(suit) !=-1;
}
