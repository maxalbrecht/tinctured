const options = {
  reset: "reset",
  bright: "bright",
  dim: "dim",
  underscore: "underscore",
  blink: "blink",
  reverse: "reverse",
  hidden: "hidden",

  black: "black",
  red: "red",
  green: "green",
  yellow: "yellow",
  blue: "blue",
  magenta: "magenta",
  cyan: "cyan",
  white: "white",

  bgBlack: "bgBlack",
  bgRed: "bgRed",
  bgGreen: "bgGreen",
  bgYellow: "bgYellow",
  bgBlue: "bgBlue",
  bgMagenta: "bgMagenta",
  bgCyan: "bgCyan",
  bgWhite: "bgWhite",
}

const optionValues = {
  [options.reset]: '\x1b[0m',
  [options.bright]: '\x1b[1m',
  [options.dim]: '\x1b[2m',
  [options.underscore]: '\x1b[4m',
  [options.blink]: '\x1b[5m',
  [options.reverse]: '\x1b[7m',
  [options.hidden]: '\x1b[8m',

  [options.black]: '\x1b[30m',
  [options.red]: '\x1b[31m',
  [options.green]: '\x1b[32m',
  [options.yellow]: '\x1b[33m',
  [options.blue]: '\x1b[34m',
  [options.magenta]: '\x1b[35m',
  [options.cyan]: '\x1b[36m',
  [options.white]: '\x1b[37m',

  [options.bgBlack]: '\x1b[40m',
  [options.bgRed]: '\x1b[41m',
  [options.bgGreen]: '\x1b[42m',
  [options.bgYellow]: '\x1b[43m',
  [options.bgBlue]: '\x1b[44m',
  [options.bgMagenta]: '\x1b[45m',
  [options.bgCyan]: '\x1b[46m',
  [options.bgWhite]: '\x1b[47m'
}

exports.options = options
exports.optionValues = optionValues
