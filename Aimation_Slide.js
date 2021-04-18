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
  body {
  margin: 0;
  padding: 0;
  height: 100vh;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+50,f4f4f4+51,d8d8d8+100 */
  background: white;
  /* Old browsers */
  background: -moz-linear-gradient(top, white 0%, white 50%, #f4f4f4 51%, #d8d8d8 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, white), color-stop(50%, white), color-stop(51%, #f4f4f4), color-stop(100%, #d8d8d8));
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
.p_slider .left, .p_slider .right {
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
</style>
<body>
  <div class='p_slider'>
    <div class='p_slider__item'>
      <img src='http://pngimg.com/uploads/hummingbird/hummingbird_PNG32.png'>
    </div>
    <div class='p_slider__item'>
      <img src='http://www.pngall.com/wp-content/uploads/2016/04/Hummingbird-PNG-Image.png'>
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
  
</body>
<script>
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
