class Hammer extends BaseClass{
    constructor(x, y){
        super(x, y, 50, 20);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
        fill("yellow");
    }
}