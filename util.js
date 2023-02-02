class Obj{

  frame = 0;
  timer = 0;

  constructor(x,y,width,height, image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  draw(){
    var img = new Image();
    img.src = this.image;
    canvas.drawImage(img, this.x, this.y, this.width, this.height);
  }

  animation(vel, limit, nome){
    this.timer += 1;
    if (this.timer >= vel) {
      this.timer = 0;
      this.frame += 1;
    }
    if (this.frame >= limit) {
      this.frame = 0;
    }

    this.image = "assets/images/" + nome + this.frame + ".png";
  }

}

class Bg extends Obj{
  move(speed, limit, pos){
    this.x -= speed;
    if(this.x <= limit){
      this.x = pos;
    }
  }
}

class Ground extends Bg{

}

class Bird extends Obj{

  vel = 2;
  grav = 1;

  move(){
    if(this.vel < 10){
      this.vel += this.grav;
    }
    this.y += this.vel;
  }

  limits(){
    if (this.y >= 660) {
      this.y = 660;
    }else if (this.y <= 0) {
      this.y = 0;
    }
  }
}

class Pipe extends Obj{
  move(vel, limit, new_pos){
    this.x -= vel;
    if (this.x <= limit){
      this.x = new_pos;
    }
  }
}
