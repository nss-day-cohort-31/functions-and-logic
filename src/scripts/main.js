// A named function definition

// function displayName (firstName, lastName) {
//   /*
//     Since the code needed to display a person's name is written
//     only once, we never have to worry about a developer
//     misspelling a word, or missing a character because she
//     needed to write the code for the 34th time.
//   */
//   return `${firstName} ${lastName}`
// }

// Function definition using ES6 fat arrow syntax

// const displayName = (firstName, lastName) => {
//   return firstName + " " + lastName
// }

// ES6 fat arrow, single line function. This means I don't need to explicitly have a return statement. Whatever the single line in the function evaluates to is implicitly returned.

const displayName = (firstName, lastName) => firstName + " " + lastName

// displayName("Jamal", "Haynes")
// displayName("Debra", "Gordon")
// displayName("Svetlana", "Irinov")
// displayName("Sequina", "Rodriguez")
let fullName = displayName("Jessawynne", "Parker")
console.log(fullName)


const bugSquasher = (bug, squasher) => {
  return `The ${bug} was squashed by a ${squasher}`
}

// const bugSquasher = (bug, squasher) => `The ${bug} was squashed by a ${squasher}`

console.log(bugSquasher("Beetle", "Boot"))
console.log(bugSquasher("Beetle", "Boot"))

// An anonymous function being assigned to a variable

const noise = function () {
  return Math.random()
}

console.log(noise())
console.log(noise())


const multiplier = (num1, num2, num3) => {
  console.log(`Arguments: ${num1}, ${num2}, ${num3}`)
  let product = num1 * num2 * num3
  // debugger
  return product
  // The return needs to be the last line in a function. Any code after the return will not execute.
  console.log("Function is done executing")
}

let multipliedValue = multiplier(2,2,2)
console.log(multipliedValue)
