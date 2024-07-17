declare function require(name: string);
const fs = require("fs");

type gridColorType =
  | "LIGHT-HEM-STRAP"
  | "LIGHT-WIND-STRAP"
  | "DARK-HEM-STRAP"
  | "DARK-WIND-STRAP";

type descriptionData = {
  name: string;
  color: gridColorType;
  title: string;
  header: string;
  description?: string;
  video?: string;
  desktop1: string;
  mobile1: string;
  desktop2: string;
  mobile2: string;
  proofsDesktop: string;
  proofsMobile: string;
};

type descriptionGridData = {
  toolkitGrid1: string;
  toolkitGrid2: string;
  toolkitGrid3: string;
  toolkitGrid4: string;
  waterproof: string;
  fabric: string;
  bag: string;
  protection2?: string;
};

const car_mirror_03: descriptionData = {
  name: "car_mirror_03",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-mobile-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weatherproof-car-03-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weather-car-03-mobile-mirror.webp",
};
const car_no_mirror_03: descriptionData = {
  name: "car_no_mirror_03",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-desktop-no-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-mobile-no-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-mobile-no-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weatherproof-car-03-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weather-car-03-mobile-no-mirror.webp",
};

const car_mirror_10: descriptionData = {
  name: "car_mirror_10",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-mobile-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-mobile-mirror.webp",
};

const car_no_mirror_10: descriptionData = {
  name: "car_no_mirror_10",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-desktop-no-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-mobile-no-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-mobile-no-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-mobile-no-mirror.webp",
};
const suv_mirror_03: descriptionData = {
  name: "suv_mirror_03",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-mobile-mirror.webp",

  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weatherproof-suv-03-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weather-suv-03-mobile-mirror.webp",
};
const suv_no_mirror_03: descriptionData = {
  name: "suv_no_mirror_03",
  color: "LIGHT-WIND-STRAP",

  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-desktop-no-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-mobile-no-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-mobile-no-mirror.webp",

  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weatherproof-suv-03-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weather-suv-03-mobile-no-mirror.webp",
};
const suv_mirror_10: descriptionData = {
  name: "suv_mirror_10",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-mobile-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weatherproof-suv-10-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weather-suv-10-mobile-mirror.webp",
};
const suv_no_mirror_10: descriptionData = {
  name: "suv_no_mirror_10",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-desktop-no-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-mobile-no-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-mobile-no-mirror.webp",

  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weatherproof-suv-10-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weather-suv-10-mobile-no-mirror.webp",
};
const truck_mirror_03: descriptionData = {
  name: "truck_mirror_03",
  color: "LIGHT-WIND-STRAP",

  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-mobile-mirror.webp",

  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weatherproof-truck-03-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weather-truck-03-mobile-mirror.webp",
};
const truck_no_mirror_03: descriptionData = {
  name: "truck_no_mirror_03",
  color: "LIGHT-WIND-STRAP",

  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-desktop-no-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-mobile-no-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-mobile-no-mirror.webp",

  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weatherproof-truck-03-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weather-truck-03-mobile-no-mirror.webp",
};
const truck_mirror_10: descriptionData = {
  name: "truck_mirror_10",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-airvent-truck-10-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-airvent-truck-10-mobile-mirror.webp",

  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-mirror.webp",
};
const car_10_mirror_black: descriptionData = {
  name: "car_10_mirror_black",
  color: "DARK-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-main-car-10-bk-desktop-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-main-car-10-bk-mobile-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-airvent-car-10-bk-desktop-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-airvent-car-10-bk-mobile-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-weatherproof-car-10-bk-desktop-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-weatherproof-car-10-bk-mobile-mirror.webp",
};
const truck_no_mirror_10: descriptionData = {
  name: "truck_no_mirror_10",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "High-Quality Premium Car Cover",
  video:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
  desktop1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-desktop-no-mirror.webp",
  mobile1:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-mobile-no-mirror.webp",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
};
const newNoMirror: descriptionData = {
  name: "7-1-24_no-mirror",
  color: "LIGHT-WIND-STRAP",
  title: "iCarCover Description",
  header: "Top-Quality Weather Protection Car Cover",
  desktop1:
    "https://advanceparts.sfo3.cdn.digitaloceanspaces.com/ebay/01_nm.png",
  mobile1:
    "https://advanceparts.sfo3.cdn.digitaloceanspaces.com/ebay/01_nm.png",
  desktop2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
  mobile2:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
  proofsDesktop:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
  proofsMobile:
    "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
};

