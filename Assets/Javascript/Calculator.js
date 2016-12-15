// Version 3.0 made by T1mINC \\
var Calculator = {};
var operators = [];
var numbers = [];
var input = "";
var SomDisplay = "";
var anwser = null;

// Clear Function
Calculator.clear = function() {
	operators = [];
	numbers = [];
	input = "";
	SomDisplay = "";
	anwser = null;
	Calculator.display();
}

// Input Function
Calculator.add = function(inputFromCalculator) {
	SomDisplay += inputFromCalculator; 
	input = input += inputFromCalculator;

	// For SomDisplay Update!
	Calculator.display();
}

// Operator Function
Calculator.operator = function(action) {
	numbers.push(input);
	operators.push(action);
	input = "";

	// For SomDisplay Update!
	SomDisplay += " " + action + " ";
	Calculator.display();
}

// Calculate Fuction
Calculator.calculate = function() {
	numbers.push(input);
	numbers.push(anwser);

	if (anwser != null) {
		var b = numbers[0];
		numbers[0] = numbers[1];
		numbers[1] = b;
	}

	while(operators.includes("*")) {
		var pos = operators.indexOf("*");
		numbers[pos] = Number(numbers[pos]) * Number(numbers[pos + 1]);
		operators.splice(pos, 1);
		numbers.splice(pos + 1, 1);
	}

	while(operators.includes("/")) {
		var pos = operators.indexOf("/");
		numbers[pos] = Number(numbers[pos]) / Number(numbers[pos + 1]);
		operators.splice(pos, 1);
		numbers.splice(pos + 1, 1);
	}

	while(operators.includes("+")) {
		var pos = operators.indexOf("+");
		numbers[pos] = Number(numbers[pos]) + Number(numbers[pos + 1]);
		operators.splice(pos, 1);
		numbers.splice(pos + 1, 1);
	}

	while(operators.includes("-")) {
		var pos = operators.indexOf("-");
		numbers[pos] = Number(numbers[pos]) - Number(numbers[pos + 1]);
		operators.splice(pos, 1);
		numbers.splice(pos + 1, 1);
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