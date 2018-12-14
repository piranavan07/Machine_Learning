let mobilenet;
let puffin;
let video;
let label = ' ';

function modelReady() {
  console.log('Model is ready!');
//  mobilenet.predict(puffin, gotResults);
    mobilenet.predict(gotResults);
}

function imageReady(){
  image(puffin, 0, 0, width, height);


}

function gotResults(error, results){
  if (error) {
    console.error(error);

  } else {
    //console.log(results);
    label = results[0].className;
    let prob = results[0].probability;
    fill(0);
    textSize(64);
    text(label, 10, height - 50);
    //createP(label);
    //createP(prob*100+'%');
    mobilenet.predict(gotResults);

  }
}
function setup() {
  createCanvas(640, 480);
//  puffin =createImg('image/cat.jpg', imageReady);
  video = createCapture(VIDEO);
  video.hide();
//  puffin.hide();
  background(0);

  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}
