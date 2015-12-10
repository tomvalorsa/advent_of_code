var input = require('./input.js')
console.log(input)

var arr = input.split('')
var floor = 0

for(var i = 0; i < arr.length; i++) {
  if (arr[i] === '(') {
    floor += 1
  } else {
    floor -= 1
  }
}

console.log('Floor: ' + floor)