function sort(array) {
    "use strict";
    return array.sort(function(a, b) {
         var first = 0;
         var second = 0;
         if (a[0] === '♠') {
             first+=400;
         } else if(a[0] === '♥') {
             first+= 300;
         } else if(a[0] === '♦') {
             first+= 200;
         } else if(a[0] === '♣'){
             first+= 100;
         };

         if (b[0] === '♠') {
             second+=400;
         } else if(b[0] === '♥') {
             second+= 300;
         } else if(b[0] === '♦') {
             second+= 200;
         } else if(b[0] === '♣'){
             second+= 100;
         };

         if (a[1] === 'A') {
             first+=14;
         } else if(a[1] === 'K') {
             first+= 13;
         } else if(a[1] === 'Q') {
             first+= 12;
         } else if (a[1] === 'J'){
             first+= 11;
         } else if (a[1] !== '1') {
             first += parseInt(a[1]);
         } else if (a[1] === '1') {
             first+= 10;
         };
         if (b[1] === 'A') {
             second+=14;
         } else if(b[1] === 'K') {
             second+= 13;
         } else if(b[1] === 'Q') {
             second+= 12;
         } else if (b[1] === 'J'){
             second+= 11;
         } else if (b[1] !== '1') {
             second += parseInt(b[1]);
         } else if(b[1] === '1'){
             second += 10;
         }
         if (first > second) return -1;
         else return 1;
 });
}
