//import { options as possibleOptions, optionValues } from './options.js'
const optionsStuff = require('./options')
const { options: possibleOptions, optionValues } = optionsStuff

function tinctured(text, selectedOptionsObject) {
  let result = text

  for (const key in selectedOptionsObject) {
    if (selectedOptionsObject.hasOwnProperty(key)) {
      if(possibleOptions.hasOwnProperty(key) && selectedOptionsObject[key] === key) {
        result = `${optionValues[key]}${result}${optionValues[possibleOptions.reset]}`
      }
      else { console.log(`Tinctured ERROR: The following invalid key-value pair was passed: ${key}: "${selectedOptionsObject[key]}"`)}
    }
  }

  return result
}

module.exports.tinctured = tinctured
module.exports.options = possibleOptions