var measurements = require('./input.js')
var total = 0

for (var i = 0; i < measurements.length; i++) {
  var dimensions = measurements[i].split('x')
  dimensions = dimensions.map(function(d) {return parseInt(d)})
  var l = dimensions[0]
  var w = dimensions[1]
  var h = dimensions[2]
  var bow = l * w * h

  var largestIndex = dimensions.indexOf(Math.max.apply(null, dimensions))
  dimensions.splice(largestIndex, 1)
  shortestDistance = (dimensions[0] * 2) + (dimensions[1] * 2)


  total += bow
  total += shortestDistance
}


console.log(total)