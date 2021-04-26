<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  * {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  background: #000;
}

.pano {
  transition: all 0.5s ease-in-out;
}

img {
  transition: all 4s ease;
  object-fit: none;
  display: block;
  margin: 0 auto;
  width: 400px;
  height: 600px;
  will-change: object-position;
}
.first img {
  object-position: 0 0;
}
.second img {
  object-position: 25% 25%;
}
.third img {
  object-position: 50% 50%;
}
.fourth img {
  object-position: 75% 75%;
}
.fifth img {
  object-position: 100% 100%;
}

.hidden {
  opacity: 0;
}
</style>
<body>
  <div class="pano first">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/36489/landscape-nm.jpg" alt="" />
</div>
</body>
<script>
  var moveNext = function () {
  let myInterval = window.setInterval(showNext, 2000);
};

var showNext = function () {
  let pano = document.querySelector('.pano');
  let panoClass = pano.className;
  // pano.classList.remove('hidden');
  switch (panoClass) {
    case 'pano first':
      pano.classList.remove('first');
      pano.classList.add('second');
      break;
    case 'pano hidden first':
      pano.classList.remove('hidden');
      pano.classList.remove('first');
      pano.classList.add('second');
      break;
    case 'pano second':
      pano.classList.remove('second');
      pano.classList.add('third');
      break;
    case 'pano third':
      pano.classList.remove('third');
      pano.classList.add('fourth');
      break;
    case 'pano fourth':
      pano.classList.remove('fourth');
      pano.classList.add('fifth');
      break;
    case 'pano fifth':
      pano.classList.add('hidden');
      pano.classList.remove('fifth');
      pano.classList.add('first');
      break;}

};

document.addEventListener("DOMContentLoaded", moveNext);
</script>
</html>
