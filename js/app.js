/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// This class create new instances of the game class and event listeners for the start button and on screen keyboard buttons.

let game = new Game();

game.startGame();

console.log(`Active phrase - phrase : ${game.activePhrase.phrase}`);