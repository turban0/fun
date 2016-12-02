Config = {
  canvasWidth: 420,
  canvasHeight: 580,
  squareSize: 20,
  spaceBetween: 20,
  translationDistance: 10
}


function draw(){
  var canvas = document.getElementById('tutorial');
  canvas.width = Config.canvasWidth;
  canvas.height = Config.canvasHeight;
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

  }
}

function calculateHowManyWillFit(dimension, squareSize, spaceBetween, translationDistance) {
    var squaresFitted = 0;
    var spaceLeft = dimension / 2 - (squareSize / 2 + spaceBetween);
    while (spaceLeft >= 0) {
        squaresFitted++;
        spaceLeft = spaceLeft - (squareSize + spaceBetween + squaresFitted * translationDistance);
    }

    return squaresFitted;
}
