var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log multiple values at once 
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Putin";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
  window.alert("Welcome to Robot Wars!");

  // subtract the value of "playerAttack" from "enemyHealth" and use the result to update the "enemyHealth"
  enemyHealth = enemyHealth - playerAttack;

  // log a message to the console so we know the command worked
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " +enemyHealth + " health remaining.");

  // subtract the value of the "enemyAttack" from the "playerHealth" and use the result to update the "playerHealth"
  playerHealth = playerHealth - enemyAttack;

  // log a message to the console so we know the command worked
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
};

// this calls or "executes" the function
fight();