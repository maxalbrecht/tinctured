// FIRST WAY TO DECONSTRUCT WHAT YOU NEED
//const tincturedModule = require('tinctured')
//const { tinctured, options } = tincturedModule
//const { red, white, blue, underscore, bgMagenta } = options

// SECOND WAY
const { tinctured, options: { red, white, blue, green, underscore, bgMagenta, reverse, blink, bright } } = require('tinctured')


let message = 'Testing:'
message += ` ${tinctured("blue & big magenta", { blue, bgMagenta })}`
message += `, ${tinctured("red & underscored", { red, underscore })}`
message += `, ${tinctured("reverse", { reverse })}`
message += `, ${tinctured("just green", { green })}`
message += `, ${tinctured("green & bright", { green, bright })}`

console.log(message)