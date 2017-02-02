var stage = document.getElementById('stage');
var dimensions = stage.getContext('2d');
var snakeSize = 10;
var snakeX = 175;
var snakeY = 175;
var alive = true;
var direction = 38;
var start = document.getElementById('start');

start.addEventListener('click', function() {
	init();
});

//drawing the snake
dimensions.beginPath();
dimensions.strokeStyle = '#FFFFFF';
dimensions.fillStyle = '#FFFFFF';
dimensions.fillRect(snakeX, snakeY, snakeSize, snakeSize);
dimensions.stroke();

document.onkeydown = function(key) {
	move(key.keyCode);
};

//making the snake start crawling
var init = function() {
	var movement = window.setInterval(function(){
		if(alive == true)
		{
			move(direction);
		}
  		else
  		{
  			return;
  		}
	}, 100);
};

var move = function(key) {
	if(alive = false)
	{
		return false;
	}

	if(key == 38) //up
	{
		snakeY -= 5;
		direction = 38;
	}
	else if(key == 40) //down
	{
		snakeY += 5;
		direction = 40;
	}
	else if(key == 37)//left
	{
		snakeX -= 5;
		direction = 37;
	}
	else if(key == 39)//right
	{
		snakeX += 5;
		direction = 39;
	}

	clear(dimensions);
	dimensions.fillRect(snakeX, snakeY, snakeSize, snakeSize);
	alive = true;

	if(snakeY == 0)	
	{
		alive = false;
	}
	else if(snakeY == 345)
	{
		alive = false;
	}
	else if(snakeX == 0)
	{
		alive = false;
	}
	else if(snakeX == 345)
	{
		alive = false;
	}

	return alive;
};

var clear = function(context) {
	context.clearRect(0, 0,  stage.width,stage.height);

	return true;
};