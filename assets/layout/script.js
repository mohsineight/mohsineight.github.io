let model;
let out;
var r1,g1,b1 = 0;
var r2,g2,b2 = 0;
var r3,g3,b3 = 0;
var r4,g4,b4 = 0;
var r5,g5,b5 = 0;
var temp;
var startTime, endTime;

function hover(element) {
  element.setAttribute('src', 'assets/images/shades-logo.png');
}

function unhover(element) {
  element.setAttribute('src', 'assets/images/shades-logo-hover.png');
}

function buttonunhover() {
  document.body.style.backgroundImage = "url('assets/images/background-grey.jpg')";
}

function buttonhover() {
  document.body.style.backgroundImage = "url('assets/images/background.jpg')";
}
document.addEventListener('DOMContentLoaded', function () {
  docheight = document.body.scrollHeight;
});

function imghover() {
  gen_img.setAttribute('src', 'rgb(255,0,0)');
}

async function loadmodel() {
  startTime = new Date();
  model = await tf.loadLayersModel("assets/tfjs_model/model.json");
  var ingan = tf.randomUniform([1, 5]);
  out = model.predict(ingan);
  out = await out.array();
  r1 = Math.round(out[0][0] * 255);
  g1 = Math.round(out[0][1] * 255);
  b1 = Math.round(out[0][2] * 255);

  r2 = Math.round(out[0][3] * 255);
  g2 = Math.round(out[0][4] * 255);
  b2 = Math.round(out[0][5] * 255);

  r3 = Math.round(out[0][6] * 255);
  g3 = Math.round(out[0][7] * 255);
  b3 = Math.round(out[0][8] * 255);

  r4 = Math.round(out[0][9] * 255);
  g4 = Math.round(out[0][10] * 255);
  b4 = Math.round(out[0][11] * 255);

  r5 = Math.round(out[0][12] * 255);
  g5 = Math.round(out[0][13] * 255);
  b5 = Math.round(out[0][14] * 255);

  temp = document.getElementsByClassName("gen_img");

  temp[0].style.background = `rgb(${r1},${g1},${b1})`;
  temp[1].style.background = `rgb(${r2},${g2},${b2})`;
  temp[2].style.background = `rgb(${r3},${g3},${b3})`;
  temp[3].style.background = `rgb(${r4},${g4},${b4})`;
  temp[4].style.background = `rgb(${r5},${g5},${b5})`;
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

function buttonclick() {
    loadmodel();
    temp = document.getElementsByClassName("gen_img");
    for(var i=0; i<5; i++){
      temp[i].style.opacity = "100%"
    }
}
