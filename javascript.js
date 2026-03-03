var canvas = document
    .getElementById("meucanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#8b1919";
ctx.fillRect(50, 50, 80, 80);

ctx.fillStyle = "#898b19";
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

ctx.fillStyle = "#bd9999";
var circle = new Path2D();
circle.moveTo(125, 35);
circle.arc(100, 35, 25, 0, 2 * Math.PI);
ctx.fill(circle);



var x = 50;
var y = 50;
ctx.fillStyle = "#8b1919";
ctx.fillRect(x, y, 80, 80);