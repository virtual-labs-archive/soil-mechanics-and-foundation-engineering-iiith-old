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


  } else {

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


    var lowerFilled = draw.polygon([
      [530, 540],
      [530, 470],
      [590, 470],
      [590, 500],
      [770, 500],
      [770, 470],
      [830, 470],
      [830, 540]
    ]).fill('#00B0EA').stroke({
      width: 3
    })

    var tank = draw.polygon([
      [590, 500],
      [590, 320],
      [770, 320],
      [770, 500]
    ]).fill('saddlebrown').stroke({
      width: 3
    })

    var upperFilled = draw.polygon([
      [590, 320],
      [590, 280],
      [665, 280],
      [665, 70],
      [695, 70],
      [695, 280],
      [770, 280],
      [770, 320]
    ]).fill('none').stroke({
      width: 3
    })

    var lowerPartition1 = draw.line([
      [590, 500],
      [590, 540]
    ]).stroke({
      width: 3,
      color: 'black'
    })

    var lowerPartition2 = draw.line([
      [770, 500],
      [770, 540]
    ]).stroke({
      width: 3,
      color: 'black'
    })

    var lowerUnfilled1 = draw.polyline([
      [530, 470],
      [530, 450],
      [590, 450],
      [590, 470]
    ]).fill('none').stroke({
      width: 3
    })

    var lowerUnfilled2 = draw.polyline([
      [770, 470],
      [770, 450],
      [830, 450],
      [830, 470]
    ]).fill('none').stroke({
      width: 3
    })

    var upperTankVertical = draw.rect(27, 170).fill('#00B0EA').attr({
      x: 666,
      y: 120,
    })

    //LABELS


    var arrow1 = draw.line([
      [695, 230],
      [730, 230]
    ]).stroke({
      width: 1
    })

    var text = draw.text('Stand Pipe')
    text.move(740, 220).font({
      fill: '#f06',
      family: 'Inconsolata'
    })

    var arrow2 = draw.line([
      [665, 122],
      [540, 122]
    ]).stroke({
      width: 1
    })


    var text = draw.text('Time t1')
    text.move(580, 100).font({
      fill: '#f06',
      family: 'Inconsolata'
    })

    var arrow3 = draw.line([
      [665, 220],
      [570, 220]
    ]).stroke({
      width: 1
    })

    var text = draw.text('Time t2')
    text.move(600, 200).font({
      fill: '#f06',
      family: 'Inconsolata'
    })

    var arrow4 = draw.line([
      [540, 122],
      [540, 450]
    ]).stroke({
      width: 1
    })

    var text = draw.text('h1')
    text.move(510, 300).font({
      fill: '#f06',
      family: 'Inconsolata'
    })

    var arrow5 = draw.line([
      [570, 220],
      [570, 450]
    ]).stroke({
      width: 1
    })

    var text = draw.text('h2')
    text.move(550, 300).font({
      fill: '#f06',
      family: 'Inconsolata'
    })

    var arrow6 = draw.line([
      [810, 450],
      [810, 150]
    ]).stroke({
      width: 1
    })

    var text = draw.text('h')
    text.move(820, 300).font({
      fill: '#f06',
      family: 'Inconsolata'
    })

    var arrow7 = draw.line([
      [710, 150],
      [810, 150]
    ]).stroke({
      width: 1
    })

    var arrow8 = draw.line([
      [710, 140],
      [810, 140]
    ]).stroke({
      width: 1
    })

    var text = draw.text('dh')
    text.move(815, 135).font({
      fill: '#f06',
      family: 'Inconsolata'
    })


  }
}
var x = window.matchMedia("(max-width: 1100px)")
experimentSetup(x) // Call listener function at run time
x.addListener(experimentSetup) // Attach listener function on state changes

function toggleAnimation() {

  var waterDrop1 = draw.ellipse(5, 8).fill('#00B0EA').move(600, 308)

  var waterDrop2 = draw.ellipse(5, 8).fill('#00B0EA').move(620, 308)

  var waterDrop3 = draw.ellipse(5, 8).fill('#00B0EA').move(640, 308)

  var waterDrop4 = draw.ellipse(5, 8).fill('#00B0EA').move(660, 308)

  var waterDrop5 = draw.ellipse(5, 8).fill('#00B0EA').move(680, 308)

  var waterDrop6 = draw.ellipse(5, 8).fill('#00B0EA').move(700, 308)

  var waterDrop7 = draw.ellipse(5, 8).fill('#00B0EA').move(720, 308)

  var waterDrop8 = draw.ellipse(5, 8).fill('#00B0EA').move(740, 308)

  var waterDrop9 = draw.ellipse(5, 8).fill('#00B0EA').move(757, 308)


  var waterDrops1 = draw.ellipse(5, 8).fill('#00B0EA').move(600, 308)

  var waterDrops2 = draw.ellipse(5, 8).fill('#00B0EA').move(620, 308)

  var waterDrops3 = draw.ellipse(5, 8).fill('#00B0EA').move(640, 308)

  var waterDrops4 = draw.ellipse(5, 8).fill('#00B0EA').move(660, 308)

  var waterDrops5 = draw.ellipse(5, 8).fill('#00B0EA').move(680, 308)

  var waterDrops6 = draw.ellipse(5, 8).fill('#00B0EA').move(700, 308)

  var waterDrops7 = draw.ellipse(5, 8).fill('#00B0EA').move(720, 308)

  var waterDrops8 = draw.ellipse(5, 8).fill('#00B0EA').move(740, 308)

  var waterDrops9 = draw.ellipse(5, 8).fill('#00B0EA').move(757, 308)


  var upperTankVerticalUnfilling = draw.rect(26, 0.01).fill('#fff').attr({
    x: 667,
    y: 120
  })

  upperTankVerticalUnfilling.animate(12000, '', 500).size(26, 100)


  waterDrop1.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(600, 490).loop(4)

  waterDrop2.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(620, 490).loop(4)

  waterDrop3.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(640, 490).loop(4)

  waterDrop4.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(660, 490).loop(4)

  waterDrop5.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(680, 490).loop(4)

  waterDrop6.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(700, 490).loop(4)

  waterDrop7.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(720, 490).loop(4)

  waterDrop8.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(740, 490).loop(4)

  waterDrop9.animate(3000, '<', 20).attr({
    fill: '#8B4513'
  }).move(757, 490).loop(4)

  waterDrops1.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(600, 490).loop(4)

  waterDrops2.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(620, 490).loop(4)

  waterDrops3.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(640, 490).loop(4)

  waterDrops4.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(660, 490).loop(4)

  waterDrops5.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(680, 490).loop(4)

  waterDrops6.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(700, 490).loop(4)

  waterDrops7.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(720, 490).loop(4)

  waterDrops8.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(740, 490).loop(4)

  waterDrops9.animate(3000, '<', 1500).attr({
    fill: '#8B4513'
  }).move(757, 490).loop(4)

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