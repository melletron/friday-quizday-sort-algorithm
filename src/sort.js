function sort(array) {
    "use strict";
    var table = { A: 14, K: 13, Q: 12, J: 11, "10": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2},
        target = {'♠': [], '♥': [], '♦': [], '♣': []},
        sortFunction = function (a, b) {
            return table[b.substr(1)] - table[a.substr(1)];
        };

    array.map(function (el) {
        target[el.substr(0, 1)].push(el);
    });

    return (target['♠'].sort(sortFunction) + [','] + target['♥'].sort(sortFunction) + [','] + target['♦'].sort(sortFunction) + [','] + target['♣'].sort(sortFunction)).split(',');
}
