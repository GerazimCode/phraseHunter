/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// This class create new instances of the game class and event listeners for the start button and on screen keyboard buttons.

let logPhrase = (phrase) => {
    console.log(`phrase - phrase:`, phrase.phrase);
}

let game = new Game();

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
