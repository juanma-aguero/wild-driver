/*********************
 * GAME class
 *
 */
function game(addPointer){
	// Context
	this.ctx = undefined;
	
	// Objects
	this.cars = [];
	
	this.rocks=[];

	// keyconfs
	var keyConf1 = {up: 38, down: 40, left: 37, right: 39};
	var keyConf2 = {up: 87, down: 83, left: 65, right: 68};
	
	this.cars.push(new car(1120, 610, addPointer, keyConf1));
	//this.cars.push(new car(200, 300, addPointer, keyConf2));
	//this.cars.push(new car(300, 300, addPointer));
	
	this.circuit = new circuit();
	
	this.activeKeys = [];
	
	this.intLoop = null;
	this.points = 0;
}


/*
 * Draw objects on canvas
 */
game.prototype.drawObject=function (object) {

	if(object.isSprited){
		this.ctx.drawImage(imageBuffer[object.img], object.spriteX, object.spriteY, object.width, object.height, (object.posX-this.circuit.cameraPosX), (object.posY-this.circuit.cameraPosY), object.width, object.height);
	}else{
		this.ctx.drawImage(imageBuffer[object.img], (object.posX-this.circuit.cameraPosX), (object.posY-this.circuit.cameraPosY), object.width, object.height);
	}
	
}


/*
 * Delete objects on canvas
 */
game.prototype.deleteObject=function (object) {
	this.ctx.clearRect((object.posX-this.circuit.cameraPosX), (object.posY-this.circuit.cameraPosY),object.width,object.height);
}


/*
 * Init game functionalitys
 */
game.prototype.init=function(){
	var canvas = document.getElementById("canvas-layer");
	this.ctx = canvas.getContext("2d");
			
	this.circuit.build();
	
	for (var i=0; i<this.cars.length; i++){
		this.cars[i].circuit = this.circuit;
	}
	
	this.startLoop();

}

game.prototype.startLoop=function(){
	var gameObj = this;
	
	function loop(){
		
		// delete old objects
		for (var i=0; i<gameObj.cars.length; i++){
			gameObj.deleteObject(gameObj.cars[i]);
		}
		for (var i=0; i<gameObj.rocks.length; i++){
			gameObj.deleteObject(gameObj.rocks[i]);
		}
		for (var i=0; i<gameObj.circuit.borders.length; i++){
			gameObj.deleteObject(gameObj.circuit.borders[i]);
		}
		
		// update states
		gameObj.update();

		// draw new objects
		for (var i=0; i<gameObj.cars.length; i++){
			gameObj.drawObject(gameObj.cars[i]);
		}
		for (var i=0; i<gameObj.rocks.length; i++){
			gameObj.drawObject(gameObj.rocks[i]);
		}
		for (var i=0; i<gameObj.circuit.borders.length; i++){
			gameObj.drawObject(gameObj.circuit.borders[i]);
		}
	}
	
	this.stop();
	
	this.intLoop = setInterval(loop, 30);
}

/*
 * Stop game
 */
game.prototype.stop=function(){
	clearInterval(this.intLoop);
}


/*
 * Update all components
 */
game.prototype.update=function(){
	
	for (var i=0; i<this.cars.length; i++){
		if( this.cars[i].state <= 8 ){
		this.cars[i].update(this.ctx);
		
		}else{
			this.stop();
			gameOver()
		}
	}
	
	
	for (var i=0; i<this.circuit.borders.length; i++){
		this.circuit.borders[i].update();
	}

}

/*
 * Notify event to all components
 */
game.prototype.notify=function(e, event){
	if(event == 'keydown'){
		this.activeKeys.push(e);
	}else{
		this.activeKeys.pop(e);
	}
	
	for (var i=0; i<this.cars.length; i++){
		this.cars[i].notify(this.activeKeys);
	}
}



