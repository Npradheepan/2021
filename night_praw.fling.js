<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <title>Document</title>
</head>
<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: black;
  background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
}
.p_slider {
  width: 200px;
  height: 339px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.p_slider .left,
.p_slider .right {
  cursor: pointer;
  position: absolute;
  z-index: 10;
}
.p_slider__item {
  position: absolute;
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition-duration: 1.5s;
  transition-property: transform, left, opacity;
}
.p_slider__item img {
  width: 200px;
  transform: scale(0);
  position: relative;
  -webkit-animation: scale_bounce 1.2s 0.4s forwards;
  animation: scale_bounce 1.2s 0.4s forwards;
  -webkit-box-reflect: below 4px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.2)));
}
.p_slider__item:nth-of-type(1) {
  transform: scale(0.6);
  left: -200px;
  -webkit-filter: blur(2px);
  opacity: 0.8;
  z-index: 1;
}
.p_slider__item:nth-of-type(2) {
  transform: scale(1);
  left: 0px;
  z-index: 2;
}
.p_slider__item:nth-of-type(3) {
  transform: scale(0.6);
  left: 200px;
  z-index: 1;
  -webkit-filter: blur(2px);
  opacity: 0.8;
}

.controls {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.controls .left {
  float: left;
  cursor: pointer;
  position: relative;
  left: 40px;
}
.controls .left img {
  transform: rotate(180deg);
  transition: all 0.4s;
  opacity: 0.2;
}
.controls .left img:hover {
  opacity: 1;
  cursor: pointer;
}
.controls .right {
  float: right;
  cursor: pointer;
  position: relative;
  right: 40px;
}
.controls .right img {
  transition: all 0.4s;
  opacity: 0.2;
}
.controls .right img:hover {
  opacity: 1;
  cursor: pointer;
}

@-webkit-keyframes scale_bounce {
  0% {
    transform: scale(0);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.98);
  }
  60% {
    transform: scale(1.012);
  }
  80% {
    transform: scale(0.995);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scale_bounce {
  0% {
    transform: scale(0);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.98);
  }
  60% {
    transform: scale(1.012);
  }
  80% {
    transform: scale(0.995);
  }
  100% {
    transform: scale(1);
  }
}


.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: colorChange 30s ease-in-out infinite;
  animation-fill-mode: both;
  mix-blend-mode: overlay;
}

@keyframes colorChange {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }
}

.landscape {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-image: url(https://openclipart.org/image/2400px/svg_to_png/250847/Trees-Landscape-Silhouette.png);*/
  background-image: url("data:image/png;base64,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");
  background-size: 1000px 250px;
  background-repeat: repeat-x;
  background-position: center bottom;
}

</style>
<body>
    <div class="landscape">
        <div class='p_slider'>
            <div class='p_slider__item'>
              <img src='http://pngimg.com/uploads/hummingbird/hummingbird_PNG32.png'>
            </div>
            <div class='p_slider__item'>
              <img src='http://pngimg.com/uploads/hummingbird/hummingbird_PNG32.png'>
            </div>
            <div class='p_slider__item'>
              <img src='http://pngimg.com/uploads/hummingbird/hummingbird_PNG25.png'>
            </div>
          </div>
          <div class='controls'>
            <div class='left'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrow.png'>
            </div>
            <div class='right'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrow.png'>
            </div>
          </div> 
    </div>
<div class="filter"></div>
<canvas id="canvas"></canvas>
</body>
<script>
function Star(id, x, y) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = Math.floor(Math.random() * 2) + 1;
  var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
  this.color = "rgba(255,255,255," + alpha + ")";
}

Star.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.shadowBlur = this.r * 2;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fill();
};

Star.prototype.move = function () {
  this.y -= 0.15;
  if (this.y <= -10) this.y = HEIGHT + 10;
  this.draw();
};

Star.prototype.die = function () {
  stars[this.id] = null;
  delete stars[this.id];
};

