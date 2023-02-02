var canvas = document.getElementById('canvas').getContext("2d");

var bg =  new Bg(0,0,500,900, "assets/images/sky.png");
var bg2 =  new Bg(500,0,500,900, "assets/images/sky.png");

var ground = new Ground(0,700, 500, 200, "assets/images/ground.png");
var ground2 = new Ground(500,700, 500, 200, "assets/images/ground.png");

var pipe1 = new Pipe(300, 400, 96, 358, "assets/images/pipe1.png");
var pipe2 = new Pipe(300, -100, 96, 358, "assets/images/pipe2.png");

var bird = new Bird(50, 400, 63, 51, "assets/images/bird0.png");

document.addEventListener("click", function(event){
  bird.vel -= 12;
});

function draw() {
  bg.draw();
  bg2.draw();
  pipe1.draw();
  pipe2.draw();
  ground.draw();
  ground2.draw();
  bird.draw();


}

function update(){
  bg.move(5, -500, 0);
  bg2.move(5, 0, 500);

  ground.move(2, -500, 0);
  ground2.move(2, 0, 500);

  bird.move();
  bird.animation(8, 4, "bird");
  bird.limits();

  pipe1.move(1, -100, 600);
  pipe2.move(1, -100, 600);
}

function main(){
  canvas.clearRect(0,0,500,900);
  draw();
  update();
  requestAnimationFrame(main);
}

main();
