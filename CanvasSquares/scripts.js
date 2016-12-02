Config = {
  canvasWidth: 580,
  canvasHeight: 580,
  squareSize: 20,
  spaceBetween: 20,
  translationDistance: 10
}


function start(){
  var canvas = document.getElementById('tutorial');
  canvas.width = Config.canvasWidth;
  canvas.height = Config.canvasHeight;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    draw(ctx);
  }
}

function draw(ctx) {
    var squaresHorizontally = calculateHowManyWillFit(Config.canvasWidth, Config.squareSize, Config.spaceBetween, Config.translationDistance);
    var squaresVertically = calculateHowManyWillFit(Config.canvasHeight, Config.squareSize, Config.spaceBetween, Config.translationDistance);

    var centerX = Config.canvasWidth / 2;
    var centerY = Config.canvasHeight / 2;
    var i,j;

    for (i = 0; i < Math.max(squaresHorizontally, squaresVertically); i++) {
        // for (j = 0 - i; j < )
            drawSquare(ctx, centerX - Config.squareSize / 2, centerY - Config.squareSize / 2, Config.squareSize);
        // }
    }
}

function drawSquare(ctx, x, y, squareSize) {
    ctx.strokeRect(x, y, squareSize, squareSize);
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
