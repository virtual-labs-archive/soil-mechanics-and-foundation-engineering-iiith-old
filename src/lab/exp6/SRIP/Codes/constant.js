var draw = SVG("animation").size(1300, 700)

var startButton = document.getElementById("start");


function experimentSetup(x) {
	
  if (x.matches) { // If media query matches
    draw.clear();


    alert("Please view the experiment in full desktop browser window!")
    var animation = document.getElementById("animation");
    animation.style.height = "10px";

    var startButton = document.getElementById("start");

    startButton.onclick = function () {

      alert("Please view the experiment in full desktop browser window!");


    }


  }
  else {

    draw.clear();
    var animation = document.getElementById("animation");
    animation.style.height = "450px";

    var startButton = document.getElementById("start");

    startButton.onclick = function () {

      toggleAnimation();

      setTimeout(function () {
        alert('Simulation Completed!');
        location.reload();
      }, 13500)


    }


	var lowerFilled = draw.polygon ([[530,540], [530,470],[590,470],[590,500],[770,500],[770,470],[830,470],[830,540]]).fill('#00B0EA').stroke ({
		width: 3
	})
	
	var tank = draw.polygon ([[590,500],[590,320],[770,320],[770,500]]).fill('saddlebrown').stroke ({
		width: 3
	})
   
	var upperFilled = draw.polygon ([[590,320],[590,280],[665,280],[665,120],[695,120],[695,280],[770,280],[770,320]]).fill('none').stroke({
		width: 3
	})
	
	var topTank = draw.polyline ([[605,50], [605,120],[800,120],[800,100],[750,100],[750,50]]).fill('#00B0EA').stroke ({ width: 3})
	
	var overthrow = draw.polygon([[720,50],[720,160],[750,160],[750,150],[730,150],[730,50]]).fill('#fff').stroke({width: 2})
	
	var lowerPartition1 = draw.line([[590,500],[590,540]]).stroke({
		width: 3,
		color: 'black'
	})
	
		var lowerPartition2 = draw.line([[770,500],[770,540]]).stroke({
		width: 3,
		color: 'black'
	})
		
		var lowerUnfilled1 = draw.polyline ([[530,470],[530,450],[590,450],[590,470]]).fill('none').stroke({width: 3})
		
		var lowerUnfilled2 = draw.polyline ([[770,470],[770,450],[830,450],[830,470]]).fill('none').stroke({width: 3})
	
			var upperTankVertical = draw.rect(27,170).fill('#00B0EA').attr ({
			x: 666,
			y: 120,
		})
			
			var measureJar = draw.rect(50,80).stroke({width: 3}).fill('none').attr ({
				x: 850,
				y: 500
			})
			
			//LABELS
			
	  	
	  	var text = draw.text('Overhead Tank')
		text.move(740,30).font({ fill: '#f06', family: 'Inconsolata', })
		
		var text = draw.text('Supply')
		text.move(760,80).font({ fill: '#f06', family: 'Inconsolata', })
	  
	  	var text = draw.text('Overflow')
		text.move(760,145).font({ fill: '#f06', family: 'Inconsolata', })
	  
	  	  	  var text = draw.text('h')
text.move(520,200).font({ fill: '#f06', family: 'Inconsolata' })
	  
	    var arrow5 = draw.line([[540,52],[540,450]]).stroke({width: 1})
		
		
		  	  	  var text = draw.text('L')
text.move(555,370).font({ fill: '#f06', family: 'Inconsolata' })
	  
	    var arrow5 = draw.line([[575,320],[575,450]]).stroke({width: 1})
		
		
		 	var text = draw.text('Bottom Tank')
		text.move(600,555).font({ fill: '#f06', family: 'Inconsolata', })
	  
	  var text = draw.text('Measuring Jar')
		text.move(910,555).font({ fill: '#f06', family: 'Inconsolata', })
  }
}
var x = window.matchMedia("(max-width: 100px)")
experimentSetup(x) // Call listener function at run time
x.addListener(experimentSetup) // Attach listener function on state changes

