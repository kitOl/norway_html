// import { tns } from "./src/tiny-slider.js";

const slider = tns({
  container: ".header-slider",
  items: 1,
  slideBy: "page",
  //   autoplay: true,
  controls: false,
  autoHeight: true,
  //   nav: false,
  //   arrowKeys: true,
  //   navAsThumbnails: true,
});

const sliderPrev = document.querySelector("#sliderPrev");
const sliderNext = document.querySelector("#sliderNext");

sliderNext.onclick = function () {
  slider.goTo("next");
};
sliderPrev.onclick = function () {
  slider.goTo("prev");
};

const currentIndex = document.querySelector("#currentIndex");
const totalIndex = document.querySelector("#totalIndex");

function updateSliderFraction() {
  const sliderInfo = slider.getInfo();

  if (sliderInfo.index > sliderInfo.pages) {
    currentIndex.innerText = "01";
  } else if (sliderInfo.index === 0) {
    currentIndex.innerText = "0" + sliderInfo.pages;
  } else {
    currentIndex.innerText = "0" + sliderInfo.index;
  }

  // currentIndex.innerText = sliderInfo.navCurrentIndex + 1;
  totalIndex.innerText = "0" + sliderInfo.pages;
}

updateSliderFraction();

slider.events.on("indexChanged", () => {
  updateSliderFraction();
});
