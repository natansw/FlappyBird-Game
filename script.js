var canvas = document.getElementById('canvas').getContext("2d");

var bg =  new Obj(0,0,500,900, "assets/images/sky.png");

function draw() {
  bg.draw();
}

function update(){

}

function main(){
  canvas.clearRect(0,0,500,900);
  draw();
  update();
}

setInterval(main, 100);
