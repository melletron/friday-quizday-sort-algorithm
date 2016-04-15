function sort(array) {
    "use strict";

    var symbols = {
      "♠": 400,
      "♥": 300,
      "♦": 200,
      "♣": 100
    }, numbers = {
      "A": 14,
      "K": 13,
      "Q": 12,
      "J": 11,
      "1": 10,
      "9": 9,
      "8": 8,
      "7": 7,
      "6": 6,
      "5": 5,
      "4": 4,
      "3": 3,
      "2": 2
    };

    return array.sort(function(a, b) {
      return (symbols[b[0]] + numbers[b[1]]) - (symbols[a[0]] + numbers[a[1]]);
    });
}
