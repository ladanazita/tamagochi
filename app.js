// Make a Tamagotchi constructor. Give it the following properties:
// a hungry property (initially false)
// a sick property (initially false)
// an age of 0
function Tamagotchi('hungry', 'sick', 'age') 
{
	this.hungry= function ()
	{
		if (hungry===true)
		{ 
			console.log ("(╯ °□° ）╯ ︵  ┻━┻");
		}
		else
		{
			console.log("(⑅ ˘͈ ᵕ ˘͈  )");
		}
	}
	this.sick= function ()
	{
		if (sick===true)
		{
			console.log ("( ╹✖╹ )");
		}
		else
		{
			console.log (("(＊◕ᴗ◕＊)"));
		}
	}
}


// Give it the following methods:


// feed() - if hungry is true, print "That was yummy!" and set hungry to false. 
//If hungry is false, print "No thanks, I'm full." and set hungry to true.
feedTamagotchi: function (){
	if (this.hungry=false){
	}
}
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