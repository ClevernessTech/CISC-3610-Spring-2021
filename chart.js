var fruit = [
    { name: "Apple", quantity: 30, color: "red" },
    { name: "Orange", quantity: 9, color: "orange" },
    { name: "Banana", quantity: 18, color: "yellow" },
    { name: "Kiwi", quantity: 2, color: "green" },
    { name: "Blueberry", quantity: 9, color: "blue" },
    { name: "Grapes", quantity: 38, color: "purple" },
  ];
  
var x = 0;
var barwidth = 100;
var textcenter = (x+barwidth)/2;
var barheight = -20; //height in pixels of the bar per unit of quantity.  Negative since I want the bars to go up
var fontsize = 20;
var y = 800;

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.font="20px Arial";
    ctx.fillText("Lab done by Jose Soto", x, y-barheight,1000);
    ctx.textAlign = "center"; /*Lines 21-23 set the default font and fontsize(which should match var fontsize value), 
    text with name as requested, and aligns following texts to the center for formatting*/
    for (var i = 0; i < fruit.length; i++) {
      var obj = fruit[i];
  
      console.log(fruit.color);
      ctx.fillStyle = obj.color;
      ctx.fillRect(x, y, barwidth, barheight*obj.quantity); //
      
      ctx.fillStyle = "black";
      ctx.fillText(obj.name,x+textcenter,y+barheight,barwidth);
      ctx.fillText(obj.quantity,x+textcenter,y+barheight-fontsize,barwidth);
      
      x += barwidth; //moves over 100 pixels to the right, returns to start of for loop
    }        
  }
}


  


draw();