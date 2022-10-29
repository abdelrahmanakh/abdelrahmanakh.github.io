const productContainers = [...document.querySelectorAll(".Admin")];
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

const sproductContainers = [...document.querySelectorAll(".special")];
const snxtBtn = [...document.querySelectorAll(".specialists .nxt-btn")];
const spreBtn = [...document.querySelectorAll(".specialists .pre-btn")];

sproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  snxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  spreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const MproductContainers = [...document.querySelectorAll(".math")];
const MnxtBtn = [...document.querySelectorAll(".Math .nxt-btn")];
const MpreBtn = [...document.querySelectorAll(".Math .pre-btn")];

MproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  MnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  MpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const BproductContainers = [...document.querySelectorAll(".biology")];
const BnxtBtn = [...document.querySelectorAll(".Biology .nxt-btn")];
const BpreBtn = [...document.querySelectorAll(".Biology .pre-btn")];

BproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  BnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  BpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const CproductContainers = [...document.querySelectorAll(".chemistry")];
const CnxtBtn = [...document.querySelectorAll(".Chemistry .nxt-btn")];
const CpreBtn = [...document.querySelectorAll(".Chemistry .pre-btn")];

CproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  CnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  CpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const PproductContainers = [...document.querySelectorAll(".physics")];
const PnxtBtn = [...document.querySelectorAll(".Physics .nxt-btn")];
const PpreBtn = [...document.querySelectorAll(".Physics .pre-btn")];

PproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  PnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  PpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const EproductContainers = [...document.querySelectorAll(".english")];
const EnxtBtn = [...document.querySelectorAll(".English .nxt-btn")];
const EpreBtn = [...document.querySelectorAll(".English .pre-btn")];

EproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  EnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  EpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const AproductContainers = [...document.querySelectorAll(".arabic")];
const AnxtBtn = [...document.querySelectorAll(".Arabic .nxt-btn")];
const ApreBtn = [...document.querySelectorAll(".Arabic .pre-btn")];

AproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  AnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  ApreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const ActproductContainers = [...document.querySelectorAll(".activity")];
const ActnxtBtn = [...document.querySelectorAll(".Activity .nxt-btn")];
const ActpreBtn = [...document.querySelectorAll(".Activity .pre-btn")];

ActproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  ActnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  ActpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

const StproductContainers = [...document.querySelectorAll(".staff")];
const StnxtBtn = [...document.querySelectorAll(".Staff .nxt-btn")];
const StpreBtn = [...document.querySelectorAll(".Staff .pre-btn")];

StproductContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  StnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  StpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});
