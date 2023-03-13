// circle.js
function area(radius) {
  console.log('area function working!')
  const result = (radius * radius) * Math.PI
  return Number(result.toFixed(2));
}

function circumference(radius) {
  console.log('circumference function working');
  const result = radius * 2 * Math.PI
  return Number(result.toFixed(2))
}

module.exports = {
  area,
  circumference
}

// console.log(module);