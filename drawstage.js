
var stage = new createjs.Stage("gameView");
createjs.Touch.enable(stage); 

var width = 10; 
var height = 10; 
var size = 20; 

drawGrid(0, 0, width, height, 2*size); 
for (var i=0; i<width; i++) {
    for (var j=0; j<height; j++) {
            var spriteType = Math.ceil(Math.random()*100)%7;
            drawColorSprite(i, j, spriteType, size); 
    }
}

function drawGrid(positionx, positiony, width, height, size) {
    var grid = new createjs.Shape();
    for (var i=0; i<=width; i++) {
        grid.graphics.setStrokeStyle(1); 
        grid.graphics.beginStroke("#000"); 
        grid.graphics.moveTo((positionx+i)*size, positiony*size); 
        grid.graphics.lineTo((positionx+i)*size, (positiony+height)*size);
        stage.addChild(grid); 
    }
    for (var i=0; i<=height; i++) {
        grid.graphics.setStrokeStyle(1); 
        grid.graphics.beginStroke("#000"); 
        grid.graphics.moveTo(positionx*size, (positiony+i)*size); 
        grid.graphics.lineTo((positionx+width)*size, (positiony+i)*size);
        stage.addChild(grid); 
    }
    stage.update(); 
}

function drawColorSprite(positionx, positiony, type, size) {
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
    var sprite = new createjs.Shape();
    sprite.graphics.beginFill(color);
//    sprite.graphics.drawPolyStar(10*ratio+2*10*positionx*ratio, 10*ratio+2*10*positiony*ratio, 10*ratio,5,0.6,-90);
    sprite.graphics.drawPolyStar(size*(1+2*positionx), size*(1+2*positiony), size, 3, 0.6, -90); 
//    sprite.on("click", clickEvent, null, false, {x:positionx,y:positiony}); 
    sprite.on("mousedown", mousedownEvent, null, false, {x:positionx,y:positiony});
    sprite.on("pressup", pressupEvent, null, false, {x:positionx,y:positiony}); 
    stage.addChild(sprite);
    stage.update(); 
}

/*
function clickEvent(event) {
    alert("click"); 
}
*/
