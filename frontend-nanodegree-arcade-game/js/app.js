// shows enemy on screen
Object.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// reset function for player class
Object.prototype.reset = function() {
    Player.x = 200;
    Player.y = 400;
};
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // the x and y coordinates, and movement speed for game
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 200) + 100);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //resets enemy position if falls off screen
    if(this.x <=550){
        this.x += this.speed * dt;
    }else{
        this.x = -2;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};
//player position updated.
Player.prototype.update = function(){
    //movement for player (left)
    if(this.ctlKey === 'left' && this.x > 0){
        this.x = this.x - 50;
    //movement for player (right)
    }else if(this.ctlKey === 'right' && this.x != 400){
        this.x = this.x + 50;
        //movement forward (up)
    }else if(this.ctlKey === 'up'){
        this.y = this.y - 50;
        //movement back (down)
    }else if(this.ctlKey === 'down' && this.y != 400){
    this.y = this.y + 50;
    }
    this.ctlKey = null;
//collision detection
var PlayerX = this.x; 
var PlayerY = this.y; 
allEnemies.forEach(function(enemy) { 
    if (PlayerY >= enemy.y - 30 && PlayerY <= enemy.y + 30) {
     if (PlayerX >= enemy.x - 30 && PlayerX <= enemy.x + 30) {
      this.reset(); 
      alert("oh no, you creashed!"); 
      console.log("try again!");
  } 
} 
});
    //after making it to end, reset
    if(this.y < 25){
        console.log("congrats, you made it!");
        this.reset();
        alert("You made it!!!");
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//PLAYER handler
Player.prototype.handleInput = function (e){
    this.ctlKey = e;
};
// Instantiate enemies
var allEnemies = [];
(function setEnemies(){
    allEnemies.push(new Enemy(-2, 60));
    allEnemies.push(new Enemy(-2, 100));
    allEnemies.push(new Enemy(-2, 120));
    allEnemies.push(new Enemy(-2, 150));
    allEnemies.push(new Enemy(-2, 200));
}());
//create player
var Player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});
