/** Border*/
function border(x0, y0){

	this.vel = 0;
	
	this.spriteX = 0;
	this.spriteY = 0;
	

	this.width=30;
	this.height=30;
	
	this.posY=(x0*this.width);
	this.posX=(y0*this.height);
	
	this.img = 'wheel';
	this.isSprited = false;

	this.state = 0;

	this.activeMovement="forward";
	this.activeAngle = 90;

}


/*
 * Update border state
 */
border.prototype.update=function(car){

}


/*
 * Filter event
 */
border.prototype.notify=function(e){

	
}



