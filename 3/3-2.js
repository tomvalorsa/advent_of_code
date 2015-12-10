var directions = require('./input.js').split('')
var houses = []
houses.push([0, 0]) // starting location
var santaLocation = [0, 0]
var roboSantaLocation = [0, 0]


directions.forEach(function(dir, i) {
  var activeSanta = i % 2 === 0 ? 'santa' : 'roboSanta'

  var x, y
  if (activeSanta === 'santa') {
    x = santaLocation[0]
    y = santaLocation[1]
  } else {
    x = roboSantaLocation[0]
    y = roboSantaLocation[1]
  }

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

  if (activeSanta === 'santa') {
    santaLocation = [x, y]
    houses.push(santaLocation)
  } else {
    roboSantaLocation = [x, y]
    houses.push(roboSantaLocation)
  }
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