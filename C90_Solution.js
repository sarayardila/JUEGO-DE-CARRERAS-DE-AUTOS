canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
	background_imgTag = new Image(); //Define la variable con una nueva imagen
	background_imgTag.onload = uploadBackground; // Define una función para cargar esta variable
	background_imgTag.src = background_image;   //Carga la imagen

	car1_imgTag = new Image(); //Define la variable con una nueva imagen
	car1_imgTag.onload = uploadcar1; // Define una función para cargar esta variable
	car1_imgTag.src = car1_image;   // Carga la imagen

	car2_imgTag = new Image(); //Define la variable con una nueva imagen
	car2_imgTag.onload = uploadcar2; // Define una función para cargar esta variable
	car2_imgTag.src = car2_image;   // Carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("Tecla de flecha hacia arriba");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("Tecla de flecha hacia abajo");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("Tecla de flecha hacia la izquierda");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("Tecla de flecha hacia la derecha");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("tecla w");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("tecla s");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("tecla a");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("tecla d");
		}

		if(car1_x > 700)
		{
			console.log("car1");
			document.getElementById('game_status').innerHTML = "¡Gana el auto 1!";
		}
		else if(car2_x > 700)
		{
			console.log("car2");
			document.getElementById('game_status').innerHTML = "¡Gana el auto 2!";
		}
	
}
function car1_up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        console.log("Cuando se presione la flecha arriba,  x = " + car1_x + " | y = " +car1_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}
function car1_down()
{
    if(car1_y <=500)
    {
        car1_y =car1_y+ 10;
        console.log("Cuando se presione la flecha abajo,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}

function car1_left()
{
    if(car1_x >= 0)
    {
        car1_x =car1_x - 10;
        console.log("Cuando se presione la flecha izquierda,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}
function car1_right()
{
    if(car1_x <= 700)
    {
        car1_x =car1_x + 10;
        console.log("Cuando se presione la flecha derecha,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
         uploadcar2();
   }
}

function car2_up()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("Cuando se presione la flecha arriba,  x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}
function car2_down()
{
    if(car1_y <=500)
    {
        car2_y =car2_y+ 10;
        console.log("Cuando se presione la flecha abajo,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}
function car2_left()
{
    if(car2_x >= 0)
    {
        car2_x =car2_x - 10;
        console.log("Cuando se presione la flecha izquierda,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}
function car2_right()
{
    if(car2_x <= 700)
    {
        car2_x =car2_x + 10;
        console.log("Cuando se presione la flecha derecha,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
         uploadcar2();
   }
}

