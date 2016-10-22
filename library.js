// re-written for pseudoclassical subclasses unit
var Car = function(loc){
	this.loc = loc;
};

Car.prototype.move = function(){
	this.loc++;
};