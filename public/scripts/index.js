const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 3;

ctx.width = 40;
ctx.style.width = "400px";
ctx.height = 40;
ctx.style.height = "400px";

ctx.moveTo(0, canvas.innerHeight);
ctx.lineTo(100, 20);
ctx.lineTo(150, 60);
ctx.lineTo(170, 10);
ctx.lineTo(180, 100);
ctx.lineTo(210, 20);
ctx.stroke();
