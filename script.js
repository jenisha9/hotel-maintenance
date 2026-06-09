const slider = document.getElementById("slider");
const beforeLayer = document.querySelector(".before-layer");
const sliderLine = document.querySelector(".slider-line");

slider.addEventListener("input", () => {

    const value = slider.value;

    beforeLayer.style.width = value + "%";
    sliderLine.style.left = value + "%";

});