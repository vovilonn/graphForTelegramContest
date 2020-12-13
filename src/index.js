import "@/styles/style.css";
import Slider from "./slider.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const { initialize, render } = new Slider();

const graph = [
    { x: 100, y: 320 },
    { x: 130, y: 100 },
    { x: 220, y: 190 },
    { x: 300, y: 290 },
    { x: 500, y: 380 },
    { x: 720, y: 320 },
    { x: 750, y: 320 },
    { x: 830, y: 100 },
    { x: 840, y: 110 },
    { x: 900, y: 100 },
    { x: 930, y: 380 },
    { x: 990, y: 320 },
];

const renderGraph = (dots) => {
    ctx.moveTo(0, canvas.height);
    dots.forEach((e) => {
        ctx.lineTo(e.x, e.y);
    });
    ctx.stroke();
};

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

ctx.lineWidth = 5;
ctx.strokeStyle = "red";

renderGraph(graph);
initialize();
render();
