var canvas = document.getElementById('canvas').getContext("2d");

var bg =  new Bg(0,0,500,900, "assets/images/sky.png");
var bg2 =  new Bg(500,0,500,900, "assets/images/sky.png");

var ground = new Ground(0,700, 500, 200, "assets/images/ground.png");
var ground2 = new Ground(500,700, 500, 200, "assets/images/ground.png");

var pipe1 = new Pipe(300, 400, 96, 358, "assets/images/pipe1.png");
var pipe2 = new Pipe(300, -100, 96, 358, "assets/images/pipe2.png");

var bird = new Bird(50, 400, 63, 51, "assets/images/bird0.png");

var coin = new Coin(50,50, 45, 65, "assets/images/3.png");

var play = true;

var score = 0;
var score_text = new Text();

var fly = new Audio("assets/sounds/wing.ogg");
var coin_pick = new Audio("assets/sounds/point.ogg");
var gameover = new Audio("assets/sounds/hit.ogg");

document.addEventListener("click", function(e){
  bird.vel -= 15;
  fly.play();
});

function colision() {
  if (bird.collide(coin)) {
    if (coin.set_visible) {
      coin.set_visible = false;
      score += 1;
      coin_pick.play();
    }}

  if (bird.collide(pipe1) || bird.collide(pipe2)) {
    gameover.play();
    play = false;
  }
}

function draw() {
  bg.draw();
  bg2.draw();
  pipe1.draw();
  pipe2.draw();
  ground.draw();
  ground2.draw();
  bird.draw();
  coin.draw();
  score_text.draw_text(60, "Arial", 225, 220, "white");
}

function update(){
  if (play) {
    bg.move(1, -500, 0);
    bg2.move(1, 0, 500);
    ground.move(2, -500, 0);
    ground2.move(2, 0, 500);
    bird.move();
    bird.animation(8, 4, "bird");
    bird.limits();

    pipe1.move(2, -100, 500 , pipe2);

    coin.move(pipe1);
    coin.animation(8, 5, "");

    score_text.text = score;

    colision();

  }
}

function main(){
  canvas.clearRect(0,0,500,900);
  draw();
  update();
  requestAnimationFrame(main);
}

main();
