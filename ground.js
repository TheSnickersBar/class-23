class Ground {
    constructor() {
        var ground_options={
            isStatic: true
        }
        this.ground=Bodies.rectangle(200,390,400,10,ground_options);
        this.width = 400;
        this.height = 20;
        World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}