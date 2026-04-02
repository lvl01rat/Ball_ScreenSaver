

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var accel = 1;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.vx = 4;
	player.vy = 4;
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

	player.x += player.vx * accel;
	player.y += player.vy * accel;
	if(player.x + player.width/2 > canvas.width) {

		player.vx *= -1
		player.color = "red"
		increaseVelocity()
	}

	if(player.y + player.width/2 > canvas.height) {

		player.vy *= -1
		player.color = "blue"
		increaseVelocity()
	}

	if(player.x - player.width/2 < 0) {

		player.vx *= -1
		player.color = "yellow"
		increaseVelocity()
	}

	if(player.y - player.height/2 < 0) {

		player.vy *= -1
		player.color = "lime"
		increaseVelocity()
	}
	//Update the Screen
	player.drawCircle();
}

function increaseVelocity(){
	// player.vy += newVY
	// player.vx += newVX
	accel++;
}

