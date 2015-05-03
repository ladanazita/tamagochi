document.addEventListener("DOMContentLoaded", function(event) {
    verifier();
});

var start =  Date.now();

var Tamagochi = {};
	
Object.defineProperties(Tamagochi, {
	"init": {
		value: init
	},
	"hungry": {
		value: 0,
		writable: true
		},
	"digest": {
		value: 0,
		writable: true
	},
	"clean": {
		value: 0,
		writable: true
	},
	"tired": {
		value: 0,
		writable: true
	},
	"happy": {
		value: 0,
		writable: true
	},
	"health": {
		value: 0,
		writable: true
	},
	"age": {
		value: 0,
		writable: true
	},
	"name": {
		value: 0,
		writable: true
	},
	"type": {
		value: 0,
		writable: true
	},
	"lastMeal": {
		value: 0,
		writable: true
	},
	"lastSleep": {
		value: 0,
		writable: true
	},
	"lastCheckup": {
		value: 0,
		writable: true
	},
	"lastPoop": {
		value: 0,
		writable: true
	},
	"lastShower": {
		value: 0,
		writable: true
	},
	"birthday": {
		value: 0,
		writable: true
	},
	"isHungry": { 
		value: isHungry
	},
	"isDigesting": { 
		value: isDigesting
	},
	"isClean": { 
		value: isClean
	},
	"isTired": { 
		value: isTired
	},
	"isBday": {
		value: isBday
	}


});
var gochi = Object.create(Tamagochi);
gochi.init("tape", "cat");

function init(name, type) {
	console.log('hehe');
	//defineProperty name and type of
	// object gochi or whatever will be there
}
function isHungry(){
	if (bleedTime>6){
		console.log('Im hungry, keeper!!');
		this.hungry = Math.round(this.hungry+10);
		console.log(this.hungry);
		if (this.hungry>100) {
			//alert
		};
	}
	else {
		console.log('Im not hungry, keeper');
	}
}
	
function isDigesting(bleedTime){
	if ((bleedTime-this.lastMeal)>60){
		console.log('poop');
		this.digest = Math.round(this.digest +10);
		if (this.lastMeal>100) {
			//alert
		}
		console.log(this.digest);
	}
	else {
		console.log('im not digest');
	}
}
function isClean(bleedTime) {
	if ((bleedTime-this.lastShower)>60) {
		console.log('Im a trash, keeper!!');
		this.clean = Math.round(this.clean+10);
		console.log(this.clean);
		if (this.clean>100) {
			//alert
		}
	}
	else {
		console.log('Im not trash, keeper');
	}
}
function isTired(bleedTime){
	if (bleedTime>6){
		console.log('Im tired, keeper!!');
		this.tired = Math.round(this.tired+10);
		console.log(this.tired);
	}
	else {
		console.log('Im not tired, keeper');
	}
}

function isBday(bleedTime){
		if (bleedTime>this.birthday){
			console.log('ITS MY BDAY, say congrats to me, keeper!!');
			this.age = Math.round(this.age+1);
			this.birthday = this.birthday+ 1000;
			console.log(this.age);
		}
		else {
			console.log('Im not birthday, keeper');
		}
	}
