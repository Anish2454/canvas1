var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var state = 0;
var toggleButton = function(e){
	console.log(e);
	state++;
};
var clearButton = function(e){
	console.log(e);
	ctx.clearRect(0,0,600,600);
};

var drawBlueSquare = function(e){
	console.log(e);
	console.log("Blue Square");
	console.log(state);
	ctx.beginPath();
	ctx.fillStyle = "blue";
	var X = e.clientX;
	var Y = e.clientY;
	ctx.fillRect(X, Y, 10, 10);

};
var drawRedCircle = function(e){
	console.log(e);
	console.log("Red Circle");
	console.log(state);
	ctx.fillStyle = "red";
	var X = e.clientX;
	var Y = e.clientY;
  ctx.beginPath();
  ctx.arc(X, Y, 10, 0, Math.PI * 2, true);
  ctx.fill();
};
var pickFunc = function(e){
	drawFuncs[state % 2](e);
}
var drawFuncs = [drawBlueSquare, drawRedCircle];
toggle.addEventListener("click", toggleButton);
canvas.addEventListener("click", pickFunc);
clear.addEventListener("click", clearButton);
