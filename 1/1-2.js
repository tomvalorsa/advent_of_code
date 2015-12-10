var input = require('./input.js')

var arr = input.split('')
var floor = 0
var position

for(var i = 0; i < arr.length; i++) {
  if (arr[i] === '(') {
    floor += 1
  } else {
    floor -= 1
  }
  if (floor === -1) {
    position = i + 1
    break
  }
}

console.log(position)