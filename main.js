var canvas = document.getElementById("canvas");
var c1 = canvas.getContext("2d");

var car_w = 75;
var car_h = 100;

var bg_image = "parkingLot.jpg";
var car_image = "car2.png";

var car_x = 5;
var car_y = 225;

function add() {
	
	bg_img = new Image();
	bg_img.onload = upload_bg;
	bg_img.src = bg_image;

	car_img = new Image();
	car_img.onload = upload_car;
	car_img.src = car_image;
}

function upload_bg() {

	c1.drawImage(bg_img,0,0,canvas.width,canvas.height);

}

function upload_car() {
	
c1.drawImage(car_img,car_x,car_y,car_w,car_h);
	
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
	if(car_y >= 0)
car_y = car_y-10;
upload_bg();
upload_car();
console.log("When up arrow is pressed, then KeyCode = " + 38);
console.log("Now the x position is = " + car_x);
console.log("Now the y position is = " + car_y);


}

function down()
{
	if(car_y <= 400)
car_y = car_y+10;
upload_bg();
upload_car();
console.log("When up arrow is pressed, then KeyCode = " + 40);
console.log("Now the x position is = " + car_x);
console.log("Now the y position is = " + car_y);

}

function left()
{
	if(car_x >= 0)
car_x = car_x-10;
upload_bg();
upload_car();
console.log("When up arrow is pressed, then KeyCode = " + 37);
console.log("Now the x position is = " + car_x);
console.log("Now the y position is = " + car_y);

}

function right()
{
	if(car_x <= 725)
car_x = car_x+10;
upload_bg();
upload_car();
console.log("When up arrow is pressed, then KeyCode = " + 39);
console.log("Now the x position is = " + car_x);
console.log("Now the y position is = " + car_y);
}
