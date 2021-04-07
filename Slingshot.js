class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.Slingshot);
    }

    display(){
        if(this.Slingshot.bodyA ){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    
    }
    fly(){
        this.Slingshot.bodyA=null;
        //null means nothing
    }
}