// re-written for pseudoclassical sublcasses unit
var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab;
// this would currently log Car as a constructor, not Van. Although this isn't a problem now, it will be if we ever want to call to the Amy object by its constructor
console.log(amy.constructor);