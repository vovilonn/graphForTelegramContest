import noUiSlider from "nouislider";

function Slider() {
    this.initialized = false;

    this.initialize = () => {
        noUiSlider.create(document.getElementById("slider"), {
            start: [20, 80],
            connect: true,
            range: {
                min: 0,
                max: 100,
            },
        });

        const sliderBase = document.querySelector(".noUi-base");
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add("noUi-BaseGraphRender");
        sliderBase.insertAdjacentElement("afterbegin", this.canvas);
        this.canvas.style.width = sliderBase.clientWidth + "px";
        this.canvas.style.height = sliderBase.clientHeight + "px";
        this.canvas.width = this.canvas.style.width;
        this.canvas.height = this.canvas.style.height;

        this.ctx = canvas.getContext("2d");

        this.initialized = true;
    };

    this.render = () => {
        if (!this.initialized) {
            this.initialize();
        }
    };
}

export default Slider;
