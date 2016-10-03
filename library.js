var carLike = function (obj, loc){
obj.loc = loc;
obj.move
return obj;
};

// using this to select the object the function is referring to.
var move = function(car){
	removeCarFromScreen(car.loc);
	addDustSwirlToScreen(car.loc);
	car.loc++;
	addCarToScreen(car.loc);
};