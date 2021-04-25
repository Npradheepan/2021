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
  background-color: gray;
}

#carousel {
  perspective: 1000px;
  overflow: hidden;
}
#carousel #scene {
  width: 42%;
  margin: 40px auto 0 auto;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
#carousel #scene .carousel_item {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 0 10px;
  backface-visibility: hidden;
}
#carousel #scene .carousel_item:not(:first-of-type) {
  position: absolute;
  left: 0;
  top: 0;
}
#carousel #carousel_btn {
  width: 100px;
  margin: 20px auto 0 auto;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#carousel #carousel_btn .btn {
  width: 45px;
  height: 45px;
  line-height: 40px;
  padding-left: 7px;
  box-sizing: border-box;
  border-radius: 50%;
  float: left;
  border: 2px solid #2f2f2f;
  color: #2f2f2f;
  font-family: sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}
#carousel #carousel_btn .btn:hover {
  color: #ffffff;
  background-color: #2f2f2f;
}
#carousel #carousel_btn > div:first-child {
  margin-right: 10px;
}
</style>
<body>
  <div id="carousel" data-auto="true">
    <div id="scene">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764571-70698100-9009-11eb-90b0-b42c3dd1d7d3.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764570-6fd0ea80-9009-11eb-9466-2b2063b82ddb.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764569-6f385400-9009-11eb-9066-ef6c086b7587.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764568-6e9fbd80-9009-11eb-9efe-f52b73ec056c.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764566-6e072700-9009-11eb-9169-d5c82f3edffa.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764565-6d6e9080-9009-11eb-8212-14b983fed967.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764563-6cd5fa00-9009-11eb-99a2-1a8d7492d824.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764562-6ba4cd00-9009-11eb-91fc-18dd1ce8c8a4.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764579-72cbdb00-9009-11eb-8d76-029b1efef4cc.jpg" alt="">
      <img class="carousel_item" src="https://user-images.githubusercontent.com/26748614/112764577-72334480-9009-11eb-940d-a10aaaab2b64.jpg" alt="">
    </div>
  
    <div id="carousel_btn">
      <div class="btn prev">Prev</div>
      <div class="btn next">Next</div>
    </div>
  </div>
</body>
<script>
  /*

3D Carousel images gallery. inspired from David DeSandro's tutorial (https://3dtransforms.desandro.com/)

*/

window.addEventListener(
  "load",
  function () {
    carouselRUN();
  },
  false
);

function carouselRUN() {
  var carousel = document.getElementById("carousel");
  var scene = document.getElementById("scene");
  var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
  var carousel_btn = document.getElementById("carousel_btn");
  var n = carousel_items_Arrey.length;
  var curr_carousel_items_Arrey = 0;
  var theta = (Math.PI * 2) / n;
  var interval = null;
  var autoCarousel = carousel.dataset.auto;

  setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  window.addEventListener(
    "resize",
    function () {
      clearInterval(interval);
      setupCarousel(
        n,
        parseFloat(getComputedStyle(carousel_items_Arrey[0]).width)
      );
    },
    false
  );
  setupNavigation();

  function setupCarousel(n, width) {
    var apothem = width / (2 * Math.tan(Math.PI / n));
    scene.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (i = 1; i < n; i++) {
      carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
    }

    if (autoCarousel === "true") {
      setCarouselInterval();
    }
  }

  function setCarouselInterval() {
    interval = setInterval(function () {
      curr_carousel_items_Arrey++;
      scene.style.transform = `rotateY(${
        curr_carousel_items_Arrey * -theta
      }rad)`;
    }, 3000);
  }

  function setupNavigation() {
    carousel_btn.addEventListener(
      "click",
      function (e) {
        e.stopPropagation();
        var target = e.target;

        if (target.classList.contains("next")) {
          curr_carousel_items_Arrey++;
        } else if (target.classList.contains("prev")) {
          curr_carousel_items_Arrey--;
        }
        clearInterval(interval);
        scene.style.transform = `rotateY(${
          curr_carousel_items_Arrey * -theta
        }rad)`;

        if (autoCarousel === "true") {
          setTimeout(setCarouselInterval(), 3000);
        }
      },
      true
    );
  }
}

</script>
</html>