function Dot(id, x, y, r) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = Math.floor(Math.random() * 5) + 1;
  this.maxLinks = 2;
  this.speed = 0.5;
  this.a = 0.5;
  this.aReduction = 0.005;
  this.color = "rgba(255,255,255," + this.a + ")";
  this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";

  this.dir = Math.floor(Math.random() * 140) + 200;
}

Dot.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.shadowBlur = this.r * 2;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fill();
};

Dot.prototype.link = function () {
  if (this.id == 0) return;
  var previousDot1 = getPreviousDot(this.id, 1);
  var previousDot2 = getPreviousDot(this.id, 2);
  var previousDot3 = getPreviousDot(this.id, 3);
  if (!previousDot1) return;
  ctx.strokeStyle = this.linkColor;
  ctx.moveTo(previousDot1.x, previousDot1.y);
  ctx.beginPath();
  ctx.lineTo(this.x, this.y);
  if (previousDot2 != false) ctx.lineTo(previousDot2.x, previousDot2.y);
  if (previousDot3 != false) ctx.lineTo(previousDot3.x, previousDot3.y);
  ctx.stroke();
  ctx.closePath();
};

function getPreviousDot(id, stepback) {
  if (id == 0 || id - stepback < 0) return false;
  if (typeof dots[id - stepback] != "undefined") return dots[id - stepback];
  else return false; //getPreviousDot(id - stepback);
}

Dot.prototype.move = function () {
  this.a -= this.aReduction;
  if (this.a <= 0) {
    this.die();
    return;
  }
  this.color = "rgba(255,255,255," + this.a + ")";
  this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";
  (this.x = this.x + Math.cos(degToRad(this.dir)) * this.speed),
    (this.y = this.y + Math.sin(degToRad(this.dir)) * this.speed);

  this.draw();
  this.link();
};

Dot.prototype.die = function () {
  dots[this.id] = null;
  delete dots[this.id];
};

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  WIDTH,
  HEIGHT,
  mouseMoving = false,
  mouseMoveChecker,
  mouseX,
  mouseY,
  stars = [],
  initStarsPopulation = 80,
  dots = [],
  dotsMinDist = 2,
  maxDistFromCursor = 50;

setCanvasSize();
init();

function setCanvasSize() {
  (WIDTH = document.documentElement.clientWidth),
    (HEIGHT = document.documentElement.clientHeight);

  canvas.setAttribute("width", WIDTH);
  canvas.setAttribute("height", HEIGHT);
}

function init() {
  ctx.strokeStyle = "white";
  ctx.shadowColor = "white";
  for (var i = 0; i < initStarsPopulation; i++) {
    stars[i] = new Star(
      i,
      Math.floor(Math.random() * WIDTH),
      Math.floor(Math.random() * HEIGHT)
    );
    //stars[i].draw();
  }
  ctx.shadowBlur = 0;
  animate();
}

function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  for (var i in stars) {
    stars[i].move();
  }
  for (var i in dots) {
    dots[i].move();
  }
  drawIfMouseMoving();
  requestAnimationFrame(animate);
}

window.onmousemove = function (e) {
  mouseMoving = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  clearInterval(mouseMoveChecker);
  mouseMoveChecker = setTimeout(function () {
    mouseMoving = false;
  }, 100);
};

function drawIfMouseMoving() {
  if (!mouseMoving) return;

  if (dots.length == 0) {
    dots[0] = new Dot(0, mouseX, mouseY);
    dots[0].draw();
    return;
  }

  var previousDot = getPreviousDot(dots.length, 1);
  var prevX = previousDot.x;
  var prevY = previousDot.y;

  var diffX = Math.abs(prevX - mouseX);
  var diffY = Math.abs(prevY - mouseY);

  if (diffX < dotsMinDist || diffY < dotsMinDist) return;

  var xVariation = Math.random() > 0.5 ? -1 : 1;
  xVariation = xVariation * Math.floor(Math.random() * maxDistFromCursor) + 1;
  var yVariation = Math.random() > 0.5 ? -1 : 1;
  yVariation = yVariation * Math.floor(Math.random() * maxDistFromCursor) + 1;
  dots[dots.length] = new Dot(
    dots.length,
    mouseX + xVariation,
    mouseY + yVariation
  );
  dots[dots.length - 1].draw();
  dots[dots.length - 1].link();
}
//setInterval(drawIfMouseMoving, 17);

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

