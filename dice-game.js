function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() *6) + 1;
        alert("You rolled a " + roll + ".");
        
    if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }
        if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;
            alert ("You have lost a coin.\n\nYou now have " + goldCoins + " gold coins.");
        }
        if (roll < 5)  {
            continue;
        }
        goldCoins += roll;
        alert ("Congratulations, you win " + roll + " gold coins!\n\nYou have " + goldCoins + " gold coins!");
        
    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}