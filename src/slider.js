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

        this.sliderBase = document.querySelector(".noUi-base");
        this.canvas = document.getElementById("canvasSlider");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.style.width = this.sliderBase.clientWidth + "px"; // adding styles
        this.canvas.style.height = this.sliderBase.clientHeight + "px";
        this.canvas.width = this.sliderBase.clientWidth;
        this.canvas.height = this.sliderBase.clientHeight;
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "red";

        //another styles

        this.initialized = true;
    };

    this.render = (innerDots) => {
        // if (!this.initialized) {
        //     this.initialize();
        // }

        const maxY;
        const percentDots = innerDots.map((coords) => {
            innerDots.forEach((e, i) => {
                if (i !== 0 && e.y > innerDots[i - 1].y) {
                    this.maxY = e.y;
                }
            });
            return {
                x: (coords.x / innerDots[innerDots.length - 1].x) * 100,
                y: (coords.y / maxY) * 100,
            };
        });
        const xUnit =
            this.sliderBase.clientWidth / innerDots[innerDots.length - 1].x;
        const yUnit = this.sliderBase.clientHeight / maxY;

        // render

        const dots = percentDots.map((coords) => ({
            x: coords.x * xUnit,
            y: coords.y * yUnit,
        }));
        console.log("🚀 ~ file: slider.js ~ line 65 ~ dots ~ dots", dots);

        this.ctx.moveTo(0, this.canvas.height);
        dots.forEach((e) => {
            this.ctx.lineTo(e.x, e.y);
        });
        this.ctx.stroke();
    };
}

export default Slider;
