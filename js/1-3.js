

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.vx = 4;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	// if(d)
	// {
	// 	console.log("Moving Right");
	// 	player.x += 2;
	// }
	// if(a)
	// {
	// 	console.log("Moving Left");
	// 	player.x += -2;
	// }

	player.x += player.vx;
	if(player.x + player.width/2 > canvas.width) {

		player.vx = -player.vx
	}

	if(player.x - player.width/2 < 0) {

		player.vx = -player.vx
	}
	//Update the Screen
	player.drawCircle();
}

