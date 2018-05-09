'use strict'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remainingGuesses')
let game1
// = new Hangman('Tomato Sauce', 3)

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('3')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle ('3').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })