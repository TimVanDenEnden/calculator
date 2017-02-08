// Version 4.0 made by T1mINC
var Calculator = {};
var operators = [];
var numbers = [];
var input = "";
var SomDisplay = "";
var anwser = null;

// Clear Function (its just clear every variable!)
Calculator.clear = function() {
	operators = [];
	numbers = [];
	input = "";
	SomDisplay = "";
	anwser = null;
	Calculator.display();
}

// Input for numbers (Function)
Calculator.add = function(inputFromCalculator) {
	SomDisplay += inputFromCalculator; 
	input = input += inputFromCalculator;

	// For SomDisplay Update!
	Calculator.display();
}

// Operator (Function)
Calculator.operator = function(action) {
	// The number that was make will now be put in the numbers array!
	numbers.push(input);
	// also will the operatot that is choise put in the operator array!
	operators.push(action);
	// And the input will be cleared so you can make another number if you want.
	input = "";

	// For SomDisplay Update!
	SomDisplay += " " + action + " ";
	Calculator.display();
}

// Calculate (Function)
Calculator.calculate = function() {
	// Puts the input in the numbers array!
	numbers.push(input);
	// If there was any anwser from the som before it will be put back in the numbers array!
	numbers.push(anwser);

	// This set if there was any anwser before on the first place!
	if (anwser != null) {
		var b = numbers[0];
		numbers[0] = numbers[1];
		numbers[1] = b;
	}

	// This checks what it needs to do  * or / 
	while ((operators.includes("*") || operators.includes("/"))) {
		// This happens only when the som contains * or /
		var keer = operators.indexOf("*");
		var delen = operators.indexOf("/");
	
		var position  = -1;

		// This checks what the first postion is * or /
		if (((keer < delen) && keer > -1) || (keer >= 0 && delen == -1)) {
			position = keer;
		} else {
			if (delen > -1){
				position = delen;
			}
		}

		// This excutes * or the / depened on what above is put in the position!
		if (operators[position] == "*") {
			numbers[position] = Number(numbers[position]) * Number(numbers[position + 1]);
		} else {
			numbers[position] = Number(numbers[position]) / Number(numbers[position + 1]);
		}
	
		operators.splice(position, 1);
		numbers.splice(position + 1, 1);
	}
	
	// This checks what it needs to do  + or - 
	while ((operators.includes("+") || operators.includes("-"))) {
		// This happens only when the som contains + or -
		var plus = operators.indexOf("+");
		var min = operators.indexOf("-");
	
		var position  = -1;
		
		// This checks what the first postion is + or -
		if (((plus < min) && plus > -1) || (plus >= 0 && min == -1)) {
			position = plus;
		} else {
			if (min > -1){
				position = min;
			}
		}
	
		// This excutes + or the - depened on what above is put in the position!
		if (operators[position] == "+") {
			numbers[position] = Number(numbers[position]) + Number(numbers[position + 1]);
		} else {
			numbers[position] = Number(numbers[position]) - Number(numbers[position + 1]);
		}
	
		operators.splice(position, 1);
		numbers.splice(position + 1, 1);
	}

	anwser = numbers[0];
	// For SomDisplay Update! And AnwserDisplay!
	SomDisplay = "(" + SomDisplay + ")";
	Calculator.display(); 
}

// Display Function + with check of numbers isn't empty then display 0!
Calculator.display = function() {
	// SomDisplay update!
	document.getElementById("DisplaySom").value = SomDisplay;

	// Anwser Display!
	var Display = document.getElementById("Display");

	// If there is an Anwser!
	if (anwser != null) {
		Display.value = Math.round(anwser * 100) / 100;
		numbers = [];
	// If there isn't any Anwser
	} else {
		Display.value = 0;
	}
}

console.log('Calculator made by T1mINC');