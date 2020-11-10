class slingshot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.sling=Matter.Constraint.create(options)
		World.add(world,this.sling)
	}

    display()
	
		{
			var pointA=this.sling.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	
}




/*class Launcher {
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.launch=Constraint.create(option)
        World.add(world,this.launch)
    }
    display(){
        var posA=this.bodyA.position;
        var pointB=this.pointB;
        line(posA.x,posA.y,pointB.x,pointB.y)
    }
}*/