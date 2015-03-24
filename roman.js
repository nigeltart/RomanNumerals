function roman (input, from){
	// input is a string
	// from is the index to look from; it's zero by default
	var runningTotal = 0;
	
	//this section checks for tens
	if (input.indexOf ("xc", from)==from) {
		// indexOf is the starting position of "xc" (if present)
		runningTotal += 90;
		from += 2;
		// we've used up two characters, so the units section below will look from character 2
	}
	else if (input.indexOf ("lxxx", from)==from) {
		runningTotal += 80;
		from += 4;
	}
	else if (input.indexOf ("lxx", from)==from) {
		runningTotal += 70;
		from += 3;
	}
	else if (input.indexOf ("lx", from)==from) {
		runningTotal += 60;
		from += 2;
	}
	else if (input.indexOf ("l", from)==from) {
		runningTotal += 50;
		from += 1;
	}
	else if (input.indexOf ("xl", from)==from) {
		runningTotal += 40;
		from += 2;
	}
	else if (input.indexOf ("xxx", from)==from) {
		runningTotal += 30;
		from += 3;
	}
	else if (input.indexOf ("xx", from)==from) {
		runningTotal += 20;
		from += 2;
	}
	else if (input.indexOf ("x", from)==from) {
		runningTotal += 10;
		from += 1;
	}
	
	
	//this section checks for units
	if (input.indexOf ("ix", from)==from) {
		runningTotal += 9;
		from += 2;
	}
	else if (input.indexOf ("viii", from)==from) {
		runningTotal += 8;
		from += 4;
	}
	else if (input.indexOf ("vii", from)==from) {
		runningTotal += 7;
		from += 3;
	}
	else if (input.indexOf ("vi", from)==from) {
		runningTotal += 6;
		from += 2;
	}
	else if (input.indexOf ("v", from)==from) {
		runningTotal += 5;
		from += 1;
	}
	else if (input.indexOf ("iv", from)==from) {
		runningTotal += 4;
		from += 2;
	}
	else if (input.indexOf ("iii", from)==from) {
		runningTotal += 3;
		from += 3;
	}
	else if (input.indexOf ("ii", from)==from) {
		runningTotal += 2;
		from += 2;
	}
	else if (input.indexOf ("i", from)==from) {
		runningTotal += 1;
		from += 1;
	};
	
	
	if (input.length == from) {
		//we've used up all the characters
		return runningTotal;
	}
}

