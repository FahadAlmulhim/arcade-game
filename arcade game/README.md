# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions


Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
# Classic Arcade Game Clone Project



### Instructions
- How to play: Use your arrow keyboards to move the player, when the bug hit you, the game will restart, if you reach the sea you win.
- you will find in the top of the page the time you win and lose.

### installation
- simply open the index.html file on browser.

### Dependencies
- collision  : https://www.youtube.com/watch?v=XYzA_kPWyJ8

# javaScript
#####collision
```javascript
function calculateHit(playerX,playerY,bugX,bugY){
  let hight = bugX-playerX;
  let width = bugY-playerY;
  let result = Math.pow(hight,2) + Math.pow(width,2);
  return result;
}



```
- this method is calculate the pythagorean theorem for the palyer and bug object
- by using the result value, we can make the collision.
- Source: https://www.youtube.com/watch?v=XYzA_kPWyJ8



## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
