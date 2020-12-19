class stone{
    constructor(x,y,width,height){
    var options={
        isStatic:false,
       restitution:0,
       friction:1,
       density:1.2
    }
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
   this.img=loadImage("img/stone.png");
    World.add(world,this.body);
}
display(){
 
   // this.body.positionX=mouseX;
    //this.body.positionY=mouseY;
    var a = this.body.angle;
    push();
    translate(this.body.positionX,this.body.positionY);
    rotate(a);
    imageMode(CENTER);
    image(this.img,0,0,this.width,this.height);
    pop();


}
}