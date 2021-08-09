# Tinctured

Tinctured is a simple helper to add colors to console log statements in nodejs and electron.

## Installation

Use npm to install tinctured:

```bash
npm install tinctured
```

## Usage

```nodejs
const { tinctured, options: { red, white, blue, green, underscore, bgMagenta, reverse, blink, bright } } = require('tinctured')


let message = 'Testing:'
message += ` ${tinctured("blue & big magenta", { blue, bgMagenta })}`
message += `, ${tinctured("red & underscored", { red, underscore })}`
message += `, ${tinctured("reverse", { reverse })}`
message += `, ${tinctured("just green", { green })}`
message += `, ${tinctured("green & bright", { green, bright })}`

console.log(message)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)