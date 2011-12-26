/** Rect*/
function circuit(){
	this.width=2000;
	this.height=2000;
	this.state = 0;
	this.clock = 0;
	this.frictionCoeficient = 0.05;
	this.borders = [];
	
	// camera position
	this.cameraPosX = 800;
	this.cameraPosY = 400;
	this.cameraWidth = 600;
	this.cameraHeight = 400;
	
}

circuit.prototype.build=function(){

	////// BORDER - INTERNAL
	//left
	for(var i=12; i<=32; i++){
		this.borders.push(new border( i, 12, 'internal'));
	}
	//right
	for(var i=12; i<=32; i++){
		this.borders.push(new border( i, 32, 'internal'));
	}
	//bottom
	for(var i=13; i<=30; i++){
		this.borders.push(new border( 32, i, 'internal'));
	}
	//top
	for(var i=13; i<=30; i++){
		this.borders.push(new border( 12, i, 'internal'));
	}
	
	////// BORDER - EXTERNAL
	//left
	for(var i=2; i<=40; i++){
		this.borders.push(new border( i, 2, 'external'));
	}
	//right
	for(var i=2; i<=40; i++){
		this.borders.push(new border( i, 42, 'external'));
	}
	//bottom
	for(var i=3; i<=40; i++){
		this.borders.push(new border( 43, i, 'external'));
	}
	//top
	for(var i=3; i<=40; i++){
		this.borders.push(new border( 2, i, 'external'));
	}
	
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
