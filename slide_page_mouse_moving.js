<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenLite.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/CSSPlugin.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/easing/EasePack.min.js"></script>
  <title>Document</title>
</head>
<style>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  background: #000;
}

.ws-pages {
  overflow: hidden;
  position: relative;
  height: 100vh;
}
.ws-bgs {
  position: relative;
  height: 100%;
}
.ws-bg {
  display: flex;
  height: 100%;
  background-size: cover;
  background-position: center center;
}
.ws-pages.s--ready .ws-bg {
  background: none;
}
.ws-bg__part {
  overflow: hidden;
  position: relative;
  height: 100%;
  cursor: -webkit-grab;
  cursor: grab;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ws-bg__part-inner {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-position: center center;
}
.ws-bg:nth-child(1) {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-4.jpg);
}
.ws-bg:nth-child(1) .ws-bg__part-inner {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-4.jpg);
}
.ws-bg:nth-child(2) {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-5.jpg);
}
.ws-bg:nth-child(2) .ws-bg__part-inner {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-5.jpg);
}
.ws-bg:nth-child(3) {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-6.jpg);
}
.ws-bg:nth-child(3) .ws-bg__part-inner {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-6.jpg);
}
.ws-bg:nth-child(4) {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-7.jpg);
}
.ws-bg:nth-child(4) .ws-bg__part-inner {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-7.jpg);
}
.ws-bg:nth-child(5) {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-8.jpg);
}
.ws-bg:nth-child(5) .ws-bg__part-inner {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-8.jpg);
}
.ws-text {
  overflow: hidden;
  position: absolute;
  left: 15%;
  top: 50%;
  width: 70%;
  height: 50px;
  margin-top: -25px;
  pointer-events: none;
}
.ws-text__heading {
  display: flex;
  justify-content: space-between;
  height: 100%;
  font-size: 30px;
  line-height: 50px;
  color: #fff;
}
</style>
<body>
  <div class="ws-pages">
    <div class="ws-bgs">
      <div class="ws-bg"></div>
      <div class="ws-bg"></div>
      <div class="ws-bg"></div>
      <div class="ws-bg"></div>
      <div class="ws-bg"></div>
    </div>
    <div class="ws-text">
      <h2 class="ws-text__heading">
        <span>Page 1</span>
        <span>Drag image parts or just scroll down</span>
      </h2>
      <h2 class="ws-text__heading">
        <span>Page 2</span>
      </h2>
      <h2 class="ws-text__heading">
        <span>Page 3</span>
        <span>Still nothing</span>
      </h2>
      <h2 class="ws-text__heading">
        <span>Page 4</span>
      </h2>
      <h2 class="ws-text__heading">
        <span>Page 5</span>
        <span>The end</span>
      </h2>
    </div>
  </div>
</body>
<script>
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback){
    window.setTimeout(callback, 1000 / 60);
  };
})();

function rafThrottle(fn) {
  var busy = false;
  return function() {
    if (busy) return;
    busy = true;
    fn.apply(this, arguments);
    requestAnimFrame(function() {
      busy = false;
    });
  };
};

