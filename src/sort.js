function sort(cards) {
    "use strict";
    
    var VALUES = "♠♥♦♣AKQJ198765432";
    cards.sort(function(a, b) { 
        return (VALUES.indexOf(a[0]) * 100 + VALUES.indexOf(a[1])) - (VALUES.indexOf(b[0]) * 100 + VALUES.indexOf(b[1]));
    });

    return cards;
}
