'use strict'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remainingGuesses')
const game1 = new Hangman('Tomato', 3)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})