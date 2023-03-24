// given a number, determine if that number is even
function isEven(num) {
   if (typeof num !== 'number')
   return "stop trolling"
   if (arguments.length !== 0)
   return "stop trolling"
    return num % 2 == 0;
  }


module.exports = isEven;