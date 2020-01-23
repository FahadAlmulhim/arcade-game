//all both Player and Enemy will have 2 parametars (x,y)
class Enemy {
    constructor(x, y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        //this to create rendom speed, the randowm value will be from 200 to 400
        this.speed = Math.floor(Math.random() * 200) + 400;
    }
    //by using this.speed will have random speed, source:https://www.w3schools.com/js/js_random.asp
    // this.speed multiply by the dt parameter,which will ensure the game runs at the same speed for all computers.(Udacity Comment)
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > 500) {
            this.x = -100;
        }
    }
    //bring the render and update function inside the class
    //Draw the enemy and player on the screen(Udacity function)
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

//there will be 3 enemy objects created
//then all enemy objects will pushed to allEnemies.
let allEnemies = [];
let bug1 = new Enemy(-90, 220);
let bug2 = new Enemy(-10, 130);
let bug3 = new Enemy(-200, 40);
allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //radius will be used to calculate the collision. pythagorean theorem
        this.radius = 80;
        //this code to show the player pic.(Udacity code)
        this.sprite = 'images/char-boy.png';
        //win will recored the win times
        this.win = 0;
        //lose will recored the lose times
        this.lose = 0;
    }
    //  this.sprite = 'images/char-cat-girl.png';
    update() {
        //Here the player will never go out the game;
        if (this.y > 400) {
            this.y = 400;
        }
        if (this.x > 290) {
            this.x = 380;
        }
        if (this.x < 20) {
            this.x = 20;
        }
        //calling collision() to check if there is any hit;
        collision();
    }
    render() {

        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        //using the Console.log inside the render() will give you the current x,y position in dev tool
       console.log(`Y value is ${this.y}`);
       console.log(`X value is ${this.x}`);

        //Here to show alert(you win), and return the player to start
        if (this.y < 40) {
            setTimeout(function() {
                alert("you win")
            }, 10);
            this.y = 400;
            this.x = 200;
            //this code to show how many times you win
            this.win += 1;
            let showWin = document.querySelector("h4");
            showWin.innerText = `win times: ${this.win}`;


        }

    }
    // after listens to the keys and send it to command value.
    //the command will go through if() to the right movemnt.
    handleInput(command) {
        console.log(command);
        if (command == "up") {
            this.y -= 90;
        }
          else if (command == "down") {
            this.y += 90;
        }
        else if (command == "right") {
            this.x += 90;
        }
        else if (command == "left") {
            this.x -= 90;
        }
    }

}
//create player object
let player = new Player(200, 400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
//(Udacity function)
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// this function to calculate the collision
function collision() {

    //the function use pythagorean theorem to calculate the collision, source: https://www.youtube.com/watch?v=XYzA_kPWyJ8
    function calculateHit(playerX, playerY, bugX, bugY) {
        let hight = bugX - playerX;
        let width = bugY - playerY;
        let result = Math.pow(hight, 2) + Math.pow(width, 2);
        return result;
    }
    //here will insert all bug X,Y objects
    let hitBug1 = calculateHit(player.x, player.y, bug1.x, bug1.y);
    let hitBug2 = calculateHit(player.x, player.y, bug2.x, bug2.y);
    let hitBug3 = calculateHit(player.x, player.y, bug3.x, bug3.y);

    let showLose = document.querySelector("h5");

    //if both objects player and bug neer to each other, will restart the game.
    if (hitBug1 < player.radius || hitBug2 < player.radius || hitBug3 < player.radius) {
        //here to return the player to start point
        player.x = 200;
        player.y = 400;
        // counting the lose times
        player.lose += 1;
        showLose.innerText = `lose times: ${player.lose}`;
    };


};
