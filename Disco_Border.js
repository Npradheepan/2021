<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: "Inter", sans-serif;
  display: grid;
  place-content: center;
  text-align: center;
  background-color: ghostwhite;
}

svg {
  height: 45vh;
  width: 100%;
  display: block;
}

path {
  transition: 0.1s;
  fill: Turquoise;
}

h1 {
  font-size: 10vw;
  padding: 0 1em;
  line-height: 1em;
  color: #234;
  mix-blend-mode: multiply;
  position: relative;
  z-index: 9;
}
</style>
<body>
  <body>
    <svg viewBox="0 -100 600 400" preserveAspectRatio="none" ; style="position:fixed; top:0;">
      <path id="roof" />
    </svg>
  
    <h1 contenteditable>Oh this is groovy</h1>
  
    <svg viewBox="0 -100 600 400" style="position:fixed; bottom:0;" transform="scale(-1 -1)" preserveAspectRatio="none">
      <path id="floor" />
    </svg>
</body>
<script>
  // tiny-as random min-max function
function rMe(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// grap my path
let roof = document.getElementById("roof");

let floor = document.getElementById("floor");
function randomWaves() {
  roof.setAttribute(
    "d",
    "M 0 -100 V 200 Q " +
      rMe(0, 190) +
      " " +
      rMe(00, 180) +
      " " +
      rMe(90, 120) +
      " " +
      rMe(90, 200) +
      " T " +
      rMe(150, 160) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(240, 260) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(340, 360) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(440, 460) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(540, 560) +
      " " +
      rMe(50, 150) +
      " T 600 " +
      rMe(60, 130) +
      " V -100 Z"
  );

  floor.setAttribute(
    "d",
    "M 0 -100 V 200 Q " +
      rMe(0, 190) +
      " " +
      rMe(00, 180) +
      " " +
      rMe(90, 120) +
      " " +
      rMe(90, 200) +
      " T " +
      rMe(150, 160) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(240, 260) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(340, 360) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(440, 460) +
      " " +
      rMe(50, 150) +
      " T " +
      rMe(540, 560) +
      " " +
      rMe(50, 150) +
      " T 600 " +
      rMe(60, 130) +
      " V -100 Z"
  );
}

document.addEventListener("click", function () {
  randomWaves();
});

var reGenTimer = window.setInterval(function () {
  randomWaves();
}, 150);

</script>
</html>
