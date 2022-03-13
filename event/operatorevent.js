
var mouseX;
var mouseY;
var isPresss = false; 
var moveDirection = "init";

function mouseClickEvent(event, data) {
    console.log("click event:" + event + ", param, x:"+data.x+",y:"+data.x+",arrayx:"+data.arrayx+",arrayy:"+data.arrayy); 
}

function mousedownEvent(event, data) {
    //alert("mouseDown"); 
//    mouseX = data.x; 
//    mouseY = data.y; 
    clickDownX = Math.floor(event.stageX/data.size); 
    clickDownY = Math.floor(event.stageY/data.size); 
    spriteAX = data.arrayx; 
    spriteAY = data.arrayy; 
    spriteBX = spriteAX;
    spriteBY = spriteAY; 
    //isPresss = true; 
    
    console.log("mousedown, x:" + clickDownX + ", y:" + clickDownY); 
}

function pressupEvent(event, data) {

    console.log("x:"+clickDownX+",y:"+clickDownY+",nx:"+clickUpX+",ny:"+clickUpY+"."+event); 

    clickUpX = Math.floor(event.stageX/data.size); 
    clickUpY = Math.floor(event.stageY/data.size); 
    incressX = clickUpX - clickDownX; 
    incressY = clickUpY - clickDownY; 
    
    isMove = false; 
    if ((Math.abs(incressX)==1 && Math.abs(incressY) == 1)) {
        isMove = false; 
    } else if (Math.abs(incressX)==1 || Math.abs(incressY) == 1) {
        if (Math.abs(incressX) == 1) {
            moveDirection = incressX>0 ? 1:-1; 
            spriteBX = spriteAX + moveDirection; 
        } else {
            moveDirection = incressY<0 ? 1:-1; 
            spriteBY = spriteAY + moveDirection; 
        }
        isMove = true; 
    } else {
        isMove = false; 
    }
    
    /*
    var spriteBefore = spriteArray[clickDownX][clickDownY]; 
    var spriteAfter = spriteArray[clickUpX][clickUpY]; 
    */

    if (isMove) {
        var tmpSpriteA = spriteArray[spriteAX][spriteAY];
        var tmpSpriteB = spriteArray[spriteBX][spriteBY]; 

        spriteArray[spriteAX][spriteAY].move(spriteBX, spriteBY); 
        spriteArray[spriteBX][spriteBY].move(spriteAX, spriteAY); 

        spriteArray[spriteAX][spriteAY] = tmpSpriteA; 
        spriteArray[spriteBX][spriteBY] = tmpSpriteB;

    }
    
}
