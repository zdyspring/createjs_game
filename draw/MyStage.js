
var stage = new createjs.Stage("gameView");
createjs.Touch.enable(stage); 
createjs.Ticker.setFPS(60); 
createjs.Ticker.addEventListener('tick', function() {
    stage.update(); 
}); 

test(); 

function test() {
    console.log("MyStage test"); 
    spriteArray = new Array(); 
    for (var i=0; i<gridWidth; i++) {
        spriteArray[i] = new Array(); 
        for (var j=0; j<gridHeight; j++) {
            //var mySprite = new MySprite(i, j).get(); 
            var mySprite = new MySprite(i, j); 
            mySprite.move(i, j); 
//            mySprite.x = 2*i*spriteSize; 
//            mySprite.y = 2*j*spriteSize; 
            console.log("test mySprite: " + mySprite.x); 
            spriteArray[i][j] = mySprite; 
            stage.addChild(mySprite);   
            stage.update(); 
        }
    }
}

/*
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
*/
