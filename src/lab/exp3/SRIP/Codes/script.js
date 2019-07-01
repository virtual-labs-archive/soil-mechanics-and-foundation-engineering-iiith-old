

var draw = SVG("animation").size(1000, 500)


function myFunction(x) {
  if (x.matches) { // If media query matches
	  
draw.clear();
  var tankLeft = draw.polyline([
    [200, 200],
    [220, 220],
    [220, 450],
    [400, 450],
    [400, 220],
    [420, 200]
  ]).fill('none').stroke({
    width: 3,
  });
	
  } else {
	  
 draw.clear();
  var tankLeft = draw.polyline([
    [100, 100],
    [220, 220],
    [220, 450],
    [400, 450],
    [400, 220],
    [420, 200]
  ]).fill('none').stroke({
    width: 3,
  });
	  
	  var paddleWidth = 20, paddleHeight = 100

// create and position left paddle
var paddleLeft = draw.rect(paddleWidth, paddleHeight)

paddleLeft.x(0).cy(height/2).fill('#00ff99')

// create and position right paddle
var paddleRight = paddleLeft.clone()

paddleRight.x(width-paddleWidth).fill('#ff0066')
	  
	  var playerLeft = playerRight = 0

// create text for the score, set font properties
var scoreLeft = draw.text(playerLeft+'').font({
  size: 32,
	
  family: 'Menlo, sans-serif',
  anchor: 'end',
	
  fill: '#fff'
}).move(width/2-10, 10)

// cloning rocks!
var scoreRight = scoreLeft.clone()

  .text(playerRight+'')

  .font('anchor', 'start')
  .x(width/2+10)
	  
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes