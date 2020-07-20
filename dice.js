// Dice Roll

// Event Listener
document.getElementById("rollDice").addEventListener("click", rollDice);

// Event Function
function rollDice(){
    let dice = Math.randomInt(1, 7);

    if(dice == 1){
        displayDice("One");
    } else if(dice == 2){
        displayDice("Two");
    } else if(dice == 3){
        displayDice("Three");
    } else if(dice == 4){
        displayDice("Four");
    } else if(dice == 5){
        displayDice("Five");
    } else if(dice == 6){
        displayDice("Six");
    }

    console.log(dice);
}

function displayDice(number){
    document.getElementById("diceImg").src = "images/dice/dice" + number + ".png";
}