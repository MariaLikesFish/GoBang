// draw.js;

// ctx == canvas rendering ConTeXt 2d; 
// a regular pattern of chessboard is 18 x 18 block, 
// 	each block takes 20 x 20 px in size.
function drawGrid(ctx) {
	// define local constants.
	var boardSize = 18; // number of blocks each line and row. 
	
	
	ctx.beginPath();
	
	// ctx.moveTo(0, 200); 
	// ctx.lineTo(100, 0);
	
	for(var i = 0; i <= boardSize; i++) {
		ctx.moveTo(originX, originY + blockH * i); ctx.lineTo(originX + boardSize * blockW, originY + blockH * i); // horizontal. 
		ctx.moveTo(originX + blockW * i , originY); ctx.lineTo(originX + blockW * i , originY + boardSize * blockH); // vertical. 
	}
	ctx.stroke();
}


// draw a chesspiece on the chessboard.
function drawChesspiece(lineX, lineY, fillStyle) {
	var radius = 8; // 8 px, to avoid two adjacent tangent circles. 
	
	var centerX = originX + lineX * blockW; 
	var centerY = originY + lineY * blockH; 
	
	
	ctx.beginPath(); 
	
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false); // false- clockwise.
	ctx.fillStyle = fillStyle; 
	
	ctx.fill(); 
	
	ctx.stroke();
	
}

function init() {
	canvas = document.getElementById("Chessboard"); 
	ctx = canvas.getContext("2d");	
}