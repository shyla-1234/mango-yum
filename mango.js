class mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
this.img=loadImage("img/mango.png");
World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.positionX,this.body.positionY);
        rotate(angle);
        imageMode(CENTER);
        image(this.img,712,168,this.width,this.height);
        pop() 

         
    }
}