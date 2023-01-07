/**
 * This is programm
 *
 * By: Igor
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

//process
function binarySearch(
  userArray: number[],
  userNumber: number,
  low: number,
  high: number
): number {
  if (low > high) {
    return -1
  }
  const middle = Math.floor((low + high) / 2)
  if (userArray[middle] === userNumber) {
    return middle
  }
  if (userArray[middle] > userNumber) {
    return binarySearch(userArray, userNumber, low, middle - 1)
  } else {
    return binarySearch(userArray, userNumber, middle + 1, high)
  }
}

const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumberArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  randomNumberArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumberArray.sort(function (a, b) {
  return a - b
})

// Input
console.log('Binary Search Program')

console.log('Sorted list of numbers: ')

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  process.stdout.write(`${String(randomNumberArray[counter])}, `)
}

console.log('\n')

const numInput = Number(
  prompt(
    'What number are you searching for in the array (integer between 0 and 999): '
  )
)

// Process and Output
console.log(
  `Your number is in index: ${binarySearch(
    randomNumberArray,
    numInput,
    0,
    ARRAY_SIZE - 1
  )}`
)

console.log('\nDone.')
