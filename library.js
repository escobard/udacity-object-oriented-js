// using class - builds the object that is going to augment / change
// decorator augments the object its going to agument / change
var car = function (loc){
var obj  = {loc: loc};
obj.move = move;
return obj;
};

// moved the move function out of the car constructor function to not create a function per instance of the car function, saving memory
var move = function (){
	removeCarFromScreen(this.oc);
	addDustSwirlToScreen(this.loc);
	this.loc++;
	addCarToScreen(this.loc);
};