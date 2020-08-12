class Paper{
constructor(x,y,radius){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(x,y,30,options)
this.image=loadImage("images/paper.png")
this.radius=30;
World.add(world,this.body)
}
display(){
var pos=this.body.position
var angle=this.body.angle
push()
imageMode(CENTER);
fill("pink")
translate(pos.x,pos.y)
rotate(angle)
image(this.image,0,0,70,70)
pop()
}

}