// - We need to put everything inside of a document.ready function
// - We need to create all of the variables we think we are going to need. 
// - We need to create the functions we think we are going to need. 
	// - Function for the start of the game, called reset.
		// - This will do a series of random calculations. 
			// - First, calculate random health numbers for each of the 4 selectable characters.



$(document).ready(function() {


// Variables needed.
// All of the Kenobi Variables
var kenobiHealth = 120;
var kenobiUserAttack = 8;
var kenobiCounterAttack = 20;

// All of the Skywalker Variables
var skywalkerHealth = 100;
var skywalkerUserAttack = 9;
var skywalkerCounterAttack = 5;

// All of the Sidious Variables
var sidiousHealth = 150;
var sidiousUserAttack = 8;
var sidiousCounterAttack = 20;

// All of the Maul Variables
var maulHealth = 180;
var maulUserAttack = 8
var maulCounterAttack = 25;


// This applies the values created above to the value of the button itself.
$("#kenobiButton").val(kenobiHealth);
$("#maulButton").val(maulHealth);
$("#sidiousButton").val(sidiousHealth);
$("#skywalkerButton").val(skywalkerHealth);

// This function resets the game on demand by clicking the reset button.
function reset() {
	var kenobiHealth = 120;
	var kenobiUserAttack = 8;
	var kenobiCounterAttack = 20;

	// All of the Skywalker Variables
	var skywalkerHealth = 100;
	var skywalkerUserAttack = 9;
	var skywalkerCounterAttack = 5;

	// All of the Sidious Variables
	var sidiousHealth = 150;
	var sidiousUserAttack = 8;
	var sidiousCounterAttack = 20;

	// All of the Maul Variables
	var maulHealth = 180;
	var maulUserAttack = 8
	var maulCounterAttack = 25;
};

// This function is what we call an event listener, and runs the function when one of the buttons is clicked. 
$(document).on("click", "button", function()
	{
		
	});








});