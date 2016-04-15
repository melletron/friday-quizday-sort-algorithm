	/*
var sort = 
function (array) {
	var cardorder = {"A":0,	"K":1,	"Q":2,	"J":3,	"10":4,	"9":5,	"8":6,	"7":7,	"6":8,	"5":9,	"4":10,	"3":11,	"2":12	};	var suitorder = {"♠":0,"♥":1,"♦":2,"♣":3};    return array.sort(function(a,b){return cardorder[a.slice(1)] - cardorder[b.slice(1)];}).sort(function(a,b){return suitorder[a.slice(0,1)] - suitorder[b.slice(0,1)];});
	
    // return array.sort();
}
	// */
var sort = new Function("array",'var cardorder = {"A":0,	"K":1,	"Q":2,	"J":3,	"10":4,	"9":5,	"8":6,	"7":7,	"6":8,	"5":9,	"4":10,	"3":11,	"2":12	};	var suitorder = {"♠":0,"♥":1,"♦":2,"♣":3};    return array.sort(function(a,b){return cardorder[a.slice(1)] - cardorder[b.slice(1)];}).sort(function(a,b){return suitorder[a.slice(0,1)] - suitorder[b.slice(0,1)];});')