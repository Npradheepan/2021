<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="https://use.fontawesome.com/6fb9af6ea9.js"></script>
    <title>Document</title>
</head>
<style>
    *, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

svg {
  position: absolute;
}

.demo {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(60deg, #CC9EC6, #683661, #625192);
}
.demo__buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-100px, -100px);
  filter: url("#goo");
}
.demo__social-btn {
  position: absolute;
  left: 65px;
  top: 65px;
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  background: white;
  color: #261758;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}
.demo__social-btn:hover {
  color: #106279;
}
.demo__open-btn {
  position: absolute;
  left: 65px;
  top: 65px;
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  font-weight: 700;
  font-size: 30px;
  font-family: sans-serif;
  background: white;
  color: #261758;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}
.demo__open-btn:hover {
  color: #106279;
}
.demo__step-1 {
  transform: translate3d(-50px, -50px, 0);
}
.demo__step-2 {
  transform: translate3d(-50px, 50px, 0);
}
.demo__step-3 {
  transform: translate3d(50px, 50px, 0);
}
.demo__step-4 {
  transform: translate3d(50px, -50px, 0);
}
</style>
<body>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="demo">
        <div class="demo__buttons">
          <div class="demo__social-btn-1 demo__social-btn"><i class="fa fa-twitter"></i></div>
          <div class="demo__social-btn-2 demo__social-btn"><i class="fa fa-facebook"></i></div>
          <div class="demo__social-btn-3 demo__social-btn"><i class="fa fa-instagram"></i></div>
          <div class="demo__social-btn-4 demo__social-btn"><i class="fa fa-snapchat"></i></div>
          <div class="demo__open-btn"><i class="fa fa-share-alt"></i></div>
        </div>
      </div>
</body>
<script>
    "use strict";
$(document).ready(function () {
  var $buttons = $(".demo__social-btn");
  var $toggle = $(".demo__open-btn");
  var delay = 200;
  var timeouts = [];

  function removeSteps(items) {
    items.removeClass("demo__step-1 demo__step-2 demo__step-3 demo__step-4");
  }

  function clearTimeouts(tos) {
    tos.forEach(function (to) {
      clearTimeout(to);
    });
  }

  $toggle.on("click", function animate() {
    if ($buttons.eq(1).hasClass("open")) {
      removeSteps($buttons);
      clearTimeouts(timeouts);
      $buttons.removeClass("open");
      return;
    }
    $buttons.addClass("demo__step-1 open");

    for (let i = 0; i <= 2; i++) {
      timeouts[i] = setTimeout(function () {
        removeSteps($buttons.slice(0, 3 - i));
        $buttons.slice(0, 3 - i).addClass("demo__step-" + (i + 2));
      }, delay * (i + 1));
      console.log(1);
    }
  });

  setTimeout(function () {
    $toggle.trigger("click");
  }, 500);

  setTimeout(function () {
    $toggle.trigger("click");
  }, 1600);
});

</script>
</html>
