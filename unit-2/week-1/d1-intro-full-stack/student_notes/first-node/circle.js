//more efficient way so you dont have to keep writing the module.exports before every function
module.exports = {
    area,
    circumference
}

// //faster to write this way as a local

// module.exports.area = function (radius) {
//    return (radius * radius * Math.PI)
// }

// module.exports.circumference = function (radius) {
//     return (2 * radius * Math.PI)
// }
// // Two ways to write this

// module.exports = area

function area (radius) {
    return (radius * radius * Math.PI)
}

// module.exports = circumference

function circumference (radius) {
     return (2 * radius * Math.PI)
 }
 
