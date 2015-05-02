function see(){
	gochi.name; // just a debbugin function
}

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
	gochi.isHungry(bleedTime);
	gochi.isTired(bleedTime);
	gochi.isBday(bleedTime);
	gochi.isDigesting(bleedTime);

	console.log('bleed: ', bleedTime);
}
