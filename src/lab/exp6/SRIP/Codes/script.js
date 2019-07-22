var draw = SVG("animation").size(1300, 650)

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
      }, 7900)


    }

	//FROM HERE
    
  }
}
var x = window.matchMedia("(max-width: 1100px)")
experimentSetup(x) // Call listener function at run time
x.addListener(experimentSetup) // Attach listener function on state changes

function toggleAnimation() {

  //ANIMATION HERE

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



