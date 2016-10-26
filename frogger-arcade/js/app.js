/*==========================

Speed

===========================*/

var velocity = Math.floor(Math.random() * ( 5 ) + 1);

/*==========================

Enemies our player must avoid

===========================*/

var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
 
    // sets the arguments of the Enemy function.
    this.x = x;
    this.y = y;

    //sets the speed of the enemy function
    this.speed = speed * velocity;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Enemy-bug.png';

};

// Update the Enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the Enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

/*==========================

this is the player function

===========================*/

var playerObject = function (){

    // this is the player sprite
    this.sprite = 'images/player-boy.png';
};

// this creates the player update method
playerObject.prototype.update = function (dt){};

// this creates the player render method
playerObject.prototype.render = function (x, y){
    Object.create(Enemy.prototype.render);
};

// this creates the player handle method
playerObject.prototype.handleInput = function(){
    this.handleInput;
};

// Now instantiate your objects.
// Place all Enemy objects in an array called allEnemies

/*==============

enemies objects

===============*/

allEnemies = [
    new Enemy(-100,1,3),
    new Enemy(100,2,2),
    new Enemy(-300,3,5),
];

// Place the player object in a variable called player

/*==============

player object

===============*/

player = new playerObject;
player.render(5,10);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
