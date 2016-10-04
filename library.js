// using class - builds the object that is going to augment / change
// decorator augments the object its going to agument / change
var Car = function (loc){

// added the Object.create method instead of a literal object to allow prototyping
	var obj  = Object.create(Car.methods);

// add the property loc to the obj object
	obj.loc = loc;

// extends the object by adding functions that extend its functionality via a single callback.
// changed to instead call as a method of the car object, to avoid calling a global variable.

// got rid of the extend function, as the object Car.methods is already being called to by the object.create callback.
// extend(obj, Car.methods);

	return obj;
};

// moved the move function out of the car constructor function to not create a function per instance of the car function, saving memory
// moved move and other custom functions into the methods variable to only write the functions attached to each object iteration once 
Car.methods = {
	move : function (){
	removeCarFromScreen(this.oc);
	addDustSwirlToScreen(this.loc);
	this.loc++;
	addCarToScreen(this.loc);
},
	on : function (){},
onff : function (){}
};

// further study on the extend object fucntion for native JS
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}
// this allows for the object to be extended as shown in the tutorial.

// with ES6 compliant JavaScript one can use the Object.Assign parameter to merge objects, as shown below
var car = function (loc){
	var obj  = {loc: loc};
	Object.assign(obj, Car.methods);
	return obj;
};
// only withs with es6 compliant compilers, best to use a function callback instead
