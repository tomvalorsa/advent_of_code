var MD5 = require('./md5.js')

// N.B. change to .slice(0, 5) === '00000' for 4-1, currently running 4-2
// MD5 from Codepen dude on CSS Tricks

var i = 0

var isCorrect = function(num) {
  var string = 'ckczppom' + num
  var hash = MD5(string)

  return hash.slice(0, 6) === '000000'
}

while (!isCorrect(i)) {
  i++
}

console.log(i)
