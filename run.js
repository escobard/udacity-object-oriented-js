var amy = Car(1);
amy.move();
var ben = Car(9);
ban.move();

// the prototype.constructor property essentially mirrors the value of its parent object
// for example refer to below:
console.log(Car.prototype.constructor);
// the above callback would duplicate the EXACT calues of the Car variable.
// another example is:
console.log(amy.constructor);
// this calls the Car variable, since Car is the constructor of the Amy variable
