/** Rect*/
function circuit(){
	this.width=64;
	this.height=64;
	this.img = 'circuit';
	this.isSprited = true;
	this.state = 0;
	this.clock = 0;
	
	this.frictionCoeficient = 0.15;

	this.activeMovement="forward";
	this.activeAngle = 90;
	this.borders = [];
}

circuit.prototype.build=function(){
	
	//izquierda
	this.borders.push(new border( 2, 2));
	this.borders.push(new border( 3, 2));
	this.borders.push(new border( 4, 2));
	this.borders.push(new border( 5, 2));
	this.borders.push(new border( 6, 2));
	this.borders.push(new border( 7, 2));
	this.borders.push(new border( 8, 2));
	this.borders.push(new border( 9, 2));
	this.borders.push(new border( 10, 2));
	this.borders.push(new border( 11, 2));
	this.borders.push(new border( 12, 2));
	this.borders.push(new border( 13, 2));
	this.borders.push(new border( 14, 2));
	this.borders.push(new border( 15, 2));
	
	//derecha
	this.borders.push(new border( 2, 21));
	this.borders.push(new border( 3, 21));
	this.borders.push(new border( 4, 21));
	this.borders.push(new border( 5, 21));
	this.borders.push(new border( 6, 21));
	this.borders.push(new border( 7, 21));
	this.borders.push(new border( 8, 21));
	this.borders.push(new border( 9, 21));
	this.borders.push(new border( 10, 21));
	this.borders.push(new border( 11, 21));
	this.borders.push(new border( 12, 21));
	this.borders.push(new border( 13, 21));
	this.borders.push(new border( 14, 21));
	this.borders.push(new border( 15, 21));
	
	//abajo
	this.borders.push(new border( 16, 3));
	this.borders.push(new border( 16, 4));
	this.borders.push(new border( 16, 5));
	this.borders.push(new border( 16, 6));
	this.borders.push(new border( 16, 7));
	this.borders.push(new border( 16, 8));
	this.borders.push(new border( 16, 9));
	this.borders.push(new border( 16, 10));
	this.borders.push(new border( 16, 11));
	this.borders.push(new border( 16, 12));
	this.borders.push(new border( 16, 13));
	this.borders.push(new border( 16, 14));
	this.borders.push(new border( 16, 15));
	this.borders.push(new border( 16, 16));
	this.borders.push(new border( 16, 17));
	this.borders.push(new border( 16, 18));
	this.borders.push(new border( 16, 19));
	this.borders.push(new border( 16, 20));
	
	//arriba
	this.borders.push(new border( 1, 3));
	this.borders.push(new border( 1, 4));
	this.borders.push(new border( 1, 5));
	this.borders.push(new border( 1, 6));
	this.borders.push(new border( 1, 7));
	this.borders.push(new border( 1, 8));
	this.borders.push(new border( 1, 9));
	this.borders.push(new border( 1, 10));
	this.borders.push(new border( 1, 11));
	this.borders.push(new border( 1, 12));
	this.borders.push(new border( 1, 13));
	this.borders.push(new border( 1, 14));
	this.borders.push(new border( 1, 15));
	this.borders.push(new border( 1, 16));
	this.borders.push(new border( 1, 17));
	this.borders.push(new border( 1, 18));
	this.borders.push(new border( 1, 19));
	this.borders.push(new border( 1, 20));
	
}


/*
 * Update circuit state
 */
circuit.prototype.update=function(car){

}


/*
 * Filter event
 */
circuit.prototype.notify=function(e){

}
