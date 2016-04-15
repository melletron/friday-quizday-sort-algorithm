function sort(cards) {
    "use strict";
    
    var VALUES = {'♠': 400, '♥': 300, '♦': 200, '♣': 100, 'A': 16, 'K': 15, 'Q': 14, 'J': 13, '10': 10, '9': 9, '8': 8, '7':7, '6': 6, '5':5, '4': 4, '3': 3, '2': 2};
    
    var valueCard = function(card) {
        var value = 0;
        for (var i in VALUES) {
            if (card.indexOf(i) > -1) value += VALUES[i];
        }            
        return value;
    }
    
    cards.sort(function(a, b) { 
        return valueCard(b) - valueCard(a);        
    });
    
    return cards;
}
