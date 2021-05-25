<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css">
  <title>Document</title>
</head>
<style>
  /* ====== General styles ====== */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wrapper {
  height: 100vh;
}

header,
footer {
  width: 100%;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  background-color: #555454;
  font-family: "Comfortaa", cursive;
  font-size: 1.2em;
  color: #fff;
}

footer {
  font-size: 1em;
}

footer i {
  font-size: 1.4em;
  color: #2d8db7;
}

main {
  width: 100%;
  height: 84vh;
  background-color: #393939;
  background: linear-gradient(to right, #159957, #155799);
  position: relative;
}

.center {
  width: 630px;
  margin: 0 auto;
  padding: 4% 0;
  overflow: hidden;
}

.follow {
  margin: 0 auto;
  font-family: "Comfortaa", cursive;
  font-size: 55px;
  color: #fff;
  position: relative;
  z-index: 9;
}

#socialName {
  white-space: nowrap;
  color: #bab7b7;
  font-size: 45px;
  position: absolute;
  margin: 10px 0 0 20px;
  opacity: 0;
  transform: translateX(200px);
  transition: opacity 0.4s, transform 0.4s;
}

#socialName.active {
  opacity: 1;
  transform: translateX(0px);
}

/* ====== Colors for social Icons ====== */
/* Twitter */
.social-buttons .twitter {
  background: #50a8ee;
}

.social-buttons .twitter + .icon-back {
  background: #2e80c1;
}

/* Facebook */
.social-buttons .facebook {
  background: #4662a0;
}

.social-buttons .facebook + .icon-back {
  background: #203562;
}

/* Instagram */
.social-buttons .instagram {
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.social-buttons .instagram + .icon-back {
  background: #285aeb;
}

/* GitHub */
.social-buttons .github {
  background: #2e3034;
  color: #fff;
}

.social-buttons .github + .icon-back {
  background: #23252a;
}

/* Google Plus */
.social-buttons .google {
  background: #d93b2b;
  color: #fff;
}

.social-buttons .google + .icon-back {
  background: #c41e0f;
}

/* LinkedIn */
.social-buttons .linkedin {
  background: #007ebb;
}

.social-buttons .linkedin + .icon-back {
  background: #065a83;
}

/* reddit */
.social-buttons .reddit + .icon-back {
  background: #f03612;
}

.social-buttons .reddit {
  background: #bf2608;
}

/* ====== Position the Social media icon ====== */
.social-buttons {
  height: 70px;
  margin-top: 90px;
  width: 630px;
}

.social-buttons .scene {
  float: left;
  text-decoration: none;
  margin: 0 10px;
}

.social-buttons .icon {
  display: block;
  line-height: 70px;
  text-align: center;
  font-size: 2.2em;
  color: #fff;
  outline: 1px solid rgba(255, 255, 255, 0.39);
}

.social-buttons .icon-back {
  font-size: 1.6em;
}

/* ====== Rotation effect ====== */
.social-buttons .scene {
  width: 70px;
  height: 70px;
  perspective: 800px;
  user-select: none;
}

.social-buttons .cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.5s all;
  user-select: none;
}

.scene:hover .cube,
.scene:active .cube {
  transform: rotateX(90deg);
  user-select: none;
}

.social-buttons .icon-front {
  position: absolute;
  width: 100%;
  transform: rotateX(0deg) translate3d(0px, 0px, 35px);
}

.social-buttons .icon-back {
  position: absolute;
  width: 100%;
  transform: rotateX(-90deg) translate3d(0px, 0px, 35px);
}

/* ====== Painting background ====== */
#overflow {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

.paint {
  position: absolute;
  clip-path: circle(50% at 50% 50%);
}

.paint.hover {
  animation-name: circleEx;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
}

@keyframes circleEx {
  0% {
    transform: scale(1);
    width: 20px;
    height: 20px;
  }

  100% {
    transform: scale(33);
    width: 100px;
    height: 100px;
  }
}

</style>
<body>
  <div ontouchstart="" class="wrapper">

    <header>
      <p>“ Colors speak louder then words ”</p>
    </header>
  
    <main>
      <!-- Here we are dynamically create .paint element, which is used for painting background -->
      <div id="overflow"></div>
  
      <div class="center">
        <span class="follow">Follow me: <span id="socialName"></span></span>
  
        <div class="social-buttons">
          <a href="#" class="scene" data-social="twitter">
            <div class="cube">
              <span class="icon icon-front twitter"><i class="fab fa-twitter"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
  
          <a href="#" class="scene" data-social="facebook">
            <div class="cube">
              <span class="icon icon-front facebook"><i class="fab fa-facebook-f"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
  
          <a href="#" class="scene" data-social="Instagram">
            <div class="cube">
              <span class="icon icon-front instagram"><i class="fab fa-instagram"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
  
          <a href="#" class="scene" data-social="github">
            <div class="cube">
              <span class="icon icon-front github"><i class="fab fa-github"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
  
          <a href="#" class="scene" data-social="Google plus">
            <div class="cube">
              <span class="icon icon-front google"><i class="fab fa-google-plus-g"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
  
          <a href="#" class="scene" data-social="Linked in">
            <div class="cube">
              <span class="icon icon-front linkedin"><i class="fab fa-linkedin"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
  
          <a href="#" class="scene" data-social="reddit">
            <div class="cube">
              <span class="icon icon-front reddit"><i class="fab fa-reddit-alien"></i></span>
              <span class="icon icon-back"><i class="fas fa-external-link-alt"></i></span>
            </div>
          </a>
        </div>
      </div>
  
    </main>
  
    <footer>
      <p>Make by &nbsp <i class="far fa-hand-paper"></i> &nbsp <i class="far fa-keyboard"></i> &nbsp and &nbsp <i class="fas fa-mug-hot"></i></p>
    </footer>
  
  </div>
</body>
<script>
  /* ====== for painting background ====== */

var scenes = document.getElementsByClassName("scene");
var overflow = document.getElementById("overflow");

for (var i = 0; i < scenes.length; i++) {
  scenes[i].addEventListener("mouseenter", paintingBg, false);
  scenes[i].addEventListener("mouseleave", removeClass, false);
}

function paintingBg(e) {
  e.stopPropagation();

  var paintArray = document.getElementsByClassName("paint");
  if (paintArray.length > 6) {
    paintArray[0].remove();
  }

  var paint = document.createElement("div");
  paint.setAttribute("class", "paint");
  overflow.appendChild(paint);

  var socialName = document.getElementById("socialName");
  socialName.textContent = e.target.dataset.social;
  socialName.classList.toggle("active");

  var socialIcon = e.target.firstElementChild.firstElementChild;
  var computedStyle = window.getComputedStyle(socialIcon);
  var color = computedStyle.getPropertyValue("background-color");

  paint.style.left = e.pageX + "px";
  paint.style.top = e.pageY - 50 + "px";

  if (computedStyle.getPropertyValue("background-image") === "none") {
    paint.style.backgroundImage = "none";
    paint.style.backgroundColor = color;
  } else
    paint.style.backgroundImage = computedStyle.getPropertyValue(
      "background-image"
    );

  paint.classList.add("hover");
}

function removeClass() {
  document.getElementById("socialName").classList.toggle("active");
}

</script>
</html>
