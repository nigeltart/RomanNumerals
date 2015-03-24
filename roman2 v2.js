function roman(input){
	// input is a string of roman numerals
	var runningTotal = 0;
	//var index = 0;
	var currentChar;
	var nextChar;
	//while index < input.length {
	for(var index=0; index<input.length; index++){	
		//not end of string
		currentChar = input[index];
		if (index < input.length ) {
			nextChar = input[index+1];
		} 
		else {
			nextChar = null;
		}
		runningTotal += checkChar(currentChar, nextChar);
	}
	console.log(runningTotal);
}
	
roman("xii");
	
	
function checkChar(currentChar, nextChar) {
	//currentChar all positive except when i, x, c are negative
	//nextChar only check when currentChar is i, x, c
	if (currentChar == "m") {
		return 1000;
	}
	if (currentChar == "d") {
		return 500;
	}
	if (currentChar == "c") {
		if ( nextChar && ( nextChar == "m" || nextChar == "d" ) ) {
			return -100; 
		}
		else {
			return 100;
		}
	}
	if (currentChar == "l") {
		return 50;
	}
	if (currentChar == "x") {
		if ((nextChar == "c") || (nextChar == "l")) {
			return -10;
		}
		else {
			return 10;
		}
	}
	if (currentChar == "v") {
		return 5;
	}
	if (currentChar == "i") {
		if ((nextChar == "x") || (nextChar == "v")) {
			return -1;
		}
		else {
			return 1;
		}
	}
}
	