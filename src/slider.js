import noUiSlider from "nouislider";

export default class Slider {
    constructor() {
        this.slider = document.getElementById("slider");
    }

    initialize() {
        noUiSlider.create(this.slider, {
            start: [20, 80],
            connect: true,
            range: {
                min: 0,
                max: 100,
            },
        });
        this.initialized = true;
    }

    render() {
        if (!this.initialized) {
            this.initialize();
        }

        this.sliderBase = document.querySelector(".noUi-base");
        this.canvas = document
            .createElement("canvas")
            .classList.add("sliderBaseGraphRender");
        this.sliderBase.insertAdjacentHTML("afterbegin", this.canvas);
    }
}
