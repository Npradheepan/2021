<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  /* 
  You can find more of this here
  https://codepen.io/cdmoro

  carlosbonadeo@gmail.com
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.cube {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  transform: rotatey(calc(var(--mouse-x) * 1deg - 50deg))
    rotatex(calc((var(--mouse-y) * -1deg + 50deg)));
}

.middle {
  position: relative;
  width: 250px;
  height: 250px;
  transform-style: preserve-3d;
}

.face {
  height: 250px;
  width: 250px;
  background: url("https://picsum.photos/id/219/750/750");
  transform-style: preserve-3d;
}

.face-center {
  background-position: center center;
}

.face-top {
  background-position: center top;
  transform: rotateX(-90deg) translateY(-100%);
  transform-origin: top;
  height: 250px;
  width: 250px;
  position: absolute;
}

.face-bottom {
  background-position: center bottom;
  transform: rotateX(90deg) translatey(100%);
  transform-origin: bottom;
  position: absolute;
}

.face-right {
  background-position: right center;
  transform: rotateY(-90deg) translatey(-100%) translatex(100%);
  transform-origin: right;
  position: absolute;
}

.face-left {
  background-position: left center;
  transform: rotateY(90deg) translateX(-100%);
  transform-origin: left;
  position: absolute;
}

.face:not(.face-center)::after {
  position: absolute;
  width: 250px;
  height: 250px;
  content: "";
  background: white;
  transform: translatez(-1px) scale(1.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.face.face-top::after {
  content: "Hope you like it!";
  font-size: 2rem;
  text-align: center;
  padding: 0 85px;
  width: 85px;
  transform: translatez(-1px) scale(1.1) rotatex(180deg);
}

</style>
<body>
  <div class="cube">
    <div class="face face-top">
    </div>
    <div class="middle">
      <div class="face face-left"></div>
      <div class="face face-center"></div>
      <div class="face face-right"></div>
    </div>
    <div class="face face-bottom">
    </div>
  </div>
</body>
<script>
window.addEventListener(
  "mousemove",
  (e) => {
    document.body.style.setProperty(
      "--mouse-x",
      (e.clientX / document.body.offsetWidth) * 100
    );
    document.body.style.setProperty(
      "--mouse-y",
      (e.clientY / document.body.offsetHeight) * 100
    );
  },
  false
);

</script>
</html>
