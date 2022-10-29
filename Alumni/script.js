const productContainers = [...document.querySelectorAll(".second-generation")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});
