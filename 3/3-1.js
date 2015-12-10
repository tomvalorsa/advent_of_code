var directions = require('./input.js').split('')
var houses = []
houses.push([0, 0]) // starting location
var currentLocation = [0, 0]

directions.forEach(function(dir) {
  var x = currentLocation[0],
    y = currentLocation[1]

  switch(dir) {
    case '>':
      x += 1
      break
    case '<':
      x -= 1
      break
    case 'v':
      y -= 1
      break
    case '^':
      y += 1
      break
    default:
      console.log('you ruined christmas')
      break
  }

  currentLocation = [x, y]
  houses.push(currentLocation)
})

console.log(houses.length)

// remove duplicates
var houseRef = {}
var out = []
houses.forEach(function(houseCoords) {
  var key = houseCoords.join('|')
  if (!houseRef[key]){
    out.push(houseCoords)
    houseRef[key] = true
  }
})

console.log(out.length)