var car = function (loc){
var obj  = {loc: loc};
obj.move = function(){
	removeCarFromScreen(obj.loc);
	addDustSwirlToScreen(obj.loc);
	obj.loc++;
	addCarToScreen(obj.loc);
};
return obj;
};