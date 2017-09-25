//p5js sketch code here

var socket;

function setup(){
	//createCanvas(600,400);
	//background(51);

	var canvasDiv = document.getElementById('main');
    var width = canvasDiv.offsetWidth;
    var sketchCanvas = createCanvas(width,600);
    console.log(sketchCanvas);
    sketchCanvas.parent("main");
    background(51);

	//adding socket client so that it interacts with the server
	socket = io.connect('http://localhost:4200'); //window.location.hostname
	socket.on('mouse',newDrawing); //on receiving

}

function newDrawing(data){
	noStroke();
	fill(255,0,100); //different color
	ellipse(data.x, data.y, 36, 36);
}

function mouseDragged(){
	console.log('Sending: ' + mouseX + ',' + mouseY);

	//sending the message to the server
	var data = {
		x : mouseX,
		y : mouseY
	}
	socket.emit('mouse',data);

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
	
}

function draw(){
	
}
