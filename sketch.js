
let w = 1000;
let h = 700;
let img;
let imgThresholdPixels = [];

const controller = new Controller();
const matrix = new Matrix(controller.resolution);

function handleImageLoad() {
  console.log("image loaded...")

  matrix.buildCharacterCells(controller.resolution);
  img.filter(THRESHOLD, controller.threshold);

  w = img.width;
  h = img.height;
  console.log("image resolution", w, h);
  // img.resize(w, h);
  img.loadPixels();

  imgThresholdPixels = [];

  createCanvas(w, h);
  frameRate(15);

  let imgThresholdPixelsTemp = [];
  let count = 0;
  for (let i = 0; i < img.pixels.length; i++) {
    if (count === 1) {
      imgThresholdPixelsTemp.push(Math.floor((img.pixels[i - 1] + img.pixels[i] + img.pixels[i + 1]) / 3));
    }
    if (count === 3) {
      count = 0;
    }
    else {
      count++;
    }
  }

  imgThresholdPixels = []
  const chunkSize = w;
  for (let i = 0; i < imgThresholdPixelsTemp.length; i += chunkSize) {
    const chunk = imgThresholdPixelsTemp.slice(i, i + chunkSize);
    imgThresholdPixels.push(chunk);
  }

  loop();
}

function handleImageFail() {
  console.log("image failed to load...")
}

function setup() {

  if (!controller.uploadedImage) {
    noLoop();
    return;
  }

  img = loadImage(controller.uploadedImage, handleImageLoad, handleImageFail);
  
}

function draw() {
  // console.log(img.get(mouseX, mouseY));
  if (controller.onOff === true) {
    matrix.draw(controller.resolution, imgThresholdPixels);
  }
  else {
    image(img, 0, 0);
  }
}

