// Make a Tamagotchi constructor. Give it the following properties:
// a hungry property (initially false)
// a sick property (initially false)
// an age of 0

document.addEventListener("DOMContentLoaded", function(event) {
    verifier();
});

var start =  Date.now();
function Tamagotchi(name, type) {
	this.hungry = 0;
	this.digest = 0;
	this.clean = 0; 
	this.tired = 0;
	this.happy = 0;
	this.health = 0;
	this.age = 0;
	this.name = name;
	this.type = type;
	this.lastMeal = 0;
	this.lastCheckup = 0;
	this.lastPoop = 0;

	this.getName = function(){
		return this.name;
	}
	this.setName = function(name) {
		this.name = name;
	}
	this.getType = function(){
		return this.type;
	}
	this.setType = function(type) {
		this.type = type;
	}
	this.getAge = function(){
		return this.age;
	}
	this.setAge = function(age) {
		this.age = age;
	}
	this.getHungry = function(){
		return this.hungry;
	}
	this.setHungry = function(hungry) {
		this.hungry = hungry;
	}
	this.getHealth = function(){
		return this.health;
	}
	this.setHealth = function(health) {
		this.health = health;
	}
	this.getDigest = function(){
		return this.digest;
	}
	this.setDigest = function(digest) {
		this.digest = digest;
	}
	this.getClean = function(){
		return this.clean;
	}
	this.setClean = function(clean) {
		this.clean = clean;
	}
	this.getTired = function(){
		return this.tired;
	}
	this.setTired = function(tired) {
		this.tired = tired;
	}
	this.getHappy = function(){
		return this.happy;
	}
	this.setHappy = function(happy) {
		this.happy = happy;
	}
	this.getLastMeal= function(){
		return this.lastMeal;
	}
	this.setLastMeal = function(lastMeal) {
		this.lastMeal = lastMeal;
	}
	this.getLastCheckup= function(){
		return this.happy;
	}
	this.setLastCheckup = function(lastCheckup) {
		this.lastCheckup = lastCheckup;
	}
	this.getLastPoop = function(){
		return this.lastPoop;
	}
	this.setHappy = function(lastPoop) {
		this.lastPoop = lastPoop;
	}
}

var tamagochi = new Tamagotchi('Pet', 'Cat');

function bleed() {
	var atualTime = Date.now();
	bleedTime = (atualTime-start)/1000; 
	return bleedTime;
}

function verifier() {
	setInterval( function(){ verify();} 
	, 6000);
}

function verify() {
	var bleedTime = bleed();
	isHungry(bleedTime);
	console.log('bleed: ', bleedTime);
}

function isHungry(bleedTime){
	if (bleedTime>6){
		console.log('Im hungry, keeper!!');
		tamagochi.setHungry(tamagochi.getHungry()+10);
		console.log(tamagochi.getHungry());
	}
	else {
		console.log('Im not hungry, keeper');
	}
}

function isTired(bleedTime){
	if (bleedTime>6){
		console.log('Im tired, keeper!!');
		tamagochi.setTired(tamagochi.getTired()+10);
		console.log(tamagochi.getTired());
	}
	else {
		console.log('Im not hungry, keeper');
	}
}

function isBday(bleedTime){
	if (bleedTime>1000){
		console.log('ITS MY BDAY, say congrats to me, keeper!!');
		tamagochi.setAge(tamagochi.getAge()+1);
		console.log(tamagochi.getAge());
	}
	else {
		console.log('Im not hungry, keeper');
	}
}
function isDigesting(lastMeal){
	if (lastMeal>1000){
		console.log('poop');
		tamagochi.setLastMeal(tamagochi.getDigest()+10);
		checkPoop(tamagochi.getDigest());
		console.log(tamagochi.getDigest());
	}
	else {
		console.log('Im not hungry, keeper');
	}
}
function checkPoop(){
	
}

// feed() - if hungry is true, print "That was yummy!" and set hungry to false.
//If hungry is false, print "No thanks, I'm full." and set hungry to true.

// sleep() - prints out "zzzzzzz" (use as many z's as you want)
// medicate() - if sick is true, print "I feel much better!" and set sick to false.
//If sick is false, print "No thanks, I feel fine." and set sick to true.
// increaseAge() - increase the age by one and print "Happy Birthday to me!
//I am " + age + " years old!"
// Make a variable named dog that is set to a new Tamagotchi.

// Add the following methods to it:

// bark() - prints out "ruff ruff
// goOutside() - prints out "I own that tree now!"
// Make a variable named cat that is set to a new Tamagotchi.
//Add the following methods to it:

// meow() - prints out "Meow!"
// useLitterBox() - "Burried treasure!"
// Make a variable named fish that is set to a new Tamagotchi.
//Add the following method to it:

// swim() - prints out "Just keep swimming..."