$(document).ready(function() {

  var $wsPages = $(".ws-pages");
  var $headings = $(".ws-text__heading");
  var bgParts = 24;
  var staggerVal = 65;
  var staggerStep = 4;
  var textH = $(".ws-text").height();
  var winW = $(window).width();
  var winH = $(window).height();
  var curPage = 1;
  var numOfPages = $(".ws-bg").length;
  var changeAT = 0.5;
  var waveStartDelay = 0.2;
  var waveStagger = 0.013;
  var waveBlocked = false;
  var index = 1;
  var startY = 0;
  var deltaY = 0;
  var headingsY = 0;
  var $parts;

  function initBgs() {
    var arr = [];
    var partW = 100 / bgParts;

    for (var i = 1; i <= bgParts; i++) {
      var $part = $('<div class="ws-bg__part">');
      var $inner = $('<div class="ws-bg__part-inner">');
      var innerLeft = 100 / bgParts * (1 - i);

      $inner.css("left", innerLeft + "vw");
      $part.append($inner);
      $part.addClass("ws-bg__part-" + i).width(partW + "%");
      arr.push($part);
    }

    $(".ws-bg").append(arr);
    $wsPages.addClass("s--ready");
    $parts = $(".ws-bg__part");
  };

  initBgs();

  function changePages() {
    var y = (curPage - 1) * winH * -1;
    var textY = textH * (curPage - 1) * -1;
    var leftMax = index - 1;
    var rightMin = index + 1;

    TweenLite.to(".ws-bg__part-" + index, changeAT, {y: y});

    for (var i = leftMax; i > 0; i--) {
      var d = (index - i) * waveStagger;
      TweenLite.to(".ws-bg__part-" + i, changeAT - d, {y: y, delay: d});
    }

    for (var j = rightMin; j <= bgParts; j++) {
      var d = (j - index) * waveStagger;
      TweenLite.to(".ws-bg__part-" + j, changeAT - d, {y: y, delay: d});
    }

    TweenLite.to($headings, changeAT, {y: textY});
  };

  function waveChange() {
    waveBlocked = true;
    var y = (curPage - 1) * winH * -1;
    var textY = textH * (curPage - 1) * -1;

    for (var i = 1; i <= bgParts; i++) {
      var d = (i - 1) * waveStagger + waveStartDelay;
      TweenLite.to(".ws-bg__part-" + i, changeAT, {y: y, delay: d});
    }

    TweenLite.to($headings, changeAT, {y: textY, delay: d});

    var delay = (changeAT + waveStagger * (bgParts - 1)) * 1000;
    setTimeout(function() {
      waveBlocked = false;
    }, delay);
  };

  function navigateUp() {
    if (curPage > 1) curPage--;
  };

  function navigateDown() {
    if (curPage < numOfPages) curPage++;
  };

  function navigateWaveUp() {
    if (curPage === 1) return;
    curPage--;
    waveChange();
  };

  function navigateWaveDown() {
    if (curPage === numOfPages) return;
    curPage++;
    waveChange();
  };

  function movePart($part, y) {
    var y = y - (curPage - 1) * winH;
    var headY = headingsY - (curPage - 1) * textH;
    TweenLite.to($part, changeAT, {y: y, ease: Back.easeOut.config(4)});
    TweenLite.to($headings, changeAT, {y: headY});
  };

  function moveParts(y, index) {
    var leftMax = index - 1;
    var rightMin = index + 1;
    var stagLeft = 0;
    var stagRight = 0;
    var stagStepL = 0;
    var stagStepR = 0;
    var sign = (y > 0) ? -1 : 1;

    movePart(".ws-bg__part-" + index, y);

    for (var i = leftMax; i > 0; i--) {
      var step = index - i;
      var sVal = staggerVal - stagStepL;
      stagStepL += (step <= 15) ? staggerStep : 1;
      if (sVal < 0) sVal = 0;
      stagLeft += sVal;
      var nextY = y + stagLeft * sign;
      if (Math.abs(y) < Math.abs(stagLeft)) nextY = 0;
      movePart(".ws-bg__part-" + i, nextY);
    }

    for (var j = rightMin; j <= bgParts; j++) {
      var step = j - index;
      var sVal = staggerVal - stagStepR;
      stagStepR += (step <= 15) ? staggerStep : 1;
      if (sVal < 0) sVal = 0;
      stagRight += sVal;
      var nextY = y + stagRight * sign;
      if (Math.abs(y) < Math.abs(stagRight)) nextY = 0;
      movePart(".ws-bg__part-" + j, nextY);
    }
  };

  var mousemoveHandler = rafThrottle(function(e) {
    var y = e.pageY;
    var x = e.pageX;
    index = Math.ceil(x / winW * bgParts);

    deltaY = y - startY;
    headingsY = textH * deltaY / winH;
    moveParts(deltaY, index);
  });

  var touchmoveHandler = rafThrottle(function(e) {
    e.preventDefault();
    var y = e.originalEvent.touches[0].pageY;
    var x = e.originalEvent.touches[0].pageX;
    index = Math.ceil(x / winW * bgParts);

    deltaY = y - startY;
    headingsY = textH * deltaY / winH;
    moveParts(deltaY, index);
  });

  var swipeEndHandler = function() {
    $(document).off("mousemove", mousemoveHandler);
    $(document).off("touchmove", touchmoveHandler);
    $(document).off("mouseup touchend", swipeEndHandler);

    if (!deltaY) return;

    if (deltaY / winH >= 0.5) navigateUp();
    if (deltaY / winH <= -0.5) navigateDown();
    changePages();
  };

  $(document).on("mousedown touchstart", ".ws-bg__part", function(e) {
    startY = e.pageY || e.originalEvent.touches[0].pageY;
    deltaY = 0;

    $(document).on("mousemove", mousemoveHandler);
    $(document).on("touchmove", touchmoveHandler);

    $(document).on("mouseup touchend", swipeEndHandler);
  });

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (waveBlocked) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateWaveUp();
    } else { 
      navigateWaveDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (waveBlocked) return;
    if (e.which === 38) {
      navigateWaveUp();
    } else if (e.which === 40) {
      navigateWaveDown();
    }
  });

  $(window).on("resize", function() {
    winW = $(window).width();
    winH = $(window).height();
    changePages();
  });

});
</script>
</html>
