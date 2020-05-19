class DropZone {
    constructor(x,y,height,width) {
        this.box = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    
    }
display() {
    var pos = this.body.position;
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
}
}