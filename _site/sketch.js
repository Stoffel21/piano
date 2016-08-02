var canvas_width  = 500;
var canvas_height = 700;
var padding = 10;
var rowNum = 3;
var colNum = 4;
var rectSizeX = ((canvas_width/rowNum)-(padding*2));
var rectSizeY = (canvas_height/colNum-(padding*2));
var rectRounded = 5;
var allButtons = [];
function setup() {
	createCanvas(canvas_width,canvas_height);
	background(100);
	colorMode(HSB, 100);
	 // draw all your buttons once
	for (var y=0;y<colNum;y++){


	for (var x =0;x<rowNum;x++){
	
	
		var b = new Button(x,y);
		allButtons.push(b)
	}
	}




}



function draw() {
	

	for (i in allButtons){
		allButtons[i].update();
	}



	
  
}

function Button(x,y){
	this.x =x;
	this.y = y;
	// this.col = col;
	this.xCenter = this.x*(rectSizeX+padding)+(rectSizeX/2)
	this.yCenter = this.y*(rectSizeY+padding)-(rectSizeY/2)
	this.col = [random(100), 50,100];
	noStroke();

fill(this.col[0], this.col[1], this.col[2])


	rect(this.x*(rectSizeX+padding), this.y*(rectSizeY+padding), rectSizeX, rectSizeY,rectRounded)

	this.update = function(){
		allButtons[0].col[1]+=20
		this.x += 20;
		// console.log('change col and play note')
	
	}

}

function mousePressed(){
	console.log('mouse was pressed at', touchX, touchY)
		for (i in allButtons){
			if (Math.abs(touchX-allButtons[i].xCenter)<rectSizeX/2){
				if (Math.abs(touchY-allButtons[i].yCenter)<rectSizeY/2){

					allButtons[i].update();
					console.log('hit button', i)

					
				}

			}

	}
}