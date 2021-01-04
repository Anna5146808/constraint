class Chain {
    constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.056,
length:9,


}
this.chain=Constraint.create(options);
World.add(world,this.chain);
    }
display(){
stroke("purple");
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}













}


