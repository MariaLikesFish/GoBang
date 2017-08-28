
// ----- ExeScript Options Begin -----
// ScriptType: window,activescript,invoker
// DestDirectory: current
// Icon: default
// OutputFile: C:\Users\Administrator\Desktop\five-in-a-row\js\main.exe
// 32Bit: yes
// ----- ExeScript Options End -----
//chess.js;
"use strict"

//===================README====================//
//	GoBang strategy: 
//		1. local algorithm	- traversal
//		2. global algorithm- backtracking(Minimax algorithm, Alpha-Beta pruning, etc.)
//	
//	This demo uses the first one, i.e. local algorithm; 
//=================THE END=====================//

// var debugFlag = true; 
var debugFlag = false; 

var hasWin = false; 
// Assumption.
//		Player ALWAYS takes the first hand. 

// define global variables.
var playerFillStyle = "black"; 
var computerFillStyle = "white"; 

var computerMarkInt = 1; 
var playerMarkInt = -1; 
var nullMarkInt = 0; 

var chessboardMatrix = [
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

// document.getElementsByTagName("h1")[0].innerHTML = "Testing..."; 
var canvas; 
var ctx;

var blockW = 20; // block width.
var blockH = 20; // block height. 

var originX = 10; 
var originY = 10; 

function main() {
	init(); 
	
	drawGrid(ctx);
	
	/*
	drawChesspiece(ctx, 110, 150, "white"); 
	drawChesspiece(ctx, 210, 250, "black"); 
	drawChesspiece(ctx, 110, 130, "white"); 
	*/
	
	/*
	canvas.click(function(event) {
		console.log("pr move..."); 
		
	}); 
	*/
	
	// canvas.onclick = playerMove; 
	active(); 
	
	// COMMENT LATER.
	// var s = "Hello World!"; 
	// console.log(s); 
	// s[1] = 'a'; 
	// console.log(s); 
	
}

function silent() {
	canvas.onclick = ""; 
	hasWin = true; 
}

function active() {
	canvas.onclick = playerMove; 
	hasWin = false; 
}

/*
	MEMO
	====
	
	Overload NOT supported in js;
	
	js includes a main function;
	"document" starts with a LITTLE "d";
	document
		.getElementById()
		.getElementsByTagName()
	
	*ctx
		.beginPath()
		
		.moveTo()
		.lineTo()
		.arc()
		
		.fill()
			.fillStyle
		.stroke()
	
	Math
		.PI
		.Ceil()
		.Floor()
		.Round()
*/