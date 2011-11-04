/** 
* CAR
* States: 
* 0 - default
* 1 - crash
* n - default
* n - default
*
*/
function car(addPointer){
	this.vel = 0;
	this.posX=200;
	this.posY=200;
	this.spriteX = (5*90);
	this.spriteY = 0;
	this.width=90;
	this.height=90;
	this.img = "car";
	
	this.activeMovement="forward";
	this.activeAngle = 90;
	
	this.state = 0;
	
	this.isRebounding = false;
	this.isSprited = true;
	
	this.circuit = undefined;
	
	/** weapon */
	this.shot = 'fireball';
	this.isShooting = false;
	this.shoots=[];
	
	this.context = undefined;
	
	this.showAngle = addPointer;
	
}


/*
 * Update car state
 */
car.prototype.update=function(ctx){
	
	this.context = ctx;
	var crashState = this.thereIsACrash();
	if(crashState > 0 ){
		//alert(crashState);
		switch(crashState){
			case 1:
				if( this.activeAngle > 90 && this.activeAngle < 180  ){
					this.activeAngle = this.activeAngle - 90;
				}else{
					if( this.activeAngle > 180 && this.activeAngle < 270  )	this.activeAngle = this.activeAngle + (270-this.activeAngle);
					if( this.activeAngle == 180)this.activeAngle = 0;
					if( this.activeAngle == 0)this.activeAngle = 180;
				} break;
			case 5:
				if( this.activeAngle > 270 && this.activeAngle < 360 ){
					this.activeAngle = 0+(360 - this.activeAngle);
				}else{
					if( this.activeAngle > 180 && this.activeAngle < 270  )	{
						this.activeAngle = (90+(this.activeAngle-180));
					}else{
						if( this.activeAngle > 90 && this.activeAngle < 180  )this.activeAngle = this.activeAngle - 90;
						if( this.activeAngle == 270)this.activeAngle = 90;
					}
				}
				break;
			case 15:
				if( this.activeAngle > 270 && this.activeAngle < 360 ){
					this.activeAngle = 0+(360 - this.activeAngle);
				}else{
					if( this.activeAngle > 180 && this.activeAngle < 270  )	{
						this.activeAngle = (90+(this.activeAngle-180));
					}else{
						if( this.activeAngle > 90 && this.activeAngle < 180  )this.activeAngle = this.activeAngle - 90;
						if( this.activeAngle == 270)this.activeAngle = 90;
					}
				}
				break;
		}
		
	}
	switch( this.state ){
		case 0: this.defaultMovement(); break;
		case 1: this.crashMovement(); break;
	}
	if(this.isShooting){
		for (var i=0; i<this.shoots.length; i++){
			this.shoots[i][1] = this.shoots[i][1] - 10;
		}
		this.drawShoots(ctx);
	}
	this.updateTilesetPosition();
	this.showAngle(this.activeAngle);
}


/*****/
car.prototype.defaultMovement = function(){
	if( this.posY > 0){
		this.posY=this.posY+(Math.sin(this.activeAngle*(Math.PI/-180))*this.vel);
		this.posX=this.posX+(Math.cos(this.activeAngle*(Math.PI/-180))*this.vel);
	}
}


/******/
car.prototype.crashMovement = function(){
	if( this.posY > 0){
			this.posY=this.posY+(Math.sin(this.activeAngle*(Math.PI/-180))*this.vel);
			this.posX=this.posX+(Math.cos(this.activeAngle*(Math.PI/-180))*this.vel);
	}
}


/******/
car.prototype.thereIsACrash = function(){
	var response = 0;
	for (var i=0; i<this.circuit.borders.length; i++){
		response = this.intersection(this, this.circuit.borders[i]);
		if( response > 0){
			break;
		}
	}
	return response;
}


/** interseccion */
car.prototype.intersection = function(object1, object2){
	var response = 0;
	
	if( 
		( object1.posX <= (object2.posX+object2.width) ) && 
		(object1.posY <= (object2.posY+object2.height)) &&
		(object1.posX >= object2.posX) && 
		(object1.posY >= object2.posY) 
			){
		response += 1;
	}
	
	if( 
		( object1.posX <= (object2.posX+object2.width) ) && 
		(object1.posX >= object2.posX) && 
		((object1.posY+object1.height) <= (object2.posY+object2.height)) &&
		((object1.posY+object1.height) >= object2.posY)
			){
		response += 5;
	}
	
	if( 
		((object1.posX+object1.width) <= (object2.posX+object2.width) ) && 
		((object1.posX+object1.width) >= object2.posX) && 
		((object1.posY+object1.height) <= (object2.posY+object2.height)) &&
		((object1.posY+object1.height) >= object2.posY)
			){
		response += 10;
	}
	
	if( 
		((object1.posX+object1.width) <= (object2.posX+object2.width) ) && 
		((object1.posX+object1.width) >= object2.posX) && 
		((object1.posY) <= (object2.posY+object2.height)) &&
		((object1.posY) >= object2.posY)
			){
		response += 15;
	}
	
	return response;
}


car.prototype.updateTilesetPosition = function(){
    var pos = (this.activeAngle/18);
    //if (pos === 20) pos = 0;
    this.spriteX = (pos * this.width);
    this.spriteY = 0;
}




/*
 * Filter event
 */
car.prototype.notify=function(e){

	switch(e.keyCode){
		case 37:
		  this.activeAngle+=18;
	          if(this.activeAngle == 360) this.activeAngle=0;
		  break;
		case 38:
		  this.activeMovement = "forward";
		  this.vel+=0.5;
		  break;
		case 39:
		  this.activeAngle-=18;
		  if(this.activeAngle < 0) this.activeAngle = 342;
		  break;
		case 40:
		  this.activeMovement = "backward";
		  this.vel-=0.5;
		  break;
		case 70:
			//var lazer = new Audio("./sounds/lazer.wav");
			//lazer.play();
			var nShoot=[];
			nShoot[0]=this.posX+10;
			nShoot[1]=this.posY+10;
			this.shoots.push(nShoot);
			this.isShooting = true;
			break;
	}

	
	
}


car.prototype.drawShoots=function(ctx){
	
	for (i=0; i<this.shoots.length; i++){
		ctx.clearRect(this.shoots[i][0], this.shoots[i][1]+10, 15, 15);
		ctx.drawImage(imageBuffer[this.shot], this.shoots[i][0], this.shoots[i][1], 15, 15);
	}
	
}

car.prototype.clearShoot=function(x, y){
	this.context.clearRect(x, y, 15, 15);
	
}




