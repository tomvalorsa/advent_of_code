var measurements = require('./input.js')
var total = 0

for (var i = 0; i < measurements.length; i++) {
  var dimensions = measurements[i].split('x')
  dimensions = dimensions.map(function(d) {return parseInt(d)})
  var l = dimensions[0]
  var w = dimensions[1]
  var h = dimensions[2]
  var surfaceArea = (2*l*w) + (2*w*h) + (2*h*l)

  var largestIndex = dimensions.indexOf(Math.max.apply(null, dimensions))
  dimensions.splice(largestIndex, 1)
  var smallestSide = dimensions[0] * dimensions[1]

  total += surfaceArea
  total += smallestSide
}


console.log(total)