// const dataArray = [
//   car_mirror_03,
//   car_no_mirror_03,
//   car_mirror_10,
//   car_no_mirror_10,
//   suv_mirror_03,
//   suv_no_mirror_03,
//   suv_mirror_10,
//   suv_no_mirror_10,
//   truck_mirror_03,
//   truck_no_mirror_03,
//   truck_mirror_10,
//   truck_no_mirror_10,
// ];

const genData = (incData: descriptionData) => {
  const data: descriptionData = incData;
  const lightGridDataWind: descriptionGridData = {
    toolkitGrid1:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-1.webp",
    toolkitGrid2:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-2.webp",
    toolkitGrid3:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-3.webp",
    toolkitGrid4:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-4.webp",
    waterproof:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-5.webp",
    fabric:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-6.webp",
    bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-7.webp",
    // protection2:
    //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
  };
  const lighGridDataHem: descriptionGridData = {
    toolkitGrid1:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-1.webp",
    toolkitGrid2:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-2.webp",
    toolkitGrid3:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-3.webp",
    toolkitGrid4:
      "https://icarcover.sfo3.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-4.webp",
    waterproof:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-5.webp",
    fabric:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-6.webp",
    bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-7.webp",
    // protection2:
    //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
  };
  const darkGridDataWind: descriptionGridData = {
    toolkitGrid1:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-1.webp",
    toolkitGrid2:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-2.webp",
    toolkitGrid3:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-3.webp",
    toolkitGrid4:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-4.webp",
    waterproof:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-5.webp",
    fabric:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-6.webp",
    bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-7.webp",
    // protection2:
    //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
  };

  const darkGridDataHem: descriptionGridData = {
    toolkitGrid1:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-1.webp",
    toolkitGrid2:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-2.webp",
    toolkitGrid3:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-3.webp",
    toolkitGrid4:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-bk/a-universal-bk-4.webp",
    waterproof:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-5.webp",
    fabric:
      "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-bk/a-universal-bk-5.webp",
    bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-bk/a-universal-bk-7.webp",
    // protection2:
    //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
  };

  const determineGridData = () => {
    switch (data.color) {
      case "LIGHT-WIND-STRAP":
        return lightGridDataWind;
      case "LIGHT-HEM-STRAP":
        return lighGridDataHem;
      case "DARK-WIND-STRAP":
        return darkGridDataWind;
      case "DARK-HEM-STRAP":
        return darkGridDataHem;
      default:
        return lightGridDataWind;
    }
  };

  const gridData: descriptionGridData = determineGridData();
  const nameStart = data.name;
  const directory = `./generatedHTML/${nameStart}.html`;

  const dropdownHtml = `
  <div class="dropdownContainer" onclick="toggleAnswer(${"${i}"})">
    <span class="dropdown">
      <div class="qBoxContainer">
        <div class="qBox">Q</div>
        <div class="aBox" id="aBox-${"${i}"}">A</div>
      </div>
      <div class="qText">
        ${"${question}"}
        <div id="aText-${"${i}"}" class="aText" >${"${qaPairs[i].answer}"}</div>
      </div>
      <svg id="qChevron-${"${i}"}" width="20" height="20" viewBox="0 0 20 20" class="chevron">
        <polygon id="qChevron-poly-${"${i}"}" points="0,6 20,6 10,18" class="chevronPoly" />
      </svg>
    </span>
  </div>
  `;

  const dropdownScript = `
  const container = document.getElementById("QAContainer");
  const qaPairs = [
    {
      question: "Why is this car cover a good choice?",
      answer:
        "Consider it the ultimate shield for your car. It's engineered to fight off rain, sun, and dust, keeping your car in pristine condition for years. A must-have for long-lasting car care!",
    },
    {
      question: "What special features does this cover have?",
      answer:
        "Beyond weather protection, our cover also guards against bird droppings and tree sap. Its breathable design prevents moisture buildup, ensuring top-tier care for your car.",
    },
    {
      question: "Is putting this cover on a hassle?",
      answer:
        "Not at all! Our cover is designed for hassle-free application and removal, offering straightforward protection for your vehicle.",
    },
    {
      question: "Will this fit my car?",
      answer:
        "You've found the right one! Our car cover is specially designed to offer a precise fit and ultimate protection for your vehicle.",
    },
    {
      question: "What if I'm not happy with it?",
      answer:
        "No worries! We prioritize your happiness. If you're not completely satisfied, you're covered by our 30-day return policy. Shop with confidence!",
    },
  ];

  for (let i = 0; i < qaPairs.length; i++) {
    const question = qaPairs[i].question;
    const dropdownHtml = ${"`"}${dropdownHtml}${"`"};
    container.innerHTML += dropdownHtml;
  }

  function toggleAnswer(index) {
    const answerText = document.getElementById(${"`"}${"aText-${index}"}${"`"});
    const answerBox = document.getElementById(${"`"}${"aBox-${index}"}${"`"});
    const chevron = document.getElementById(${"`"}${"qChevron-${index}"}${"`"});
    const chevronPoly = document.getElementById(${"`"}${"qChevron-poly-${index}"}${"`"});
    if (answerText.style.display === "none" || !answerText.style.display) {
      answerText.style.display = "block";
    } else {
      answerText.style.display = "none";
    }
    if (answerBox.style.display === "none" || !answerBox.style.display) {
      answerBox.style.display = "block";
    } else {
      answerBox.style.display = "none";
    }
    if (chevron.style.rotate === "180deg") {
      chevron.style.rotate = "0deg";
      chevronPoly.style.fill = "#4d4d4d";
    } else {
      chevron.style.rotate = "180deg";
      chevronPoly.style.fill = "#7cb8cf";
    }
  }
`;

  const template = `
  <!DOCTYPE html>
<html
  lang="en"
  style="display: flex; flex-direction: column; align-items: center"
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>iCarCover Description</title>
    <!-- <link href="https://fonts.cdnfonts.com/css/amazon-ember" rel="stylesheet" /> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        -webkit-text-size-adjust: 100%;
        margin: 15px;
        max-width: 1464px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        display: flex;
        flex-direction: column;
        flex: 1;
        /* font-family: Arial, sans-serif; */
        /* font-family: "Market Sans", Arial, sans-serif; */
        /* font-family: "Amazon Ember", Arial, sans-serif; */
        font-family: "Roboto", sans-serif;
        color: #0f1111;
        text-rendering: optimizelegibility;
        word-break: break-word;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: none;
      }
      p,
      h1 {
        font-weight: 700 !important;
        margin-top: 0;
        margin-bottom: 0;
      }
      h2 {
        font-weight: 700 !important;
        margin-top: 0;
        margin-bottom: 0;
      }
      ul {
        padding-left: 20px;
      }

      .numberListItem::before {
        content: none;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 20px;
        line-height: 1;
        color: #000;
      }

      li {
        margin: 5px 0;
      }
      li::marker {
        font-weight: 400;
      }

      li span {
        display: block;
      }

      .indentSection {
        padding-left: 20px;
        padding-right: 20px;
      }
      .videoContainer {
        margin-bottom: 110px;
      }
      .video {
        width: 100%;
        height: auto;
      }
      .topQualitySection {
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .topQualityHeader {
        color: white;
        font-size: 32px;
        padding-bottom: 20px;
        padding-top: 20px;
      }
      .topQualityText {
        color: white;
        font-size: 16px;
        line-height: 1.4em;
        font-weight: 300 !important;
        opacity: 1 !important;
        margin-bottom: 20px;
      }
      .subHeader {
        font-size: 32px;
        padding-top: 40px;
        padding-bottom: 40px;
        text-align: center;
        font-weight: 700;
      }

      .subHeader2 {
        text-align: center;
        font-size: 22px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 700;
      }

      .ultimateToolkitHeader {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 800;
      }
      .topQualityBanner {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 40px;
        background: black;
        opacity: 70%;
        max-width: 45%;
      }
      .mobileTopQualityBanner {
        display: none;
      }

      .completeKitSection {
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 40px;
      }
      .toolkitGrid {
        display: grid;
        gap: 40px;
        padding-left: 20px;
        padding-right: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      .toolkitGridItem {
        display: grid;
        grid-template-rows: 0.5fr 0.2fr 0.3fr;
        width: 100%;

        /* gap: 20px; */
      }
      .gridHeader {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.25em;
      }
      .gridDescription {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.4em;
        font-size-adjust: 100%;
      }

      .stayDryGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }
      .protectionGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }

      .stayDryItem {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* align-items: center; */
      }
      .stayDryItemHeader {
        font-size: 18px;
        font-weight: 700;
      }
      .stayDryDescriptionContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .stayDryItemDescription {
        font-size: 14px;
        line-height: 1.4em;
        font-weight: 700;
      }
      .imageSection {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .listContainer {
        font-size: 15px;
        font-weight: 700;
        padding: 20px;
      }
      .bulletList {
        list-style-type: disc;
        list-style-position: inside;
        padding: 0;
        margin: 0;
        width: 100%;
      }
      .numberList {
        display: flex;
        flex-direction: column;
        list-style-type: decimal;
        list-style-position: inside;
        padding: 0;
        margin: 0;
        width: 100%;
      }
      .listTitle {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .image {
        width: 100%;
        height: auto;
      }

      .QAContainer {
        display: flex;
        padding-top: 80px;
        padding-bottom: 80px;
        gap: 10px;
        width: 100%;
        flex-direction: column;
      }

      .dropdownContainer {
        transition: all 0.3s ease;
        cursor: pointer;
        padding: 10px;
        border: 2px solid #e6e6e6;
        border-radius: 3px;
      }
      .dropdown {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .dynamicImage {
        position: relative;
        display: flex;
        width: 100%;
      }
      .qBoxContainer {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .qBox {
        border-radius: 3px;
        background: #505050;
        color: white;
        line-height: 40px;
        font-size: 25px;
        width: 80px;
        height: 40px;
        text-align: center;
      }
      .qText {
        font-size: 20px;
      }
      .aBoxContainer {
        position: relative;
        display: flex;
        align-items: start;
        gap: 10px;
      }
      .aBox {
        z-index: -1;
        border-radius: 3px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        margin-top: -2px;
        background: #f5a623;
        color: white;
        line-height: 40px;
        font-size: 25px;
        min-width: 80px;
        min-height: 40px;
        width: 80px;
        height: 40px;
        text-align: center;
      }
      .aText {
        margin-top: 8px;
      }
      /* .chevron {
        align-self: center;
      } */
      .chevronPoly {
        fill: #4d4d4d;
      }
      .waterproofSnowproof {
        margin-top: 20px;
      }
    </style>
    <!-- Mobile Styling -->
    <style>
      @media (max-width: 600px) {
        body {
          -webkit-text-size-adjust: 100%;
          margin: 15px;
          max-width: 1464px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0;
          display: flex;
          flex-direction: column;
          flex: 1;
          /* font-family: Arial, sans-serif; */
          /* font-family: "Market Sans", Arial, sans-serif; */
          /* font-family: "Amazon Ember", Arial, sans-serif; */
          font-family: "Roboto", sans-serif;
          color: #0f1111;
          text-rendering: optimizelegibility;
          word-break: break-word;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: none;
        }
        p,
        h1 {
          margin-top: 0;
          margin-bottom: 0;
        }
        h2 {
          margin-top: 0;
          margin-bottom: 0;
        }
        ul {
          display: flex;
          flex-direction: column;
        }

        .numberListItem::before {
          content: none;
          position: absolute;
          left: 0;
          top: 0;
          font-size: 20px; /* Adjust this value as needed */
          line-height: 1; /* Ensures bullet point stays in the middle */
          color: #000; /* Bullet point color */
        }

        li {
          margin: 1px 0px;
          padding: 0;
        }

        li span {
          display: block;
          text-size-adjust: 100%;
        }
        .section {
          box-sizing: border-box;
        }
        .indentSection {
          padding-left: 20px;
          padding-right: 20px;
        }
        .videoContainer {
          margin-bottom: 60px;
        }
        .video {
          width: 100%;
          height: auto;
        }
        .topQualityHeader {
          color: white;
          font-size: 22px;
          padding-bottom: 20px;
          padding-top: 20px;
        }
        .topQualityText {
          color: white;
          font-weight: 300;
          font-size: 15px;
          margin-bottom: 20px;
          line-height: 21px;
        }
        .subHeader {
          font-size: 22px;
          margin-top: 20px;
          margin-bottom: 20px;
          line-height: 26.4px;
          padding: 0;
          font-weight: 800;
        }

        .subHeader2 {
          text-align: center;
          font-size: 22px;
          margin-top: 20px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .ultimateToolkitHeader {
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 20px;
          font-weight: 800;
        }
        .topQualityBanner {
          display: none;
          background: black;
          opacity: 1;
          max-width: 100%;
        }
        .mobileTopQualityBanner {
          display: block;
          background: black;
          opacity: 1;
          max-width: 100%;
        }
        .toolkitGrid {
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr 1fr;
          padding: 0;
        }
        .toolkitGridItem {
          display: grid;
          grid-template-rows: 0.1fr 0.1fr auto;
          width: 100%;
          gap: 10px;
        }
        .completeKitSection {
          padding-left: 20px;
          padding-right: 20px;
        }
        .gridHeader {
          margin: 0;
          margin-top: 10px;
          font-size: 15px;
          font-weight: 700;
        }
        .gridDescription {
          font-size: 12px;
          font-weight: 700;
        }

        .stayDryGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .protectionGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .stayDryDescriptionContainer {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 20px;
        }
        .stayDryItem {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
        .stayDryItemHeader {
          font-size: 15px;
          font-weight: 700;
        }
        .stayDryItemDescription {
          font-size: 12px;
          font-weight: 700;
        }
        .protectionItem {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .imageSection {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .listContainer {
          font-size: 15px;
          font-weight: 700;
          padding: 20px;
        }
        .bulletList {
          list-style-type: disc;
          list-style-position: inside;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .numberList {
          display: flex;
          flex-direction: column;
          list-style-type: decimal;
          list-style-position: inside;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .listTitle {
          font-size: 15px;
          margin-bottom: 30px;
        }
        .image {
          width: 100%;
          height: auto;
        }

        .QAContainer {
          display: flex;
          padding: 20px;
          gap: 10px;
          flex-direction: column;
        }

        .dropdownContainer {
          transition: all 0.3s ease;
          padding: 10px;
          border: 2px solid #e6e6e6;
          border-radius: 3px;
          cursor: pointer;
        }
        .dropdown {
          display: grid;
          grid-template-columns: auto 1fr auto;
          /* align-items: center; */
          cursor: pointer;
          gap: 10px;
        }
        .qBoxContainer {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .qBox {
          border-radius: 3px;
          background: #505050;
          color: white;
          line-height: 40px;
          font-size: 20px;
          width: 40px;
          aspect-ratio: 1/1;
          text-align: center;
        }
        .qText {
          font-size: 18px;
          font-weight: 300;
        }
        .aBoxContainer {
          position: relative;
          display: flex;
          align-items: start;
          gap: 10px;
        }
        .aBox {
          z-index: -1;
          border-radius: 3px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          margin-top: -2px;
          background: #f5a623;
          color: white;
          line-height: 40px;
          font-size: 20px;
          min-width: 40px;
          aspect-ratio: 1/1;
          text-align: center;
        }
        .aText {
          font-size: 14px;
          margin-top: 8px;
        }
        /* .chevron {
          align-self: start;
        } */
        .chevronPoly {
          fill: #4d4d4d;
        }
        .waterproofSnowproof {
          margin-top: 0;
        }
      }
    </style>
  </head>
  <body>
    <!-- <div class="videoContainer">
      <video
        class="video"
        controls=""
        muted=""
        loop=""
        preload="auto"
        preload="metadata"
        onplay=""
        src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4"
        poster="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/thumbnail-03-10-icarcover.webp"
      ></video>
    </div> -->
    <section class="topQualitySection">
      <picture class="dynamicImage">
        <source class="dynamicImage" srcset="" media="(min-width: 601px)" />
        <img
          class="dynamicImage"
          src=""
          alt="Top-Quality Weather Protection Car Cover"
        />
      </picture>

      <div class="topQualityBanner indentSection">
        <h2 class="topQualityHeader">
          Top-Quality Weather Protection Car Cover
        </h2>
        <p class="topQualityText">
          Select our car cover for unmatched all-weather protection. No more
          concerns; our cover guarantees your car's safety. Make a wise
          investment for enduring peace of mind.
        </p>
      </div>
      <div class="mobileTopQualityBanner indentSection">
        <h2 class="topQualityHeader">High-Quality Premium Car Cover</h2>
        <p class="topQualityText">
          Select our car cover for unmatched all-weather protection. No more
          concerns; our cover guarantees your car's safety. Make a wise
          investment for enduring peace of mind.
        </p>
      </div>
    </section>

    <div class="imageSection">
      <h2 class="subHeader">Superior Protection</h2>
      <picture class="dynamicImage">
        <source class="dynamicImage" srcset="" media="(min-width: 601px)" />
        <img
          class="dynamicImage"
          src=""
          alt="Keeps You Dry, Breathable by Design"
        />
      </picture>
    </div>
    <div class="completeKitSection imageSection">
      <h2 class="subHeader">Complete Car Cover Kit</h2>
      <div class="toolkitGrid">
        <div class="toolkitGridItem">
          <img src="" alt="Specialized Sealing Tape" class="image" />
          <h1 class="gridHeader">No Leaks, Assured</h1>

          <p class="gridDescription">
            Keep Dry! Our advanced sealing tape is designed to ensure your car
            remains entirely dry.
          </p>
        </div>
        <div class="toolkitGridItem">
          <img src="" alt="Reflective Stripe" class="image" />
          <h1 class="gridHeader">Visible at Night</h1>

          <p class="gridDescription">
            Easily Find Your Car, even in darkness! Our reflective stripe
            guarantees nighttime visibility.
          </p>
        </div>
        <div class="toolkitGridItem">
          <img src="" alt="Convenient Side Zipper" class="image" />
          <h1 class="gridHeader">Convenient Side Zipper</h1>

          <p class="gridDescription">
            Side zipper opening for quick entry of the car without removing the
            cover.
          </p>
        </div>
        <div class="toolkitGridItem">
          <img src="" alt="Secure Up to 60 MPH" class="image" />
          <h1 class="gridHeader">Secure Up to 60 MPH</h1>
          <p class="gridDescription">
            Concerned about 60 mph winds? The strap guarantees the cover stays
            securely in place!
          </p>
        </div>
      </div>
    </div>
    <h2 class="subHeader">Stay Dry & Enjoy Soft Touch Fabric</h2>
    <div class="stayDryGrid">
      <div class="stayDryItem">
        <img src="" alt="Waterproof Design" class="image" />
        <div class="stayDryDescriptionContainer">
          <h2 class="stayDryItemHeader">Waterproof Design</h2>
          <p class="stayDryItemDescription">
            Keep Your Car Completely Dry! Our cover is leak-proof and serves as
            a raincoat for your vehicle.
          </p>
        </div>
      </div>
      <div class="stayDryItem">
        <img src="" alt="Soft Interior Fabric" class="image" />
        <div class="stayDryDescriptionContainer">
          <h2 class="stayDryItemHeader">Soft Interior Fabric</h2>
          <p class="stayDryItemDescription">
            Gentle on Paint, Resilient Against Elements! Experience the perfect
            combination of comfort and toughness.
          </p>
        </div>
      </div>
    </div>
    <section>
      <h2 class="subHeader">Complete Car Protection Kit</h2>
      <div class="protectionGrid">
        <div class="protectionItem">
          <img src="" alt="Waterproof Carrying Bag" class="image" />
          <div class="listContainer">
            <h2 class="listTitle">Package Includes:</h2>
            <ul>
              <li><span>1x Car Cover</span></li>
              <li><span>1x Waterproof Storage Bag</span></li>
              <li>
                <span
                  >3x Weather Proof Straps for Front, Middle, and Rear
                </span>
              </li>
              <li>
                <span>1x Patch Kit for Antenna / 1x Pair of Grommets</span>
              </li>
              <li><span>1x Instructions</span></li>
            </ul>
          </div>
        </div>

        <div class="protectionItem">
          <img class="image" src="" alt="All-Weather Strap Instructions" />
          <div class="listContainer">
            <h2 class="listTitle">All-Weather Strap Usage:</h2>
            <ul style="list-style: decimal; margin: 0">
              <li class="numberListItem">
                <span>Attach the buckles on both sides of the car cover.</span>
              </li>
              <li class="numberListItem">
                <span
                  >Tighten the strap to ensure a secure fit for your car.
                </span>
              </li>
              <li class="numberListItem">
                <span>
                  Repeat this process for the front, middle, and rear sections.
                </span>
              </li>
              <li class="numberListItem">
                <span>Double-check to confirm all straps are secure. </span>
              </li>
              <li class="numberListItem">
                <span>Verify a snug fit.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- <picture class="dynamicImage">
      <source class="dynamicImage" srcset="" media="(min-width: 601px)" />
      <img
        class="dynamicImage waterproofSnowproof"
        src=""
        alt="Waterproof Snowproof Dustproof Windproof Anti-UV Checks"
      />
    </picture> -->
    <!-- ADD DROPDOWNS HERE -->
    <!-- <div id="QAContainer" class="QAContainer"></div> -->
    <!-- <div class="dropdownContainer">
      <span class="dropdown">
        <div class="qBoxContainer">
          <div class="qBox">Q</div>
          <div class="aBox">A</div>
        </div>
        <div class="qText">
          Why is this ${vehicle} cover a good choice?
          <div class="aText">
            Consider it the ultimate shield for your ${vehicle}. It's engineered
            to fight off rain, sun, and dust, keeping your ${vehicle} in
            pristine condition for years. A must-have for long-lasting
            ${vehicle} care!
          </div>
        </div>
      </span>
    </div> -->
    <!-- <div class="dropdownContainer">
      <span class="qBoxContainer">
        <div class="qBox">Q</div>
        <p class="qText">Why is this car cover a good choice?</p>
      </span>
      <span class="aBoxContainer">
        <div class="aBox">A</div>
        <p class="aText">
          Consider it the ultimate shield for your car. It's engineered to fight
          off rain, sun, and dust, keeping your car in pristine condition for
          years. A must-have for long-lasting car care!
        </p>
      </span>
    </div> -->
  </body>
</html>

  `;

  fs.writeFile(directory, template, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`${directory}.html generated successfully!`);
    }
  });
};

// genData(car_10_mirror_black);

// for (const obj of dataArray) {
//   genData(obj);
// }
