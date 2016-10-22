// re-written for pseudoclassical subclasses unit
var Car = function(loc){
	this.loc = loc;
};

Car.prototype.move = function(){
	this.loc++;
};

var Van = function(loc){
  Car.call(this, loc);
};
// call function explained

// this is the main function, the two arguments being variable a and variable b
var product = function(a,b){
	return a * b;
};

// this calls the product function, where the x varaible will be given the name a, since within the product function the first argument is a
var double = function(x){
	return product(x, 2);
};

double(3);

// call function explained second example
// changed the 'a' variable to 'num'
var product = function(num,b){
	return a * b;
};

// this calls the product function, where the num varaible will be given the name num, since within the product function the first argument is num.
// even though the argument in double is the same as the first argument in product, its treated as a separate variable entirely since its being initialized in a different scope
// the code behaves the same as if these two variables had different names, applying the value of the product argument 'num' to the double function's argument 'num'
var double = function(num){
	return product(num, 2);
};

double(3);

// call function explained third example - explains how the this parameter fits in. 

var product = function(num,b){
	return num * b;
};

// removed the num variable as a parameter, and replaced it with this in the return function. this effectively creates the argument for the double function to be whatever input the double function receives. in this case, 3. 
var double = function(){
	return product(this, 2);
};

// this assigns the value 3 to the this parameter of the double function, and the argument of the function. then this value is assigned to the first argument of the product variable, which is num. 
double.call(3);

// call function explained last example - explains how the this parameter fits in to the superclass.

//in this example, the parameter this is the first argument of the function product, which assigns the first argument's value of the function product to the this argument. 
var product = function(this,b){
	return this * b;
};

// assigns the value of doubles first argument to work the same as the product functions first argument by using call. since these parameters are called from two different scopes, they are different variables all together but share similar names.
// that means, that the value of the double function will be 3 x 2, since it grabs the properties of the product function and applies them to the double function. In other words, when the double function is returned after values have been
// entered, it will return the number 6. 
var double = function(){
	return product.call(this, 2);
};

// this assigns the value 3 to the this (or first) parameter of the double function, and the argument of the function. then this value is assigned to the first argument of the product variable, which is num. 
double.call(3);