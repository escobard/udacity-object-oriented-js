// adding the new constructor to each of these instances of the Car object allows for the automatic addition of the Car.prototypes function
// to each of instance of the object, and returns the objects value after the constructur function is ran
var amy = new Car(1);
amy.move();
var ben = new Car(9);
ban.move();
var cal = new Car(2);
cal.move();
// the prototype.constructor property essentially mirrors the value of its parent object
// for example refer to below:
console.log(Car.prototype.constructor);
// the above callback would duplicate the EXACT calues of the Car variable.

// another example is:
console.log(amy.constructor);
// this calls the Car variable, since Car is the constructor of the Amy variable

// the following looks for the .prototype object of the right argument in the left
// arguments prototype chain.
console.log(amy instanceof Car);

// another example below
var Dog = function (){
	return {legs: 4, bark:alert};
};

var fido = Dog();

log(fido instanceof Dog);
// this would return a false value, since the Dog object does not have a Dog.prototype property