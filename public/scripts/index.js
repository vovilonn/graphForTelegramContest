const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const graphRange = document.getElementById("graphRange");

const graph = [
    { x: 100, y: 320 },
    { x: 130, y: 100 },
    { x: 140, y: 110 },
    { x: 300, y: 10 },
    { x: 500, y: 380 },
    { x: 720, y: 320 },
    { x: 750, y: 320 },
    { x: 830, y: 100 },
    { x: 840, y: 110 },
    { x: 900, y: 10 },
    { x: 930, y: 380 },
    { x: 990, y: 320 },
];

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

ctx.lineWidth = 5;
ctx.strokeStyle = "red";

graphRange.min = 0;
graphRange.max = graph[graph.length - 1].x;

ctx.moveTo(0, 0);

graph.forEach((e) => {
    ctx.lineTo(e.x, e.y);
});

ctx.stroke();
