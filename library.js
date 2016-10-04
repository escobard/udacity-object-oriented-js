// using class - builds the object that is going to augment / change
// decorator augments the object its going to agument / change
var car = function (loc){
var obj  = {loc: loc};
// extends the object by adding functions that extend its functionality via a single callback
extend(obj, methods);
return obj;
};

// moved the move function out of the car constructor function to not create a function per instance of the car function, saving memory
// moved move and other custom functions into the methods variable to only write the functions attached to each object iteration once 
var methods = {
	move : function (){
	removeCarFromScreen(this.oc);
	addDustSwirlToScreen(this.loc);
	this.loc++;
	addCarToScreen(this.loc);
},
on : function (){},
off : function (){}
};