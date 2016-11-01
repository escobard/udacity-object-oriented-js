// using class - builds the object that is going to augment / change
// decorator augments the object its going to agument / change
var Car = function (loc){

// added the Object.create method instead of a literal object to allow prototyping
// replaced Car.methods property to Car.prototype in order to call the object's methods via the prototype callback.
// removed the property of the Car object that initiate a prototype, since the new constructor was added to each object instance.
//	var obj  = Object.create(Car.prototype);

// add the property loc to the obj object
// removed since the new constructor has been added to each object instance
//	obj.loc = loc;

	this.loc = loc;

// extends the object by adding functions that extend its functionality via a single callback.
// changed to instead call as a method of the car object, to avoid calling a global variable.

// got rid of the extend function, as the object Car.methods is already being called to by the object.create callback.
// extend(obj, Car.methods);
// removed the return property of the Car object since the new constructor is being used for each instance of the Car object.
//	return obj;

// the new constructor on any instance of an object automatically attaches the following lines of code to the called object; the following two lines are not necessary
// but were added for reference purposes
	this = Object.create(Car.prototype);
	return this;
};

// moved the move function out of the car constructor function to not create a function per instance of the car function, saving memory
// moved move and other custom functions into the methods variable to only write the functions attached to each object iteration once 
// changed to accept the prototype property of the Car object.
Car.prototype.move = function (){
	this.loc++;
};
// very important to remember that any .prototype designation is basically the stored delegation of each object instance, which is looked up every time the object is called.
// this is not the same as calling the original object constructor

// further study on the extend object function for native JS, another way to extend objects by merging them with other objects.
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
// var car = function (loc){
	// var obj  = {loc: loc};
	// Object.assign(obj, Car.methods);
	// return obj;
};
// only withs with es6 compliant compilers, best to use a function callback instead


// The following example has the same replationship to the Car.prototype
// as our Car object function, so prototypes functions are essentially 
// unique objects that can be applied to any variable.
var Example = function (){
	// returns the values of Car.prototype, and attaches that object to the
	// Example variable
	return Object.create(Car.prototype);
}