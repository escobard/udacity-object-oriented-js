// re-written for pseudoclassical subclasses unit
// refer to the below examples to show how this works in this specific context.
var Car = function(loc){
	this.loc = loc;
};


Car.prototype.move = function(){
	this.loc++;
};

// due to how the call function works, the van subclass of the car superclass gets the object property .loc added to them, due to the inheritance from the car object. When a new van object is created, it attaches the loc property to the van object
// since van is sharing the properties of the car object, due to the call method. 
var Van = function(loc){
  Car.call(this, loc);
};

// if we want Van.prototype to be an object that delegates to Car.prototype, we create the delegation by using the Object.create function, which creates a new object for Van.prototype, with the properties of the Car.prototype object. 
//Object.create runs 
Van.prototype = Object.create(Car.prototype);

// Set the Van prototype constructor to Van, so that the constructor feature properly points to Van when a new Van object is called.

Van.prototype.constructor = Van();

// Van properties inclusive to Van only below
Van.prototype.grab = function (){};
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

// this assigns the value 3 to the this (or first) parameter of the double function, and the argument of the function. then this value is assigned to the first argument of the product variable, which is also this. the confusing part is the this
// parameter within both functions. However since this is called from two differnt scopes, it ONLY applies to the function that is invoking it. in double, the this parameter is referring to the argument of the double function. in product, this
// is referring to the first argument in the product function. in the double function, product.call is simply applying the properties of the product function to the arguments of the double function, thus making the double function reliant
// on the product function, creating the double function as a subclass of the product function.  
double.call(3);

// other options that can be used, but arent recommended because they take up too much mem
Van.prototype = new Car(); // creates a new object every time the Van is instanced, which takes up too much memory. 
//Also, no way to pass in arguments in the van object this way, as they would all be declared as undefined. only because of the Car function's this parameter is this undefined
// if instead we used an actual variable for the argument instead of this, this would actually work just fine. The only problem, is that this creates too many objects, 1 for 
// van prototype, 1 for car prototype and 1 for car, per van instance.