/** Rect*/
function rock(){
	//this.vel = ( 2 + (Math.random()*(5-2)) );
	this.vel = 0;
	//this.posX= ( 0 + (Math.random()*(700-20)) );
	this.spriteX = 0;
	this.spriteY = 0;
	
	this.posY=200;
	this.posX=300;

	this.width=64;
	this.height=64;
	this.img = 'rock';
	this.isSprited = true;
	this.state = 0;
	this.clock = 0;

	this.activeMovement="forward";
	this.activeAngle = 90;

}


/*
 * Update rock state
 */
rock.prototype.update=function(ship){
	
	// Ship hits management
	if( ((ship.posX >= this.posX && ship.posX <= (this.posX+this.width)) || 
		(ship.posX+ship.width >= this.posX  && ship.posX.width <= (this.posX+this.width)))&&
		ship.posY >= this.posY && ship.posY <= this.posY+this.height && ship.state == 0 ){
		//soundBuffer['ship-explosion'].play();
		// crash state
		this.state = 4;
		this.activeAngle = ship.activeAngle;
		this.vel = ship.vel;

	}
	
	// Shoot hits management
	if(this.state == 0){
		for (var i=0; i < ship.shoots.length; i++){
			if( ship.shoots[i][0] >= this.posX  && 
				ship.shoots[i][0] <= (this.posX+this.width) && 
				ship.shoots[i][1] >= this.posY &&
				ship.shoots[i][1] <= this.posY+this.height
				){
				ship.clearShoot(ship.shoots[i][0], ship.shoots[i][1]);
				ship.shoots.splice ( i, 1 );
				this.state = 1;
				this.clock = 0;
				this.img = 'rock-explosion';
				//var explosion = new Audio("./sounds/bigboom.wav");
				//explosion.play();
				addPoints();
			}
			
		}
	}

	// Crash management
	if( this.state == 4 ){
		this.posY=this.posY+(Math.sin(this.activeAngle*(Math.PI/-180))*this.vel);
	        this.posX=this.posX+(Math.cos(this.activeAngle*(Math.PI/-180))*this.vel);
	}
	
	// Explotion management
	if(this.state == 1 && this.clock > (imageBuffer[this.img].width/this.width)*2-2 ){
		this.state = 2;
	}
	
	
	// Animate management
	if( this.clock % 2 == 0){
		this.spriteX = this.width*(this.clock/2);
		this.spriteY = 0;
	}
	if( this.clock > (imageBuffer[this.img].width/this.width)*2-2 ){
		this.clock = 0;
	}
	this.clock++;
	

}


/*
 * Filter event
 */
rock.prototype.notify=function(e){

	
}



