Config = {
  canvasWidth: 600,
  canvasHeight: 600,
  squareSize: 10,
  spaceBetween: 10
}

function draw(){
  var canvas = document.getElementById('tutorial');
  canvas.width = Config.canvasWidth;
  canvas.height = Config.canvasHeight;
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

  }
}
