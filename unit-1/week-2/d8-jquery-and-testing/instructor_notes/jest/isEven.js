// given a number, determine if that number is even
function isEven(num, ...args) {

  if (typeof num !== 'number') return 'Stop trolling'

  if (args.length !== 0) return 'Stop trolling'

  return num % 2 == 0;
}

console.log(isEven('matthew is awesome!'))

module.exports = isEven;