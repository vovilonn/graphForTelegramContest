import noUiSlider from "nouislider";

function Slider() {
    this.initialized = false;

    this.initialize = () => {
        //initializing slider

        noUiSlider.create(document.getElementById("slider"), {
            start: [10, 120],
            margin: 10,
            behaviour: "drag",
            connect: true,
            range: {
                min: 0,
                max: 100,
            },
        });

        //canvas setting and styles

        const sliderBase = document.querySelector(".noUi-base");
        this.canvas = document.getElementById("canvasSlider");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.style.width = sliderBase.clientWidth + "px"; // adding styles
        this.canvas.style.height = sliderBase.clientHeight + "px";
        this.canvas.width = sliderBase.clientWidth;
        this.canvas.height = sliderBase.clientHeight;

        //another styles

        this.initialized = true;
    };

    this.render = () => {
        if (!this.initialized) {
            this.initialize();
        }

        const dots = [
            { x: 10, y: 2 },
            { x: 100, y: 6 },
            { x: 191, y: 20 },
            { x: 242, y: 11 },
            { x: 260, y: 2 },
        ];

        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "red";
        this.ctx.moveTo(0, this.canvas.height);
        dots.forEach((e) => {
            this.ctx.lineTo(e.x, e.y);
        });
        this.ctx.stroke();
    };
}

export default Slider;
