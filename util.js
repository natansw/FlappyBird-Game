class Obj{
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

}
