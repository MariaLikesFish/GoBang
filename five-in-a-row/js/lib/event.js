// event.js;

function playerMove(event) {
	if (hasWin) return; 
	// read / write lock. 
	// silent(); 
	
	// test code, COMMENT LATER. 
	// console.log("cp move..."); 
	// console.log(event); 
	
	var lineX = Math.round((event.offsetX - originX) / blockW); 
	var lineY = Math.round((event.offsetY - originY) / blockH); 

	move(lineX, lineY, playerMarkInt); 
	
	if (hasWin) return; 
	
	computerMove(); 
	
	// read / write lock; 
	// active(); 
	
	// COMMENT LATER. 
	// console.log(chessboardMatrix); 
	// logMatrix(chessboardMatrix); 
}

function move(lineX, lineY, xMarkerInt) {
	
	// catch exception. 
	if ((xMarkerInt != playerMarkInt) && (xMarkerInt != computerMarkInt)) 
		console.log("internal error 404"); 
	
	
	var xFillStyle = (xMarkerInt == playerMarkInt) ? playerFillStyle : computerFillStyle; 
	if (chessboardMatrix[lineX][lineY] == nullMarkInt) {
		chessboardMatrix[lineX][lineY] = xMarkerInt; // CHECK; 
		drawChesspiece(lineX, lineY, xFillStyle); 
		
		gg(lineX, lineY, xMarkerInt); 
	}
	
	
}

function logMatrix(m) {
	for (var i = 0; i < m.length; i++) console.log(m[i]);  
}