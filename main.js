canvas=document.getElementById("myCanvas");
c=canvas.getContext("2d");
background_array = ["1.jfif","2.jpg","3.jpg","4.jfif"];
r=Math.floor(Math.random()*4);
console.log("r");
background_image = background_array[r];
console.log(background_image);  
rover_image = "rover.png";
roverx=10;
rovery=10;
rwidth=100;
rheight=90;
function ad(){
    bimage=new Image();
    bimage.onload=uploadbackground;
    bimage.src=background_image;

    rimage=new Image();
    rimage.onload=uploadrover;
    rimage.src=rover_image;
}
function uploadbackground(){
    c.drawImage(bimage,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    c.drawImage(rimage,roverx,rovery,rwidth,rheight);
}
window.addEventListener("keydown",t);
function t(e){
z=e.keyCode;
console.log(z);
if(z == '38'){
    up();
    console.log("up arrow is pressed");
}
if(z == '37'){
    Left();
    console.log("left arrow is pressed");
}
if(z == '39'){
    right();
    console.log("right arrow is pressed");
}
if(z == '40'){
    down();
    console.log("down arrow is pressed");
}
}
function up(){
    if(rovery>=0){
        rovery= rovery-10;
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rovery<=500){
        rovery= rovery+10;
        uploadbackground();
        uploadrover();
    }
}
function Left(){
    if(roverx>=0){
        roverx= roverx-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(roverx<=700){
        roverx= roverx+10;
        uploadbackground();
        uploadrover();
    }
}