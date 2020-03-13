const image = document.querySelector(".image");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(image, 1, {height: "0%"}, {height: "100%"})
.fromTo(image, 1.2, {width: "100%"}, {width: "80%"})
.fromTo(slider, 1, {left: "-100%"}, {left: "0%"}, "-= 1.2")