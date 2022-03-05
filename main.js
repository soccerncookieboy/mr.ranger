var canvas = new fabric.Canvas("myCanvas")
playerX = 10;
playerY = 10;
block_img_w = 30;
block_img_h = 30;
var player_object=""
var block_img_object=""
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:playerY,
        left:playerX
    });
    canvas.add(player_object);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_img_object = Img;

    block_img_object.scaleToWidth(block_img_w);
    block_img_object.scaleToWidth(block_img_h);
    block_img_object.set({
        top:playerY,
        left:playerX
    });
    canvas.add(block_img_object);
    })
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == '80'){
    console.log("w+ and h+")
    block_img_h = block_img_h + 10
    block_img_w = block_img_w + 10
    document.getElementById("ch").innerHTML = block_img_h
    document.getElementById("cw").innerHTML = block_img_w  
    }  
    if(e.shiftKey == true && keyPressed == '77'){
    console.log("w- and h-")
    block_img_h = block_img_h - 10
    block_img_w = block_img_w - 10
    document.getElementById("ch").innerHTML = block_img_h
    document.getElementById("cw").innerHTML = block_img_w    
    }
    if( keyPressed== '38'){
    up()
    console.log("up")
    }
    if( keyPressed== '40'){
    down()
    console.log("down")
    }   
    if( keyPressed== '37'){
    left()
    console.log("left")
    }
    if( keyPressed== '39'){
    right()
    console.log("right")
    }
    if( keyPressed== '87'){
    new_image('gr.png')
    console.log("green(w)")
    }
    if( keyPressed== '89'){
    new_image('yr.png')
    console.log("yellow (y)")
    }
    if( keyPressed== '82'){
    new_image('rr1.png')
    console.log("red(r)")
    }
    if( keyPressed== '68'){
    new_image('pr.png')
    console.log("pink(d)")
    }
    if( keyPressed== '67'){
        new_image('br.png')
        console.log("blue(c)")
}   }
