'use strict'

const puzzleEl = document.querySelector('#puzzle')
const remainingGuessesEl = document.querySelector('#remaining-guesses')
const game1 = new Hangman('tomato', 5)

puzzleEl.textContent = game1.getPuzzle()
remainingGuessesEl.textContent = `You have ${game1.remainingGuesses} guesses left`
// console.log(game1.status)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    remainingGuessesEl.textContent = `You have ${game1.remainingGuesses} guesses left`
    console.log(game1.status)
})