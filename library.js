var carLike = function (obj, loc){
obj.loc = loc;
obj.move = function(){
	removeCarFromScreen(this.loc);
	addDustSwirlToScreen(this.loc);
	this.loc++;
	addCarToScreen(this.loc);
};
return obj;
};