/*second*/
// 3D Slider for Reece

/*=================================================
INIT
===================================================*/

on = 0; // Init
time = 500; // Set the delay before the next click is accepted to 1 second
pos = 1; // Set init position
pos2 = 2;
pos3 = 3;

/*=================================================
CLICK FUNCTIONS
===================================================*/

// Right
$(".right").click(function () {
  rotateRight(); // Call
  on = 1; // Set delay on
});

// Left
$(".left").click(function () {
  rotateLeft(); // Call
  on = 1; // Set delay on
});

/*=================================================
AUTOPLAY
===================================================*/

play = setInterval(function () {
  rotateLeft();
}, 3000);

/*=================================================
ROTATE FUNCTIONS
===================================================*/

// Rotate left
function rotateLeft() {
  if (on == 0) {
    $(".p_slider__item:nth-of-type(" + pos + ")").animate(
      { left: "200px" },
      200
    );
    $(".p_slider__item:nth-of-type(" + pos + ")").css("z-index", "0");
    $(".p_slider__item:nth-of-type(" + pos2 + ")").animate(
      { left: "-200px" },
      200
    );
    setTimeout(function () {
      $(".p_slider__item:nth-of-type(" + pos2 + ")").css({
        transform: "scale(0.6)",
        opacity: "0.8",
        "webkit-filter": "blur(2px)",
        "z-index": "1"
      });
      pos++;
      pos2++;
      pos3++;
      if (pos > 3) {
        pos = 1;
      }
      if (pos2 > 3) {
        pos2 = 1;
      }
      if (pos3 > 3) {
        pos3 = 1;
      }
    }, 400);
    $(".p_slider__item:nth-of-type(" + pos3 + ")").animate(
      { left: "0px" },
      200
    );
    $(".p_slider__item:nth-of-type(" + pos3 + ")").css({
      transform: "scale(1)",
      opacity: "1",
      "webkit-filter": "blur(0px)",
      "z-index": "2"
    });
    setTimeout(function () {
      on = 0; // Accept clicks again
    }, time);
  }
}

// Rotate right
function rotateRight() {
  if (on == 0) {
    $(".p_slider__item:nth-of-type(" + pos3 + ")").animate(
      { left: "-200px" },
      200
    );
    $(".p_slider__item:nth-of-type(" + pos3 + ")").css("z-index", "0");
    $(".p_slider__item:nth-of-type(" + pos2 + ")").animate(
      { left: "200px" },
      200
    );
    setTimeout(function () {
      $(".p_slider__item:nth-of-type(" + pos2 + ")").css({
        transform: "scale(0.6)",
        opacity: "0.8",
        "webkit-filter": "blur(2px)",
        "z-index": "0"
      });
      pos--;
      pos2--;
      pos3--;
      if (pos < 1) {
        pos = 3;
      }
      if (pos2 < 1) {
        pos2 = 3;
      }
      if (pos3 < 1) {
        pos3 = 3;
      }
      console.log(pos, pos2, pos3);
    }, 400);
    $(".p_slider__item:nth-of-type(" + pos + ")").animate({ left: "0px" }, 200);
    $(".p_slider__item:nth-of-type(" + pos + ")").css({
      transform: "scale(1)",
      opacity: "1",
      "webkit-filter": "blur(0px)",
      "z-index": "1"
    });
    setTimeout(function () {
      on = 0; // Accept clicks again
    }, time);
  }
}

$(".p_slider__item img").hover(function () {
  clearInterval(play);
});
$(".p_slider__item img").mouseenter(function () {
  $(this).animate({ top: "-14px" }, 300);
});
$(".p_slider__item img").mouseout(function () {
  $(this).stop(true, false).animate({ top: "0px" }, 300);
  play = setInterval(function () {
    rotateLeft();
  }, 3000);
});

</script>
</html>
