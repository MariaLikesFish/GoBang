// judge.js;

var vectorBaseX = new Array(1, 1,  1,  0, -1, -1, -1, 0); 
var vectorBaseY = new Array(1, 0, -1, -1, -1,  0,  1, 1); 
	
// gg == good game.
// local strategy to check the winner. 
function gg(lineX, lineY, xMarkerInt) {
	
	var terminaFlag = new Array(8); for(var n = 0; n < 8; n++) terminaFlag[n] = xMarkerInt; 
	var tScoreArray = new Array(0, 0,  0,  0,  0,  0,  0, 0); 
	
	for(var i = 0 + 1; i < 4 + 1; i++) {
		for(var j = 0; j < 8; j++) {
			var matrixE = fetchEFromMatrix(lineX + i * vectorBaseX[j], lineY + i * vectorBaseY[j]); // function to define. 
			if(matrixE != xMarkerInt) terminaFlag[j] = nullMarkInt; 
			tScoreArray[j] += matrixE * terminaFlag[j]; 
		}
	}
	
	/*
	var horizontal; 
	var vertical; 
	var slash; // /\/.
	var backSlash = tScoreArray[0] + tScoreArray[4]; // ///.
	*/
	
	var countingArray = new Array(0, 0, 0, 0); 
	var commentArray = new Array("backSlash", "horizontal", "slash", "vertical"); 
	var result = 1; 
	for(var m = 0; m < 4; m++) {
		var t = tScoreArray[m] + tScoreArray[m + 4]; 
		countingArray[m] = t; 
		result *= (t - 4); 
		
		if(result == 0) break; 
	}
	
	// COMMENT LATER. 	
	if(debugFlag) {
		console.log(terminaFlag); 
		console.log(tScoreArray); 
		console.log(countingArray); 
	}
	
	
	if(result == 0) {
		// canvas.onclick = ""; 
		silent(); 
		
		if(xMarkerInt == playerMarkInt) {
			showPlayerWinningMessage(); 
		} else {// xMarkerInt == computerMarkInt;
			showComputerWinningMessage(); 
		}
	}
}

function showPlayerWinningMessage() {
	console.log("player win."); 
}

function showComputerWinningMessage() {
	console.log("computer win."); 
}

function showDueMessage() {
	console.log("due"); 
}

// fetch element(i, j) from matrix; 
function fetchEFromMatrix(lineX, lineY) {
	if(!matrixCheckBorder(lineX)) return 0; 
	if(!matrixCheckBorder(lineY)) return 0; 
	
	return chessboardMatrix[lineX][lineY]; 
}

// assume it's a square matrix; 
function matrixCheckBorder(lineXX) {
	return lineXX >= 0 && lineXX < 19; 
}
