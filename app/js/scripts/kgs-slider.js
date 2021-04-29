function changeSlide(sliderEl, value) {
    sliderEl.style.setProperty("--slider-move", value + "%");
  }
  
  function createSlider(sliderSelector) {
    const sliderEl = document.querySelector(sliderSelector);
    const sliderAfterEl = sliderEl.querySelector(".kgs__item--after");
    const sliderRangeEl = sliderEl.querySelector(".kgs__range");
    const sliderDeviderEl = sliderEl.querySelector(".kgs__devider");
    const sliderItemEl = sliderEl.querySelectorAll(".kgs__item-img");
  
    window.addEventListener("DOMContentLoaded", (event) => {
      sliderEl.style.setProperty("--slider-width", sliderEl.offsetWidth + "px");
    });
  
    window.addEventListener("resize", () => {
      sliderEl.style.setProperty("--slider-width", sliderEl.offsetWidth + "px");
    });
  
    changeSlide(sliderEl, 50);
  
    const onSlideInput = () => {
      changeSlide(sliderEl, sliderRangeEl.value);
    };
    sliderRangeEl.addEventListener("input", onSlideInput);
  
    const destroyFn = () => {
      sliderRangeEl.removeEventListener("input", onSlideInput);
    };
  
    return { destroy: destroyFn };
  }
  
  createSlider("#slider-1");
  createSlider("#slider-2");
  
  //const slider2 = createSlider("#slider-2");
  // slider2.destroy();
  