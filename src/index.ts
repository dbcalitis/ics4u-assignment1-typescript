/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constants
const ROCK = 1
const PAPER = 2
const SCISSORS = 3

// String constants
const WIN = 'You win!'
const LOSE = 'You lose!'
const TIE = "It's a tie"

console.log('Rock Paper Scissors!')
console.log('(Rock = 1, Paper = 2, Scissor = 3)')

// Input move
const userMove = prompt('Enter a number: ')
const userMoveInt = parseInt(userMove)

// Computer move
// Chooses a move (a number between 1 and 3, inclusive)
const computerMove = Math.floor(Math.random() * (SCISSORS - ROCK) + ROCK)

// This determines if the user wins or not.
switch (userMoveInt) {
  case ROCK:
    console.log('User: Rock')
    switch (computerMove) {
      case ROCK:
        console.log('Computer: Rock')
        console.log(TIE)
        break
      case PAPER:
        console.log('Computer: Paper')
        console.log(LOSE)
        break
      case SCISSORS:
        console.log('Computer: Scissors')
        console.log(WIN)
        break
    }
    break
  case PAPER:
    console.log('User: Paper')
    switch (computerMove) {
      case ROCK:
        console.log('Computer: Rock')
        console.log(WIN)
        break
      case PAPER:
        console.log('Computer: Paper')
        console.log(TIE)
        break
      case SCISSORS:
        console.log('Computer: Scissors')
        console.log(LOSE)
        break
    }
    break
  case SCISSORS:
    console.log('User: Scissors')
    switch (computerMove) {
      case ROCK:
        console.log('Computer: Rock')
        console.log(LOSE)
        break
      case PAPER:
        console.log('Computer: Paper')
        console.log(WIN)
        break
      case SCISSORS:
        console.log('Computer: Scissors')
        console.log(TIE)
        break
    }
    break
  default:
    console.log('Invalid Input.')
}

console.log('\nDone.')
