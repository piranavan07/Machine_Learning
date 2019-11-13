let mobilenet;
let classifier;
let puffin;
let video;
let label = '';
let rubikbtn;
let s8btn;
let trainbtn;

function modelReady() {
  console.log('Model is ready!');
//  mobilenet.predict(puffin, gotResults);
  //  mobilenet.predict(gotResults);
}

function videoReady() {
  console.log('video is ready!');

}

function whileTraining(loss) {
  //console.log(loss);
  if(loss == null){
    console.log('training complete!');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}


function imageReady(){
  image(puffin, 0, 0, width, height);


}

function gotResults(error, result){
  if (error) {
    console.error(error);
  } else {
  //  console.log(result);
    label = result;
    classifier.classify(gotResults);
  }
}
function setup() {
  createCanvas(640, 480);
//  puffin =createImg('image/cat.jpg', imageReady);
  video = createCapture(VIDEO);
  video.hide();
//  puffin.hide();
  background(0);

  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  rubikbtn = createButton('happy');
  rubikbtn.mousePressed(function() {
    classifier.addImage('happy');
  });
  s8btn = createButton('sad');
  s8btn.mousePressed(function() {
    classifier.addImage('sad');
  });

  trainbtn = createButton('Train');
  trainbtn.mousePressed(function() {
    classifier.train(whileTraining);
  });

}

function draw() {
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}
