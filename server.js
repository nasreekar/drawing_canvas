//socket server code here
//p5 js connects to the node server using 
//this server also needs to host the html and JS files 

console.log("Entered server.js file");

//importing the express module we are using
var express  = require('express'); 

var app = express();
var server = app.listen(4200);
console.log("Listening to port 4200");

app.use(express.static('public')); //host everything in that public directory

console.log("My socket server is running");

//adding socket to share the user interaction to server
var socket = require('socket.io');

//obj that keeps track of input and output functions
var io = socket(server);

//dealing with events
//new connection event
io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection: ' + socket.id);

	socket.on('mouse',mouseMsg); //if there is a message called mouse, trigger this function

	function mouseMsg(data){
		socket.broadcast.emit('mouse',data); //sending the messages back out
		//io.sockets.emit('mouse',data); //other way of sending the messages back
		//console.log(data); //to log the coordinates of mouse movement
	}	

}