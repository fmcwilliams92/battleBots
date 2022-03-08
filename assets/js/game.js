var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once 
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Putin";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
  window.alert("Welcome to Robot Wars!");

  // prompt if the user wants to fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue!");
  console.log(promptFight);

  // if player chooses to fight, then fight
  if (promptFight === "FIGHT" || promptFight === "fight") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " +enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
      console.log(enemyName + " has died!");
    }
    else {
      window.alert(enemyName + " still alive " + enemyHealth + " health left.");
    }

    // remove players health by subtracting the enemy attack
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
      console.log(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    // if the player chooses to skip
  } else if (promptFight === "SKIP" || promptFight === "skip") {
    // ask the player if they want to quit
    var confirmSkip = window.confirm("Are you sure you want to quit?");

    // if yes, subtract 2 from playerMoney & create alert that lets the player know they are leaving the game
    if (confirmSkip) {
      window.alert(playerName + " has elected to skip the fight.");
      playerMoney = playerMoney - 2;
      console.log(playerName + " now has " + playerMoney + " dollars left over.");
    }
    else {
      fight();
    }

  } else {
    window.alert("You need to choose a valid option. Try again!")
  }
};

// this calls or "executes" the function
fight();