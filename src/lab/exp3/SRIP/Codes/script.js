

var draw = SVG("animation").size(1300, 500)


function myFunction(x) {
  if (x.matches) { // If media query matches
	  draw.clear();
	  alert("Please view the experiment in full desktop browser window!")
	  

 
  } else {
	  
 draw.clear();

	var tableTop1 = draw.rect(200,50).attr ({
		'fill': 'gray',
		x: 100,
		y: 275
	});
	  
	 var tableTop2 = draw.rect(200,50).attr ({
		'fill': 'gray',
		x: 400,
		y: 275
	});
	  
	   var tableTop3 = draw.rect(200,50).attr ({
		'fill': 'gray',
		x: 700,
		y: 275
	}); 
	  
	   var tableTop4 = draw.rect(200,50).attr ({
		'fill': 'gray',
		x: 1000,
		y: 275
	}); 
	  
	 var tableBottom1 = draw.polygon([[100, 325], [300, 325],[350, 350],[50,350]]).fill('black').stroke();
	  	 var tableBottom2 = draw.polygon([[400, 325], [600, 325],[650, 350],[350,350]]).fill('black').stroke();
	   var tableBottom3 = draw.polygon([[700, 325], [900, 325],[950, 350],[650,350]]).fill('black').stroke();
	  	   var tableBottom3 = draw.polygon([[1000, 325], [1200, 325],[1250, 350],[950,350]]).fill('black').stroke();
	  
 // var beaker1 = draw.polygon([[160,275],[160,125],[230,125],[230,275]]).fill('none').stroke({ width: 2});
	  
	  var beaker1 = draw.rect(70,150).radius(40,20).attr({
		  x: 160,
		  y: 125,
		  'stroke': 'black',
		  'stroke-width': 2.5,
		  'fill': 'none',
		  
	  });
	  
	   var beaker2 = draw.rect(70,150).radius(40,20).attr({
		  x: 460,
		  y: 125,
		  'stroke': 'black',
		  'stroke-width': 2.5,
		  'fill': 'none',
		  
	  });
	  
	   var beaker3 = draw.rect(70,150).radius(40,20).attr({
		  x: 760,
		  y: 125,
		  'stroke': 'black',
		  'stroke-width': 2.5,
		  'fill': 'none',
		  
	  });
	  
	  
	   var beaker4 = draw.rect(70,150).radius(40,20).attr({
		  x: 1060,
		  y: 125,
		  'stroke': 'black',
		  'stroke-width': 2.5,
		  'fill': 'none',
		  
	  });
	
 
  }
}

var x = window.matchMedia("(max-width: 1100px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



function toggle() {


  // HORIZONTAL WATER ANIMATIONS USING SVG.JS

  var incomingPipeHorizontal = DRAW.rect(1, 18).attr({
    'fill': '#00B0EA',
    x: 151,
    y: 151
  });

  incomingPipeHorizontal.animate().size(148, 18);

  var incomingPipeVertical = DRAW.rect(18, 0.01).attr({
    'fill': '#00B0EA',
    x: 281,
    y: 168
  });

  incomingPipeVertical.animate({
    delay: '1s'
  }).size(18, 280);

  var ductRect = DRAW.rect(0.01, 23).attr({
    x: 401,
    y: 381,
    'fill': '#00B0EA'
  });

  ductRect.animate(4600, '', 2500).size(307, 23)

  ductTriangle1 = DRAW.polygon([
    [401, 404],
    [401, 433],
    [401.1, 401]
  ]).attr({
    'fill': '#00B0EA'
  });

  ductTriangle1.animate(1000, '', 2500).size(70, 21.5);

  ductTriangle2 = DRAW.polygon([
    [650.5, 401],
    [652.1, 400],
    [652.1, 406.5]
  ]).attr({
    'fill': '#00B0EA'
  });

  ductTriangle2.animate(920, '', 6210).size(57.8, 23.3);


  var outgoingPipeHorizontal = DRAW.rect(0.01, 18).attr({
    'fill': '#00B0EA',
    x: 891,
    y: 391
  });

  outgoingPipeHorizontal.animate({
    delay: '7.6s'
  }).size(108, 18);

  var outgoingPipeVertical = DRAW.rect(18, 0.01).attr({
    'fill': '#00B0EA',
    x: 981,
    y: 409
  });

  outgoingPipeVertical.animate({
    delay: '8.6s'
  }).size(18, 139);
}