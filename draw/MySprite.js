


class MySprite extends createjs.Shape{
    arrayx;
    arrayy; 

    constructor(x, y) {
        super(); 
        //this.setPosition(x, y); 
        this.arrayx = x; 
        this.arrayy = y; 
        this.generate(); 
        console.log("constructor, x:" + this.x + ", y:" + this.y); 
        this.on("click", mouseClickEvent, null, false, {data: this, size: 2*spriteSize, arrayx: x, arrayy: y}); 
        this.on("mousedown", mousedownEvent, null, false, {size: 2*spriteSize, arrayx: x, arrayy: y});
        this.on("pressup", pressupEvent, null, false, {size: 2*spriteSize, arrayx: x, arrayy: y}); 
    }

//    DisplayObject._MOUSE_EVENTS = ["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"];

    move (x, y) {
        var tmpX = this.arrayx; 
        var tmpY = this.arrayy; 
        this.x = 2*x*spriteSize; 
        this.y = 2*y*spriteSize; 
        console.log("MySprite move from:["+tmpX+","+tmpY+"] to:["+x+","+y+"]"); 
    }

    generate () {
        console.log("MySprite generate."); 
        var type = Math.ceil(Math.random()*100)%7; 
        this.generateSprite2(-1, -1, type, spriteSize); 
    }
    
    generateSprite2 (positionx, positiony, type, size) {
        var color; 
        switch (type) {
            case 1:
                color = "#000";
                break;
            case 2:
                color = "#00f"; 
                break;
            case 3:
                color = "#0f0"; 
                break;
            case 4:
                color = "#f00"; 
                break;
            case 5:
                color = "#f0f"; 
                break;
            case 6:
                color = "#ff0"; 
                break;
            default:
                color = "#fff"; 
                break;
        }
        
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0,0,0));
        g.beginFill(color);
        g.drawPolyStar(size*(1+2*positionx), size*(1+2*positiony), size, 3, 0.6, -90); 
        this.setBounds(0, 0, size, size); 
        this.graphics = g; 
//        this.sprite = new createjs.Shape(g);
        /*
        this.sprite = new createjs.Shape(); 
        this.sprite.graphics.beginFill(color);
        this.sprite.graphics.drawPolyStar(size*(1+2*positionx), size*(1+2*positiony), size, 3, 0.6, -90); 
        this.sprite.setBounds(0,0,size,size); 
        */
    }

}