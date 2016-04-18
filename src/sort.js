function sort(array) {
    "use strict";
    var table = { A: 2, K: 3, Q: 4, J: 5, 10: 6, 9: 7, 8: 8, 7: 9, 6: 10, 5: 11, 4: 12, 3: 13, 2: 14, '♣': 39, '♦': 26, '♥': 13, '♠': 0}, returnArray = [], i;
    var collections = Math.ceil(array.length / 52);

    function robust() {
        for (i = 0; i < array.length; i++) {
            var offset = 0, el = array[i];
            while (returnArray[((table[el[0]] + table[el.substr(1)] - 2) * collections) + offset] != undefined) {
                offset += 1;
                if (offset >= collections - 1) {
                    collections++;
                    returnArray = [];
                    return;
                }

            }
            returnArray[((table[el[0]] + table[el.substr(1)] - 2) * collections) + offset] = el;
        }
    }

    while (returnArray.length === 0) {
        robust();
    }
    return returnArray.join(';').replace(/^;+/, '').replace(/;;+/g, ';').split(';');
}