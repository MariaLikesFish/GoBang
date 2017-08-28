// ai.js;

// ==============MEMO====================//
// the test job of ai section NOT complete
// add a computer / player lock, 
// 	to stop one side from moving while the
// 	other side is moving or thinking / 
// 	calculating. 
// ==========END OF MEMO=================//
// the most challenging part starts here; 


function computerMove() {
	if (hasWin) return; 
	
	// comment LATER. 
	// console.log("imagine that i move..."); 
	
	var globalMax = MIN_INT; 
	var xpos = -1; // invalid;
	var ypos = -1; // invalid; 
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			var score = calculateScore(i, j);
			scoringMatrix[i][j] = score; 
			
			if (score > globalMax) {
				globalMax = score; 
				xpos = i; // IMPORTANT.
				ypos = j; // IMPORTANT.
			}
		}
	}
	
	if (xpos + ypos < 0) {
		showDueMessage();
	} else {
		move(xpos, ypos, computerMarkInt); 
	}
	
	// COMMENT LATER. 
	// console.log(calculateScoreFromString("00000222222")); 
	// console.log(calculateScoreFromString("00110211000")); 
	// console.log(calculateScoreFromString("20001010001")); 
	
	// var a = new Array(1, -1, -1, -1, 0, -1, 0, -1, -1, -1, 0); 
	// calculateXScore(a); 
	
	
}

