<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
:root {
  text-align: center;
}

html, body {
  background-color: #ddd;
}

.nav {
  appearance: none;
  opacity: 0;
  z-index: -1;
  position: relative;
  z-index: 999;
  outline: 0;
}

section {
  box-shadow: 0 0 0 0.2em #999;
  font-family: sans-serif;
  display: grid;
  place-content: center;
  background-color: white;
  font-size: 5vw;
  font-weight: 800;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex: middle;
  opacity: 0;
  transform: scale(0.6) translate(0%, 0);
}

.n1:not(:checked) ~ .s1,
.n2:not(:checked) ~ .s2,
.n3:not(:checked) ~ .s3,
.n4:not(:checked) ~ .s4,
.n5:not(:checked) ~ .s5,
.n6:not(:checked) ~ .s6,
.n7:not(:checked) ~ .s7,
.n8:not(:checked) ~ .s8 {
  animation: bye 1s ease-in-out forwards;
}

@keyframes bye {
  0% {
    opacity: 0;
    background-color: white;
    z-index: 7;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: scale(0.6) rotate(2deg) translate(5%, 0);
    z-index: 8;
  }
  100% {
    transform: scale(0.6) translate(0%, 0);
    opacity: 1;
    z-index: 5;
  }
}
@keyframes hello {
  0% {
    opacity: 1;
    background-color: white;
    z-index: 7;
  }
  50% {
    transform: scale(0.6) translate(-30%, -20%) rotate(-10deg) translate(-60%, 0);
  }
  100% {
    transform: scale(0.6) translate(0%, 0);
    opacity: 1;
    z-index: 9;
  }
}
.n1:checked ~ .s1,
.n2:checked ~ .s2,
.n3:checked ~ .s3,
.n4:checked ~ .s4,
.n5:checked ~ .s5,
.n6:checked ~ .s6,
.n7:checked ~ .s7,
.n8:checked ~ .s8 {
  background-color: #fff;
  z-index: 1;
  transform: scale(0.6) translate(0%, 0);
  animation: hello 1s ease-in-out forwards;
}

@keyframes hereiam {
  100% {
    color: transparent;
    text-shadow: 0 0 0 #000;
    transform: none;
  }
}
</style>
<body>
  <input class="n1 nav first" name="nav" type="radio" />
<input class="n2 nav" name="nav" type="radio" checked />
<input class="n3 nav" name="nav" type="radio" />
<input class="n4 nav" name="nav" type="radio" />
<input class="n5 nav" name="nav" type="radio" />
<input class="n6 nav" name="nav" type="radio" />
<input class="n7 nav" name="nav" type="radio" />
<input class="n8 nav last" name="nav" type="radio" />

<section class="s1">{message-one}</section>
<section class="s2">{message-two}</section>
<section class="s3">{message-three}</section>
<section class="s4">{message-four}</section>
<section class="s5">{message-five}</section>
<section class="s6">{message-six}</section>
<section class="s7">{message-seven}</section>
<section class="s8">{message-eight}</section>
</body>
<script>
function checknext() {
  if (document.querySelector(".last:checked")) {
    document.querySelector(".first").checked = true;
  } else {
    document.querySelector(".nav:checked").nextElementSibling.checked = true;
  }
}

setInterval(function () {
  checknext();
}, 10000);

</script>
</html>
