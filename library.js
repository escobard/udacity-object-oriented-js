// re-written for pseudoclassical subclasses unit
var Car = function() {
	var obj = {loc: loc};
	obj.move = function (){
		obj.loc++
	}
	return obj;
};

var Van = function (loc){
	var obj = Car(loc);
	obj.grab = function {}
	return obj;
};

var Cop = function (loc){
	var obj = Car(log);
	obj.call = function (){};
	return obj;
};