function toggleAnimation() {

var waterDrop1 = draw.ellipse(5,8).fill('#00B0EA').move(600,308)
		
		var waterDrop2 = draw.ellipse(5,8).fill('#00B0EA').move(620,308)
		
		var waterDrop3 = draw.ellipse(5,8).fill('#00B0EA').move(640,308)
		
		var waterDrop4 = draw.ellipse(5,8).fill('#00B0EA').move(660,308)
		
		var waterDrop5 = draw.ellipse(5,8).fill('#00B0EA').move(680,308)
		
		var waterDrop6 = draw.ellipse(5,8).fill('#00B0EA').move(700,308)
		
		var waterDrop7 = draw.ellipse(5,8).fill('#00B0EA').move(720,308)
		
		var waterDrop8 = draw.ellipse(5,8).fill('#00B0EA').move(740,308)
		
		var waterDrop9 = draw.ellipse(5,8).fill('#00B0EA').move(757,308)
		
		
		var waterDrops1 = draw.ellipse(5,8).fill('#00B0EA').move(600,308)
		
		var waterDrops2 = draw.ellipse(5,8).fill('#00B0EA').move(620,308)
		
		var waterDrops3 = draw.ellipse(5,8).fill('#00B0EA').move(640,308)
		
		var waterDrops4 = draw.ellipse(5,8).fill('#00B0EA').move(660,308)
		
		var waterDrops5 = draw.ellipse(5,8).fill('#00B0EA').move(680,308)
		
		var waterDrops6 = draw.ellipse(5,8).fill('#00B0EA').move(700,308)
		
		var waterDrops7 = draw.ellipse(5,8).fill('#00B0EA').move(720,308)
		
		var waterDrops8 = draw.ellipse(5,8).fill('#00B0EA').move(740,308)
		
		var waterDrops9 = draw.ellipse(5,8).fill('#00B0EA').move(757,308)
		
		
	
		
		
		var topTankUnfillingLeftSide = draw.rect(112,0.01).fill('#fff').attr ({
			x: 607,
			y: 50
		})
		
		
		var topTankUnfillingRightSide = draw.rect(17,0.01).fill('#fff').attr ({
			x: 732,
			y: 50
		})
		
		topTankUnfillingLeftSide.animate(13000,'',500).size(112,30)
	
		topTankUnfillingRightSide.animate(13000,'',500).size(17,30)
	
	
	$('#measure-jar')
    .animate({
      'height': 30
    }, 1000)
    .animate({
      'height': 70,
      'top': 684
    }, 14000)

	

		
	waterDrop1.animate(3000,'<',20).attr({fill: '#8B4513'}).move(600,490).loop(4)
	
	waterDrop2.animate(3000,'<',20).attr({fill: '#8B4513'}).move(620,490).loop(4)
	
	waterDrop3.animate(3000,'<',20).attr({fill: '#8B4513'}).move(640,490).loop(4)
	
	waterDrop4.animate(3000,'<',20).attr({fill: '#8B4513'}).move(660,490).loop(4)
	
	waterDrop5.animate(3000,'<',20).attr({fill: '#8B4513'}).move(680,490).loop(4)
	
	waterDrop6.animate(3000,'<',20).attr({fill: '#8B4513'}).move(700,490).loop(4)
	
	waterDrop7.animate(3000,'<',20).attr({fill: '#8B4513'}).move(720,490).loop(4)
	
	waterDrop8.animate(3000,'<',20).attr({fill: '#8B4513'}).move(740,490).loop(4)
	
	waterDrop9.animate(3000,'<',20).attr({fill: '#8B4513'}).move(757,490).loop(4)
	
	waterDrops1.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(600,490).loop(4)
	
	waterDrops2.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(620,490).loop(4)
	
	waterDrops3.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(640,490).loop(4)
	
	waterDrops4.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(660,490).loop(4)
	
	waterDrops5.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(680,490).loop(4)
	
	waterDrops6.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(700,490).loop(4)
	
	waterDrops7.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(720,490).loop(4)
	
	waterDrops8.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(740,490).loop(4)
	
	waterDrops9.animate(3000,'<',1500).attr({fill: '#8B4513'}).move(757,490).loop(4)
	
  startButton.onclick = function () {
    alert("The simulation is already running!")
  }

}


var resetButton = document.getElementById("reset");

resetButton.onclick = function () {
  location.reload();
}

var calcButton = document.getElementById("calc-button");

calcButton.onclick = function () {
  document.getElementById("myForm").scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

	
		

function calculate() {
  
}


resultButton = document.getElementById("result");

resultButton.onclick = function () {
  calculate();


}



