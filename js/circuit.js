/** Rect*/
function circuit(){
	this.width=64;
	this.height=64;
	this.img = 'circuit';
	this.isSprited = true;
	this.state = 0;
	this.clock = 0;

	this.activeMovement="forward";
	this.activeAngle = 90;
	this.borders = [];
}

circuit.prototype.build=function(){
	
	//izquierda
	this.borders.push(new border( 2, 5));
	this.borders.push(new border( 3, 5));
	this.borders.push(new border( 4, 5));
	this.borders.push(new border( 5, 5));
	this.borders.push(new border( 6, 5));
	this.borders.push(new border( 7, 5));
	this.borders.push(new border( 8, 5));
	this.borders.push(new border( 9, 5));
	this.borders.push(new border( 10, 5));
	this.borders.push(new border( 11, 5));
	this.borders.push(new border( 12, 5));
	this.borders.push(new border( 13, 5));
	this.borders.push(new border( 14, 5));
	this.borders.push(new border( 15, 5));
	
	//derecha
	this.borders.push(new border( 16, 6));
	this.borders.push(new border( 16, 7));
	this.borders.push(new border( 16, 8));
	this.borders.push(new border( 16, 9));
	this.borders.push(new border( 16, 10));
	this.borders.push(new border( 16, 11));
	this.borders.push(new border( 16, 12));
	this.borders.push(new border( 16, 13));
	this.borders.push(new border( 16, 14));
	
	//abajo
	this.borders.push(new border( 2, 15));
	this.borders.push(new border( 3, 15));
	this.borders.push(new border( 4, 15));
	this.borders.push(new border( 5, 15));
	this.borders.push(new border( 6, 15));
	this.borders.push(new border( 7, 15));
	
	//arriba
	this.borders.push(new border( 2, 2));
	this.borders.push(new border( 2, 3));
	this.borders.push(new border( 2, 4));
	this.borders.push(new border( 2, 5));
	this.borders.push(new border( 2, 6));
	this.borders.push(new border( 2, 7));
	
	
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
