'use strict'

var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3] for 3",function(){
		expect(myApp.getPrimes(3)).toEqual([2,3]);
	});

	it("should return [2,3,5] for 6",function(){
		expect(myApp.getPrimes(6)).toEqual([2,3,5]);
	});

	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(7)).toEqual([2,3,5,7])
	});
});




var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2] for 2",function(){
		expect(myApp.getPrimes(2)).toEqual([2]);
	});

	it("should return [2,3,5] for 5",function(){
		expect(myApp.getPrimes(5)).toEqual([2,3,5]);
	});

	it("should return [2,3,5,7,11] for 11",function(){
		expect(myApp.getPrimes(11)).toEqual([2,3,5,7,11])
	});
});





var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7] for 10",function(){
		expect(myApp.getPrimes(10)).toEqual([2,3,5,7]);
	});

	it("should return [2,3,5,7,11] for 12",function(){
		expect(myApp.getPrimes(12)).toEqual([2,3,5,7,11]);
	});

	it("should return [2,3,5,7,11,13] for 15",function(){
		expect(myApp.getPrimes(15)).toEqual([2,3,5,7,11,13])
	});
});






var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13] for 13",function(){
		expect(myApp.getPrimes(13)).toEqual([2,3,5,7,11,13]);
	});

	it("should return [2,3,5,7,11,13] for 16",function(){
		expect(myApp.getPrimes(15)).toEqual([2,3,5,7,11,13]);
	});

	it("should return [2,3,5,7,11,13,17] for 17",function(){
		expect(myApp.getPrimes(17)).toEqual([2,3,5,7,11,13,17])
	});
});


var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13,17] for 18",function(){
		expect(myApp.getPrimes(18)).toEqual([2,3,5,7,11,13,17]);
	});

	it("should return [2,3,5,7,11,13,17,19] for 19",function(){
		expect(myApp.getPrimes(19)).toEqual([2,3,5,7,11,13,17,19]);
	});

	it("should return [2,3,5,7,11,13,17,19] for 20",function(){
		expect(myApp.getPrimes(20)).toEqual([2,3,5,7,11,13,17,19])
	});
});




var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13,17,19] for 21",function(){
		expect(myApp.getPrimes(21)).toEqual([2,3,5,7,11,13,17,19]);
	});

	it("should return [2,3,5,7,11,13,17,19,23] for 23",function(){
		expect(myApp.getPrimes(23)).toEqual([2,3,5,7,11,13,17,19,23]);
	});

	it("should return [2,3,5,7,11,13,17,19,23] for 25",function(){
		expect(myApp.getPrimes(25)).toEqual([2,3,5,7,11,13,17,19,23])
	});
});



var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13,17,19,23,29] for 29",function(){
		expect(myApp.getPrimes(29)).toEqual([2,3,5,7,11,13,17,19,23,29]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29] for 30",function(){
		expect(myApp.getPrimes(30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31] for 31",function(){
		expect(myApp.getPrimes(31)).toEqual([2,3,5,7,11,13,17,19,23,29,31])
	});
})



var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13,17,19,23,29,31] for 33",function(){
		expect(myApp.getPrimes(33)).toEqual([2,3,5,7,11,13,17,19,23,29,31]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31] for 36",function(){
		expect(myApp.getPrimes(36)).toEqual([2,3,5,7,11,13,17,19,23,29,31]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37] for 37",function(){
		expect(myApp.getPrimes(37)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37])
	});
})




var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41] for 42",function(){
		expect(myApp.getPrimes(42)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for 47",function(){
		expect(myApp.getPrimes(47)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43] for 45",function(){
		expect(myApp.getPrimes(45)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43])
	});
})


var myApp = require("../apps/funcgetprimes.js")


describe("Get prime tests",function(){

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53] for 55",function(){
		expect(myApp.getPrimes(55)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59] for 59",function(){
		expect(myApp.getPrimes(59)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]);
	});

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61] for 63",function(){
		expect(myApp.getPrimes(63)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61])
	});
})