"use strict";
var canvas = document.getElementById("myCanvas-base");
var c = canvas.getContext("2d");

function drawTitle() {
    c.font="30px Arial";
    c.fillStyle = "Black";
    var line=1;
    var height=765;
    var fontsize=30;
    c.fillText("Cartoon Assignment Assigned 02/08/2021",0,height+line);
    line += fontsize;
    c.fillText("Done by Jose Soto and Dennis Abreu",0,height+line);
    //line++;
}

function drawHouse() { //This function draws a basic ground + house
    // Set line width
    c.lineWidth = 8;

    //draws green 'grass' on lower half of the canvas
    c.fillStyle = "green"; 
    c.fillRect(0,400,800,400);

    //draws a frame for the house, then fills it with the designated color
    c.fillStyle = "white"; 
    c.strokeRect(575, 640, 150, 110); //draws empty rectangle for the basic house shape
    c.fillRect(575, 640, 150, 110);

    c.fillStyle = "black"; //draws a door, filled in with the designated color
    c.fillRect(630, 690, 40, 60); 

    //Starts drawing roof secton
    c.beginPath();
    c.moveTo(550, 640); //sets starting point to this position on x,y axis
    c.lineTo(750, 640); //straight line 200 pixels to the right along the x-axis
    c.lineTo(650, 560); //diagonal line, halfway between the 2 x-axis coordinates and alittle higher to simulate a roof
    c.closePath();
    c.fillStyle = "brown"; //next 2 lines designate the color I want the roof, and then fills in the shape that we just drew above
    c.fill();
    c.stroke();
}

function drawSky() { //This function uses an image to draw the night sky on load
    c.fillStyle = "darkblue"; 
    c.fillRect(0,0,800,400);
    c.fillStyle = "white";
    c.beginPath();
    c.arc(700,100, 50, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
}

function drawTree() { 
    c.beginPath();//draws the tree trunk
    c.moveTo(500, 410);
    c.lineTo(550, 410); 
    c.lineTo(550, 610); 
    c.lineTo(500, 610); 
    c.closePath();
    c.fillStyle = "brown"; 
    c.fill();
    c.stroke();

    c.beginPath();//draws the leaves
    c.moveTo(500, 410);
    c.lineTo(450, 430);
    c.lineTo(450, 380);
    c.lineTo(420, 350);
    c.lineTo(450, 320);
    c.lineTo(480, 280);
    c.lineTo(520, 250);
    c.lineTo(560, 290);
    c.lineTo(610, 320);
    c.lineTo(630, 350);
    c.lineTo(640, 380);
    c.lineTo(610, 420);
    c.lineTo(550, 410); 
    c.fillStyle = "green"; 
    c.fill();
    c.stroke();
}

function drawCloud() { //This function uses an image to draw the night sky on load

    c.fillStyle = "white";
    c.beginPath();
    c.arc(100, 100, 30, 110, .4 * Math.PI);
    c.arc(150, 130, 30, 10, 3 * Math.PI);
    c.fill();
    c.stroke();
}

function drawMountain() { 
    c.beginPath();//draws mountain range
    c.moveTo(10, 410);
    c.lineTo(40, 210); 
    c.lineTo(50, 240);
    c.lineTo(80, 180); 
    c.lineTo(100, 210);
    c.lineTo(140, 310);
    c.lineTo(200, 120);
    c.lineTo(230, 410);
    c.closePath();
    c.fillStyle = "gray"; 
    c.fill();
    c.stroke();

    c.beginPath();//snowtop for highest peak
    c.moveTo(180, 175);
    c.lineTo(200, 120);
    c.lineTo(206, 175);    
    c.fillStyle = "white"; 
    c.fill();
    c.stroke();

    c.beginPath();//snowtop for 2nd highest peak
    c.moveTo(50, 240);
    c.lineTo(80, 180);
    c.lineTo(111, 240);    
    c.fillStyle = "white"; 
    c.fill();
    c.stroke();
}
//Calls each of the functions assigned for each part of the drawing
drawSky();
drawHouse();
drawTitle();
drawTree();
drawMountain();


