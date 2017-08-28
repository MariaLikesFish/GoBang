// score.js;

var scoringMatrix = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; 

var size = 19; 

function calculateScore(i, j) {
	
	if(isCrossTaken(i, j)) return MIN_INT; 
	
	/*
	return calculateOffenceScore(i, j) + 
				calculateDefenceScore(i, j) + 
				calculatePositionScore(i, j); 
				*/
	
	
	return  0.125 * calculateOffenceScore(i, j)
				+ calculateDefenceScore(i, j); 
				
				
	// return calculateDefenceScore(i, j); 
}

function isCrossTaken(i, j) {
	return chessboardMatrix[i][j] == playerMarkInt || 
				chessboardMatrix[i][j] == computerMarkInt; 
}

function calculatePositionScore(i, j) {
	return positionScoringMatrix[i][j]; 
}


function calculateOffenceScore(i, j) {
	return calculateXScore(i, j, kOffence); 
}

function calculateDefenceScore(i, j) {
	return calculateXScore(i, j, kDefence); 
}

// function- 
// 		player- 	0  --> 1
//		computer 	1  --> 2
// 		null		-1 --> 0;
// Assume that we stand on the computer(ai)'s side. 
// takes a redundant style in exchange with less variables; 
function calculateXScore(i, j, offenceOrDefence) {
	
	// fetch sth. from chessboardMatrix. 
	var arrayToScore = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	]; 
	
	var row = arrayToScore.length; // 4; 
	var len = arrayToScore[0].length; // 11; 
	var rad = Math.floor(len / 2); // 5; 
	
	for (var r = 0; r < row; r++) {
		for (var l = 0; l < len; l++) {
			var wt = rad - l; // CHECK. 
			var x = i + wt * vectorBaseX[r]; 
			var y = j + wt * vectorBaseY[r]; 
			arrayToScore[r][l] = fetchElement(x, y); 
		}
	}
	
	var scoreByDirection = [0, 0, 0, 0]; 
	for (var k = 0; k < row; k++) {
		scoreByDirection[k] = calculateXScoreSub(arrayToScore[k], offenceOrDefence); 
	}
	
	if (debugFlag) {
		console.log("scoreByDirection: "); 
		console.log(scoreByDirection); 
	}
	
	var max1 = (scoreByDirection[0] > scoreByDirection[1]) ? scoreByDirection[0] : scoreByDirection[1]; 
	var max2 = (scoreByDirection[2] > scoreByDirection[3]) ? scoreByDirection[2] : scoreByDirection[3]; 
	var max  = (max1 > max2) ? max1 : max2; 
	
	return max + calculatePositionScore(i, j); 
}

function fetchElement(i, j) {
	if(!matrixCheckBorder(i)) return nullMarkInt; 
	if(!matrixCheckBorder(j)) return nullMarkInt; 
	
	return chessboardMatrix[i][j]; 
}

function calculateXScoreSub(a, offenceOrDefence) {
	var s = ""; 
	// var sBWReversed = ""; // black to white, and vice versa; 
	
	// perform a deep copy. 
	var ac = new Array(a.length); // copy of a; 
	for (var i = 0; i < a.length; i++) {
		ac[i] = offenceOrDefence * a[i]; 
		// ac[i] = a[i]; 
	}
	// if (offenceOrDefence == kDefence) {
	ac[Math.floor(a.length / 2)] = -1; // the middle element ALWAYS takes the value 1. yeah.
	// }
	
	// COMMENT LATER. 
	// console.log(a); 
	// console.log(ac); 
	
	for (var i = 0; i < a.length; i++) {
		s += (ac[i] + 1);
		// sBWReversed += (a[i] * -1 + 1); 
	}
	
	// COMMENT LATER. 
	// console.log(s); 
	// console.log(sBWReversed); 
	
	// return calculateScoreFromString(s) + 
	// 			calculateScoreFromString(sBWReversed); 
	
	return calculateScoreFromString(s); 
}

// Input- a string of length 11; 
function calculateScoreFromString(s) {
	// handle exception. 
	if (s.length != 11) console.log("internal error 101"); 
	
	var classifiedScoring = new Array(0, 0, 0, 0, 0, 0); // length = 6; 
	
	for(var i = 0; i < loopSize; i++) {
		var patternS = pattern[i]; 
		var index = s.indexOf(patternS); 
		var sigNo = sig[i]; 
		
		if (sigNo == 2) i = jp[sigNo + 1]; 
		
		if (index >= 0) {
			classifiedScoring[sigNo]++; 
			
			var lastIndex = s.lastIndexOf(patternS); 
			if (index != lastIndex) classifiedScoring[sigNo]++; 
		}
		
	}
	
	return sum(classifiedScoring); 	
}

// sum the score array ONLY. 
function sum(a) {
	var total = 0; 
	for (var i = 0; i < a.length; i++) {
		total += a[i] * score[i]; 
	}
	
	return total; 
}