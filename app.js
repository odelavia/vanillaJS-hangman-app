'use strict'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remainingGuesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

//setup so that puzzle, guesses remaining, and reset button dont show on initial loading
//setup how many words youd like to have in phrase
//setup how many guesses youd like to have in phrase
//setup how button to go back to that initial screen.
// title should always show.
//delete spaces in app and seperate words responsively