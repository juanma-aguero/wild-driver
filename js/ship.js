/** ship*/
function ship(){
	this.vel = 1;
	this.posX=200;
	this.posY=200;
	this.spriteX = (5*90);
	this.spriteY = 0;
	this.width=90;
	this.height=90;
	this.img = "ship";
	
	this.activeMovement="forward";
	this.activeAngle = 90;
	
	this.state = 0;
	this.isRebounding = false;
	this.isSprited = true;
	
	/** weapon */
	this.shot = 'fireball';
	this.isShooting = false;
	this.shoots=[];
	this.context = undefined;
	
}


/*
 * Update ship state
 */
ship.prototype.update=function(ctx){
	
	this.context = ctx;
	if(this.state == 0){
		if( this.posY > 0){
			this.posY=this.posY+(Math.sin(this.activeAngle*(Math.PI/-180))*this.vel);
			this.posX=this.posX+(Math.cos(this.activeAngle*(Math.PI/-180))*this.vel);
		}

	}else{
		var val = this.state/2;
		if( val == 1 || val == 2 || val == 4 || val == 8){
			this.img = "rock-explosion";
		}
		this.state++;
	}
	

	
	if(this.isShooting){
		for (var i=0; i<this.shoots.length; i++){
			this.shoots[i][1] = this.shoots[i][1] - 10;
		}
		this.drawShoots(ctx);
	}
	
}

ship.prototype.updateTilesetPosition = function(){
    var pos = (this.activeAngle/18);
    //if (pos === 20) pos = 0;
    this.spriteX = (pos * this.width);
    this.spriteY = 0;
}




/*
 * Filter event
 */
ship.prototype.notify=function(e){

	switch(e.keyCode){
		case 37:
		  this.activeAngle+=18;
	          if(this.activeAngle > 360) this.activeAngle=18;
		  this.updateTilesetPosition();
		  break;
		case 38:
		  this.activeMovement = "forward";
		  this.vel+=0.5;
		  break;
		case 39:
		  this.activeAngle-=18;
		  if(this.activeAngle < 0) this.activeAngle = 342;
		  this.updateTilesetPosition();
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


ship.prototype.drawShoots=function(ctx){
	
	for (i=0; i<this.shoots.length; i++){
		ctx.clearRect(this.shoots[i][0], this.shoots[i][1]+10, 15, 15);
		ctx.drawImage(imageBuffer[this.shot], this.shoots[i][0], this.shoots[i][1], 15, 15);
	}
	
}

ship.prototype.clearShoot=function(x, y){
	this.context.clearRect(x, y, 15, 15);
	
}




