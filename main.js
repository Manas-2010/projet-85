//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_height= 285;
greencar_width= 179;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;
//Set initial position for a car image.

function add() {
	background_imageTag= new Image();
	background_imageTag.onload= uploadBackground;
	background_imageTag.src= background_image;

	greencar_imageTag= new Image();
	greencar_imageTag.onload= uploadgreencar;
	greencar_imageTag.src= greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= -1){
         greencar_y = greencar_y -10;
        console.log("When up arrow is pressed ");
        console.log("X = " + greencar_x + " Y = " + greencar_y);
        uploadgreencar();
        uploadgreencar();
	}
}

function down()
{
	if(greencar_y >= -1){
		greencar_y = greencar_y +10;
		console.log("When down arrow is pressed ");
		console.log("X = " + greencar_x + " Y = " + greencar_y);
		uploadgreencar();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x >= -1){
		greencar_x = greencar_x -10;
		console.log("When left arrow is pressed ");
		console.log("X = " + greencar_x + " Y = " + greencar_y);
		uploadgreencar();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x >= -1){
		greencar_x = greencar_x +10;
		console.log("When left arrow is pressed ");
		console.log("X = " + greencar_x + " Y = " + greencar_y);
		uploadgreencar();
		uploadgreencar();
	}
}
