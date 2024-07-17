var fs = require("fs");
var car_mirror_03 = {
    name: "car_mirror_03",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weatherproof-car-03-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weather-car-03-mobile-mirror.webp",
};
var car_no_mirror_03 = {
    name: "car_no_mirror_03",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-desktop-no-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-lifestyle-car-03-mobile-no-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-airvent-car-03-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weatherproof-car-03-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/a-weather-car-03-mobile-no-mirror.webp",
};
var car_mirror_10 = {
    name: "car_mirror_10",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-mobile-mirror.webp",
};
var car_no_mirror_10 = {
    name: "car_no_mirror_10",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-desktop-no-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-lifestyle-car-10-mobile-no-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-airvent-car-10-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/a-weatherproof-car-10-mobile-no-mirror.webp",
};
var suv_mirror_03 = {
    name: "suv_mirror_03",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weatherproof-suv-03-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weather-suv-03-mobile-mirror.webp",
};
var suv_no_mirror_03 = {
    name: "suv_no_mirror_03",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-desktop-no-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-lifestyle-suv-03-mobile-no-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-airvent-suv-03-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weatherproof-suv-03-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/03/a-weather-suv-03-mobile-no-mirror.webp",
};
var suv_mirror_10 = {
    name: "suv_mirror_10",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weatherproof-suv-10-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weather-suv-10-mobile-mirror.webp",
};
var suv_no_mirror_10 = {
    name: "suv_no_mirror_10",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-desktop-no-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-lifestyle-suv-10-mobile-no-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-airvent-suv-10-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weatherproof-suv-10-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/suv/10/a-weather-suv-10-mobile-no-mirror.webp",
};
var truck_mirror_03 = {
    name: "truck_mirror_03",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weatherproof-truck-03-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weather-truck-03-mobile-mirror.webp",
};
var truck_no_mirror_03 = {
    name: "truck_no_mirror_03",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-desktop-no-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-lifestyle-truck-03-mobile-no-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weatherproof-truck-03-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weather-truck-03-mobile-no-mirror.webp",
};
var truck_mirror_10 = {
    name: "truck_mirror_10",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-airvent-truck-10-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-airvent-truck-10-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-mirror.webp",
};
var car_10_mirror_black = {
    name: "car_10_mirror_black",
    color: "DARK-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-main-car-10-bk-desktop-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-main-car-10-bk-mobile-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-airvent-car-10-bk-desktop-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-airvent-car-10-bk-mobile-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-weatherproof-car-10-bk-desktop-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/bk/a-weatherproof-car-10-bk-mobile-mirror.webp",
};
var truck_no_mirror_10 = {
    name: "truck_no_mirror_10",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "High-Quality Premium Car Cover",
    video: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4",
    desktop1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-desktop-no-mirror.webp",
    mobile1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/main-truck-10-mobile-no-mirror.webp",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
};
var newNoMirror = {
    name: "7-1-24_no-mirror",
    color: "LIGHT-WIND-STRAP",
    title: "iCarCover Description",
    header: "Top-Quality Weather Protection Car Cover",
    desktop1: "https://advanceparts.sfo3.cdn.digitaloceanspaces.com/ebay/01_nm.png",
    mobile1: "https://advanceparts.sfo3.cdn.digitaloceanspaces.com/ebay/01_nm.png",
    desktop2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
    mobile2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
    proofsDesktop: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weatherproof-truck-10-desktop-no-mirror.webp",
    proofsMobile: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/10/a-weather-truck-10-mobile-no-mirror.webp",
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
var genData = function (incData) {
    var data = incData;
    var lightGridDataWind = {
        toolkitGrid1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-1.webp",
        toolkitGrid2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-2.webp",
        toolkitGrid3: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-3.webp",
        toolkitGrid4: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-4.webp",
        waterproof: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-5.webp",
        fabric: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-6.webp",
        bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-7.webp",
        // protection2:
        //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
    };
    var lighGridDataHem = {
        toolkitGrid1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-1.webp",
        toolkitGrid2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-2.webp",
        toolkitGrid3: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-3.webp",
        toolkitGrid4: "https://icarcover.sfo3.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-4.webp",
        waterproof: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-5.webp",
        fabric: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-6.webp",
        bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-gr/a-universal-gr-7.webp",
        // protection2:
        //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
    };
    var darkGridDataWind = {
        toolkitGrid1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-1.webp",
        toolkitGrid2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-2.webp",
        toolkitGrid3: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-3.webp",
        toolkitGrid4: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-4.webp",
        waterproof: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-5.webp",
        fabric: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-6.webp",
        bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-7.webp",
        // protection2:
        //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
    };
    var darkGridDataHem = {
        toolkitGrid1: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-1.webp",
        toolkitGrid2: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-2.webp",
        toolkitGrid3: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-3.webp",
        toolkitGrid4: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-bk/a-universal-bk-4.webp",
        waterproof: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/10/universal-bk/a-universal-10-bk-5.webp",
        fabric: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-bk/a-universal-bk-5.webp",
        bag: "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-15-bk/a-universal-bk-7.webp",
        // protection2:
        //   "https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/universal-gr/a-universal-gr-8.webp",
    };
    var determineGridData = function () {
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
    var gridData = determineGridData();
    var nameStart = data.name;
    var directory = "./generatedHTML/".concat(nameStart, ".html");
    var dropdownHtml = "\n  <div class=\"dropdownContainer\" onclick=\"toggleAnswer(".concat("${i}", ")\">\n    <span class=\"dropdown\">\n      <div class=\"qBoxContainer\">\n        <div class=\"qBox\">Q</div>\n        <div class=\"aBox\" id=\"aBox-").concat("${i}", "\">A</div>\n      </div>\n      <div class=\"qText\">\n        ").concat("${question}", "\n        <div id=\"aText-").concat("${i}", "\" class=\"aText\" >").concat("${qaPairs[i].answer}", "</div>\n      </div>\n      <svg id=\"qChevron-").concat("${i}", "\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" class=\"chevron\">\n        <polygon id=\"qChevron-poly-").concat("${i}", "\" points=\"0,6 20,6 10,18\" class=\"chevronPoly\" />\n      </svg>\n    </span>\n  </div>\n  ");
    var dropdownScript = "\n  const container = document.getElementById(\"QAContainer\");\n  const qaPairs = [\n    {\n      question: \"Why is this car cover a good choice?\",\n      answer:\n        \"Consider it the ultimate shield for your car. It's engineered to fight off rain, sun, and dust, keeping your car in pristine condition for years. A must-have for long-lasting car care!\",\n    },\n    {\n      question: \"What special features does this cover have?\",\n      answer:\n        \"Beyond weather protection, our cover also guards against bird droppings and tree sap. Its breathable design prevents moisture buildup, ensuring top-tier care for your car.\",\n    },\n    {\n      question: \"Is putting this cover on a hassle?\",\n      answer:\n        \"Not at all! Our cover is designed for hassle-free application and removal, offering straightforward protection for your vehicle.\",\n    },\n    {\n      question: \"Will this fit my car?\",\n      answer:\n        \"You've found the right one! Our car cover is specially designed to offer a precise fit and ultimate protection for your vehicle.\",\n    },\n    {\n      question: \"What if I'm not happy with it?\",\n      answer:\n        \"No worries! We prioritize your happiness. If you're not completely satisfied, you're covered by our 30-day return policy. Shop with confidence!\",\n    },\n  ];\n\n  for (let i = 0; i < qaPairs.length; i++) {\n    const question = qaPairs[i].question;\n    const dropdownHtml = ".concat("`").concat(dropdownHtml).concat("`", ";\n    container.innerHTML += dropdownHtml;\n  }\n\n  function toggleAnswer(index) {\n    const answerText = document.getElementById(").concat("`").concat("aText-${index}").concat("`", ");\n    const answerBox = document.getElementById(").concat("`").concat("aBox-${index}").concat("`", ");\n    const chevron = document.getElementById(").concat("`").concat("qChevron-${index}").concat("`", ");\n    const chevronPoly = document.getElementById(").concat("`").concat("qChevron-poly-${index}").concat("`", ");\n    if (answerText.style.display === \"none\" || !answerText.style.display) {\n      answerText.style.display = \"block\";\n    } else {\n      answerText.style.display = \"none\";\n    }\n    if (answerBox.style.display === \"none\" || !answerBox.style.display) {\n      answerBox.style.display = \"block\";\n    } else {\n      answerBox.style.display = \"none\";\n    }\n    if (chevron.style.rotate === \"180deg\") {\n      chevron.style.rotate = \"0deg\";\n      chevronPoly.style.fill = \"#4d4d4d\";\n    } else {\n      chevron.style.rotate = \"180deg\";\n      chevronPoly.style.fill = \"#7cb8cf\";\n    }\n  }\n");
    var template = "\n  <!DOCTYPE html>\n<html\n  lang=\"en\"\n  style=\"display: flex; flex-direction: column; align-items: center\"\n>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>iCarCover Description</title>\n    <!-- <link href=\"https://fonts.cdnfonts.com/css/amazon-ember\" rel=\"stylesheet\" /> -->\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <style>\n      body {\n        -webkit-text-size-adjust: 100%;\n        margin: 15px;\n        max-width: 1464px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        /* font-family: Arial, sans-serif; */\n        /* font-family: \"Market Sans\", Arial, sans-serif; */\n        /* font-family: \"Amazon Ember\", Arial, sans-serif; */\n        font-family: \"Roboto\", sans-serif;\n        color: #0f1111;\n        text-rendering: optimizelegibility;\n        word-break: break-word;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        text-shadow: none;\n      }\n      p,\n      h1 {\n        font-weight: 700 !important;\n        margin-top: 0;\n        margin-bottom: 0;\n      }\n      h2 {\n        font-weight: 700 !important;\n        margin-top: 0;\n        margin-bottom: 0;\n      }\n      ul {\n        padding-left: 20px;\n      }\n\n      .numberListItem::before {\n        content: none;\n        position: absolute;\n        left: 0;\n        top: 0;\n        font-size: 20px;\n        line-height: 1;\n        color: #000;\n      }\n\n      li {\n        margin: 5px 0;\n      }\n      li::marker {\n        font-weight: 400;\n      }\n\n      li span {\n        display: block;\n      }\n\n      .indentSection {\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n      .videoContainer {\n        margin-bottom: 110px;\n      }\n      .video {\n        width: 100%;\n        height: auto;\n      }\n      .topQualitySection {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n      }\n      .topQualityHeader {\n        color: white;\n        font-size: 32px;\n        padding-bottom: 20px;\n        padding-top: 20px;\n      }\n      .topQualityText {\n        color: white;\n        font-size: 16px;\n        line-height: 1.4em;\n        font-weight: 300 !important;\n        opacity: 1 !important;\n        margin-bottom: 20px;\n      }\n      .subHeader {\n        font-size: 32px;\n        padding-top: 40px;\n        padding-bottom: 40px;\n        text-align: center;\n        font-weight: 700;\n      }\n\n      .subHeader2 {\n        text-align: center;\n        font-size: 22px;\n        margin-top: 20px;\n        margin-bottom: 20px;\n        font-weight: 700;\n      }\n\n      .ultimateToolkitHeader {\n        font-size: 18px;\n        margin-top: 20px;\n        margin-bottom: 20px;\n        font-weight: 800;\n      }\n      .topQualityBanner {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: 40px;\n        background: black;\n        opacity: 70%;\n        max-width: 45%;\n      }\n      .mobileTopQualityBanner {\n        display: none;\n      }\n\n      .completeKitSection {\n        padding-left: 20px;\n        padding-right: 20px;\n        margin-bottom: 40px;\n      }\n      .toolkitGrid {\n        display: grid;\n        gap: 40px;\n        padding-left: 20px;\n        padding-right: 20px;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n      }\n      .toolkitGridItem {\n        display: grid;\n        grid-template-rows: 0.5fr 0.2fr 0.3fr;\n        width: 100%;\n\n        /* gap: 20px; */\n      }\n      .gridHeader {\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-size: 18px;\n        font-weight: 700;\n        font-size: 18px;\n        line-height: 1.25em;\n      }\n      .gridDescription {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.4em;\n        font-size-adjust: 100%;\n      }\n\n      .stayDryGrid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 80px;\n      }\n      .protectionGrid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 80px;\n      }\n\n      .stayDryItem {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        /* align-items: center; */\n      }\n      .stayDryItemHeader {\n        font-size: 18px;\n        font-weight: 700;\n      }\n      .stayDryDescriptionContainer {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        padding-top: 20px;\n        padding-bottom: 20px;\n      }\n      .stayDryItemDescription {\n        font-size: 14px;\n        line-height: 1.4em;\n        font-weight: 700;\n      }\n      .imageSection {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .listContainer {\n        font-size: 15px;\n        font-weight: 700;\n        padding: 20px;\n      }\n      .bulletList {\n        list-style-type: disc;\n        list-style-position: inside;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n      }\n      .numberList {\n        display: flex;\n        flex-direction: column;\n        list-style-type: decimal;\n        list-style-position: inside;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n      }\n      .listTitle {\n        font-size: 18px;\n        margin-bottom: 20px;\n      }\n      .image {\n        width: 100%;\n        height: auto;\n      }\n\n      .QAContainer {\n        display: flex;\n        padding-top: 80px;\n        padding-bottom: 80px;\n        gap: 10px;\n        width: 100%;\n        flex-direction: column;\n      }\n\n      .dropdownContainer {\n        transition: all 0.3s ease;\n        cursor: pointer;\n        padding: 10px;\n        border: 2px solid #e6e6e6;\n        border-radius: 3px;\n      }\n      .dropdown {\n        display: grid;\n        grid-template-columns: auto 1fr auto;\n        align-items: center;\n        gap: 10px;\n      }\n      .dynamicImage {\n        position: relative;\n        display: flex;\n        width: 100%;\n      }\n      .qBoxContainer {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n      }\n      .qBox {\n        border-radius: 3px;\n        background: #505050;\n        color: white;\n        line-height: 40px;\n        font-size: 25px;\n        width: 80px;\n        height: 40px;\n        text-align: center;\n      }\n      .qText {\n        font-size: 20px;\n      }\n      .aBoxContainer {\n        position: relative;\n        display: flex;\n        align-items: start;\n        gap: 10px;\n      }\n      .aBox {\n        z-index: -1;\n        border-radius: 3px;\n        border-top-left-radius: 0px;\n        border-top-right-radius: 0px;\n        margin-top: -2px;\n        background: #f5a623;\n        color: white;\n        line-height: 40px;\n        font-size: 25px;\n        min-width: 80px;\n        min-height: 40px;\n        width: 80px;\n        height: 40px;\n        text-align: center;\n      }\n      .aText {\n        margin-top: 8px;\n      }\n      /* .chevron {\n        align-self: center;\n      } */\n      .chevronPoly {\n        fill: #4d4d4d;\n      }\n      .waterproofSnowproof {\n        margin-top: 20px;\n      }\n    </style>\n    <!-- Mobile Styling -->\n    <style>\n      @media (max-width: 600px) {\n        body {\n          -webkit-text-size-adjust: 100%;\n          margin: 15px;\n          max-width: 1464px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 0;\n          display: flex;\n          flex-direction: column;\n          flex: 1;\n          /* font-family: Arial, sans-serif; */\n          /* font-family: \"Market Sans\", Arial, sans-serif; */\n          /* font-family: \"Amazon Ember\", Arial, sans-serif; */\n          font-family: \"Roboto\", sans-serif;\n          color: #0f1111;\n          text-rendering: optimizelegibility;\n          word-break: break-word;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          text-shadow: none;\n        }\n        p,\n        h1 {\n          margin-top: 0;\n          margin-bottom: 0;\n        }\n        h2 {\n          margin-top: 0;\n          margin-bottom: 0;\n        }\n        ul {\n          display: flex;\n          flex-direction: column;\n        }\n\n        .numberListItem::before {\n          content: none;\n          position: absolute;\n          left: 0;\n          top: 0;\n          font-size: 20px; /* Adjust this value as needed */\n          line-height: 1; /* Ensures bullet point stays in the middle */\n          color: #000; /* Bullet point color */\n        }\n\n        li {\n          margin: 1px 0px;\n          padding: 0;\n        }\n\n        li span {\n          display: block;\n          text-size-adjust: 100%;\n        }\n        .section {\n          box-sizing: border-box;\n        }\n        .indentSection {\n          padding-left: 20px;\n          padding-right: 20px;\n        }\n        .videoContainer {\n          margin-bottom: 60px;\n        }\n        .video {\n          width: 100%;\n          height: auto;\n        }\n        .topQualityHeader {\n          color: white;\n          font-size: 22px;\n          padding-bottom: 20px;\n          padding-top: 20px;\n        }\n        .topQualityText {\n          color: white;\n          font-weight: 300;\n          font-size: 15px;\n          margin-bottom: 20px;\n          line-height: 21px;\n        }\n        .subHeader {\n          font-size: 22px;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          line-height: 26.4px;\n          padding: 0;\n          font-weight: 800;\n        }\n\n        .subHeader2 {\n          text-align: center;\n          font-size: 22px;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          font-weight: 700;\n        }\n\n        .ultimateToolkitHeader {\n          font-size: 18px;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          font-weight: 800;\n        }\n        .topQualityBanner {\n          display: none;\n          background: black;\n          opacity: 1;\n          max-width: 100%;\n        }\n        .mobileTopQualityBanner {\n          display: block;\n          background: black;\n          opacity: 1;\n          max-width: 100%;\n        }\n        .toolkitGrid {\n          display: grid;\n          gap: 20px;\n          grid-template-columns: 1fr 1fr;\n          padding: 0;\n        }\n        .toolkitGridItem {\n          display: grid;\n          grid-template-rows: 0.1fr 0.1fr auto;\n          width: 100%;\n          gap: 10px;\n        }\n        .completeKitSection {\n          padding-left: 20px;\n          padding-right: 20px;\n        }\n        .gridHeader {\n          margin: 0;\n          margin-top: 10px;\n          font-size: 15px;\n          font-weight: 700;\n        }\n        .gridDescription {\n          font-size: 12px;\n          font-weight: 700;\n        }\n\n        .stayDryGrid {\n          display: grid;\n          grid-template-columns: 1fr;\n          gap: 0;\n        }\n        .protectionGrid {\n          display: grid;\n          grid-template-columns: 1fr;\n          gap: 0;\n        }\n\n        .stayDryDescriptionContainer {\n          display: flex;\n          flex-direction: column;\n          gap: 14px;\n          padding: 20px;\n        }\n        .stayDryItem {\n          display: flex;\n          flex-direction: column;\n          width: 100%;\n          align-items: center;\n        }\n        .stayDryItemHeader {\n          font-size: 15px;\n          font-weight: 700;\n        }\n        .stayDryItemDescription {\n          font-size: 12px;\n          font-weight: 700;\n        }\n        .protectionItem {\n          display: flex;\n          flex-direction: column;\n          width: 100%;\n        }\n        .imageSection {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        .listContainer {\n          font-size: 15px;\n          font-weight: 700;\n          padding: 20px;\n        }\n        .bulletList {\n          list-style-type: disc;\n          list-style-position: inside;\n          padding: 0;\n          margin: 0;\n          width: 100%;\n        }\n        .numberList {\n          display: flex;\n          flex-direction: column;\n          list-style-type: decimal;\n          list-style-position: inside;\n          padding: 0;\n          margin: 0;\n          width: 100%;\n        }\n        .listTitle {\n          font-size: 15px;\n          margin-bottom: 30px;\n        }\n        .image {\n          width: 100%;\n          height: auto;\n        }\n\n        .QAContainer {\n          display: flex;\n          padding: 20px;\n          gap: 10px;\n          flex-direction: column;\n        }\n\n        .dropdownContainer {\n          transition: all 0.3s ease;\n          padding: 10px;\n          border: 2px solid #e6e6e6;\n          border-radius: 3px;\n          cursor: pointer;\n        }\n        .dropdown {\n          display: grid;\n          grid-template-columns: auto 1fr auto;\n          /* align-items: center; */\n          cursor: pointer;\n          gap: 10px;\n        }\n        .qBoxContainer {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n        }\n        .qBox {\n          border-radius: 3px;\n          background: #505050;\n          color: white;\n          line-height: 40px;\n          font-size: 20px;\n          width: 40px;\n          aspect-ratio: 1/1;\n          text-align: center;\n        }\n        .qText {\n          font-size: 18px;\n          font-weight: 300;\n        }\n        .aBoxContainer {\n          position: relative;\n          display: flex;\n          align-items: start;\n          gap: 10px;\n        }\n        .aBox {\n          z-index: -1;\n          border-radius: 3px;\n          border-top-left-radius: 0px;\n          border-top-right-radius: 0px;\n          margin-top: -2px;\n          background: #f5a623;\n          color: white;\n          line-height: 40px;\n          font-size: 20px;\n          min-width: 40px;\n          aspect-ratio: 1/1;\n          text-align: center;\n        }\n        .aText {\n          font-size: 14px;\n          margin-top: 8px;\n        }\n        /* .chevron {\n          align-self: start;\n        } */\n        .chevronPoly {\n          fill: #4d4d4d;\n        }\n        .waterproofSnowproof {\n          margin-top: 0;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <!-- <div class=\"videoContainer\">\n      <video\n        class=\"video\"\n        controls=\"\"\n        muted=\"\"\n        loop=\"\"\n        preload=\"auto\"\n        preload=\"metadata\"\n        onplay=\"\"\n        src=\"https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4\"\n        poster=\"https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/thumbnail-03-10-icarcover.webp\"\n      ></video>\n    </div> -->\n    <section class=\"topQualitySection\">\n      <picture class=\"dynamicImage\">\n        <source class=\"dynamicImage\" srcset=\"\" media=\"(min-width: 601px)\" />\n        <img\n          class=\"dynamicImage\"\n          src=\"\"\n          alt=\"Top-Quality Weather Protection Car Cover\"\n        />\n      </picture>\n\n      <div class=\"topQualityBanner indentSection\">\n        <h2 class=\"topQualityHeader\">\n          Top-Quality Weather Protection Car Cover\n        </h2>\n        <p class=\"topQualityText\">\n          Select our car cover for unmatched all-weather protection. No more\n          concerns; our cover guarantees your car's safety. Make a wise\n          investment for enduring peace of mind.\n        </p>\n      </div>\n      <div class=\"mobileTopQualityBanner indentSection\">\n        <h2 class=\"topQualityHeader\">High-Quality Premium Car Cover</h2>\n        <p class=\"topQualityText\">\n          Select our car cover for unmatched all-weather protection. No more\n          concerns; our cover guarantees your car's safety. Make a wise\n          investment for enduring peace of mind.\n        </p>\n      </div>\n    </section>\n\n    <div class=\"imageSection\">\n      <h2 class=\"subHeader\">Superior Protection</h2>\n      <picture class=\"dynamicImage\">\n        <source class=\"dynamicImage\" srcset=\"\" media=\"(min-width: 601px)\" />\n        <img\n          class=\"dynamicImage\"\n          src=\"\"\n          alt=\"Keeps You Dry, Breathable by Design\"\n        />\n      </picture>\n    </div>\n    <div class=\"completeKitSection imageSection\">\n      <h2 class=\"subHeader\">Complete Car Cover Kit</h2>\n      <div class=\"toolkitGrid\">\n        <div class=\"toolkitGridItem\">\n          <img src=\"\" alt=\"Specialized Sealing Tape\" class=\"image\" />\n          <h1 class=\"gridHeader\">No Leaks, Assured</h1>\n\n          <p class=\"gridDescription\">\n            Keep Dry! Our advanced sealing tape is designed to ensure your car\n            remains entirely dry.\n          </p>\n        </div>\n        <div class=\"toolkitGridItem\">\n          <img src=\"\" alt=\"Reflective Stripe\" class=\"image\" />\n          <h1 class=\"gridHeader\">Visible at Night</h1>\n\n          <p class=\"gridDescription\">\n            Easily Find Your Car, even in darkness! Our reflective stripe\n            guarantees nighttime visibility.\n          </p>\n        </div>\n        <div class=\"toolkitGridItem\">\n          <img src=\"\" alt=\"Convenient Side Zipper\" class=\"image\" />\n          <h1 class=\"gridHeader\">Convenient Side Zipper</h1>\n\n          <p class=\"gridDescription\">\n            Side zipper opening for quick entry of the car without removing the\n            cover.\n          </p>\n        </div>\n        <div class=\"toolkitGridItem\">\n          <img src=\"\" alt=\"Secure Up to 60 MPH\" class=\"image\" />\n          <h1 class=\"gridHeader\">Secure Up to 60 MPH</h1>\n          <p class=\"gridDescription\">\n            Concerned about 60 mph winds? The strap guarantees the cover stays\n            securely in place!\n          </p>\n        </div>\n      </div>\n    </div>\n    <h2 class=\"subHeader\">Stay Dry & Enjoy Soft Touch Fabric</h2>\n    <div class=\"stayDryGrid\">\n      <div class=\"stayDryItem\">\n        <img src=\"\" alt=\"Waterproof Design\" class=\"image\" />\n        <div class=\"stayDryDescriptionContainer\">\n          <h2 class=\"stayDryItemHeader\">Waterproof Design</h2>\n          <p class=\"stayDryItemDescription\">\n            Keep Your Car Completely Dry! Our cover is leak-proof and serves as\n            a raincoat for your vehicle.\n          </p>\n        </div>\n      </div>\n      <div class=\"stayDryItem\">\n        <img src=\"\" alt=\"Soft Interior Fabric\" class=\"image\" />\n        <div class=\"stayDryDescriptionContainer\">\n          <h2 class=\"stayDryItemHeader\">Soft Interior Fabric</h2>\n          <p class=\"stayDryItemDescription\">\n            Gentle on Paint, Resilient Against Elements! Experience the perfect\n            combination of comfort and toughness.\n          </p>\n        </div>\n      </div>\n    </div>\n    <section>\n      <h2 class=\"subHeader\">Complete Car Protection Kit</h2>\n      <div class=\"protectionGrid\">\n        <div class=\"protectionItem\">\n          <img src=\"\" alt=\"Waterproof Carrying Bag\" class=\"image\" />\n          <div class=\"listContainer\">\n            <h2 class=\"listTitle\">Package Includes:</h2>\n            <ul>\n              <li><span>1x Car Cover</span></li>\n              <li><span>1x Waterproof Storage Bag</span></li>\n              <li>\n                <span\n                  >3x Weather Proof Straps for Front, Middle, and Rear\n                </span>\n              </li>\n              <li>\n                <span>1x Patch Kit for Antenna / 1x Pair of Grommets</span>\n              </li>\n              <li><span>1x Instructions</span></li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"protectionItem\">\n          <img class=\"image\" src=\"\" alt=\"All-Weather Strap Instructions\" />\n          <div class=\"listContainer\">\n            <h2 class=\"listTitle\">All-Weather Strap Usage:</h2>\n            <ul style=\"list-style: decimal; margin: 0\">\n              <li class=\"numberListItem\">\n                <span>Attach the buckles on both sides of the car cover.</span>\n              </li>\n              <li class=\"numberListItem\">\n                <span\n                  >Tighten the strap to ensure a secure fit for your car.\n                </span>\n              </li>\n              <li class=\"numberListItem\">\n                <span>\n                  Repeat this process for the front, middle, and rear sections.\n                </span>\n              </li>\n              <li class=\"numberListItem\">\n                <span>Double-check to confirm all straps are secure. </span>\n              </li>\n              <li class=\"numberListItem\">\n                <span>Verify a snug fit.</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- <picture class=\"dynamicImage\">\n      <source class=\"dynamicImage\" srcset=\"\" media=\"(min-width: 601px)\" />\n      <img\n        class=\"dynamicImage waterproofSnowproof\"\n        src=\"\"\n        alt=\"Waterproof Snowproof Dustproof Windproof Anti-UV Checks\"\n      />\n    </picture> -->\n    <!-- ADD DROPDOWNS HERE -->\n    <!-- <div id=\"QAContainer\" class=\"QAContainer\"></div> -->\n    <!-- <div class=\"dropdownContainer\">\n      <span class=\"dropdown\">\n        <div class=\"qBoxContainer\">\n          <div class=\"qBox\">Q</div>\n          <div class=\"aBox\">A</div>\n        </div>\n        <div class=\"qText\">\n          Why is this ".concat(vehicle, " cover a good choice?\n          <div class=\"aText\">\n            Consider it the ultimate shield for your ").concat(vehicle, ". It's engineered\n            to fight off rain, sun, and dust, keeping your ").concat(vehicle, " in\n            pristine condition for years. A must-have for long-lasting\n            ").concat(vehicle, " care!\n          </div>\n        </div>\n      </span>\n    </div> -->\n    <!-- <div class=\"dropdownContainer\">\n      <span class=\"qBoxContainer\">\n        <div class=\"qBox\">Q</div>\n        <p class=\"qText\">Why is this car cover a good choice?</p>\n      </span>\n      <span class=\"aBoxContainer\">\n        <div class=\"aBox\">A</div>\n        <p class=\"aText\">\n          Consider it the ultimate shield for your car. It's engineered to fight\n          off rain, sun, and dust, keeping your car in pristine condition for\n          years. A must-have for long-lasting car care!\n        </p>\n      </span>\n    </div> -->\n  </body>\n</html>\n\n  ");
    fs.writeFile(directory, template, function (err) {
        if (err) {
            console.error("Error writing file:", err);
        }
        else {
            console.log("".concat(directory, ".html generated successfully!"));
        }
    });
};
// genData(car_10_mirror_black);
// for (const obj of dataArray) {
//   genData(obj);
// }
