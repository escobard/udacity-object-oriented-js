var move = function(car){
	removeCarFromScreen(car.loc);
	addDustSwirlToScreen(car.loc);
	car.loc++;
	addCarToScreen(car.loc);
};