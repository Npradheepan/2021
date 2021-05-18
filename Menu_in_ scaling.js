<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<title>Document</title>
</head>
<style>
@import url("https://fonts.googleapis.com/css?family=Libre+Franklin:400,400i,800,800i&display=swap");
:root {
  --overlay--background: #ff3d7f;
}

/* Overlay style */
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--overlay--background);
  overflow-y: auto;
}
/* Overlay Close Button */
.overlay button {
  font-size: 50px;
  padding: 10px;
  position: fixed;
  right: 20px;
  border: none;
  background: transparent;
  color: white;
  outline: none;
  z-index: 100;
  transition: all 300ms ease-in;
}
.overlay button:hover {
  color: black;
}
a {
  text-decoration: none;
}
p {
  font-weight: 800;
  letter-spacing: 2px;
}
.center-stuff {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
/* Menu style */
.overlay nav {
  text-align: center;
  position: relative;
}
.overlay ul {
  list-style: none;
  padding: 0;
  display: inline-block;
}
.overlay ul li {
  display: block;
  height: 20%;
  height: calc(100% / 5);
  min-height: 54px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.overlay ul li a {
  font-size: 54px;
  font-weight: 300;
  color: white;
  transition: all 500ms ease-in;
}
.overlay ul li a:hover,
.overlay ul li a:focus {
  color: black;
}
/* SLIDING DOOR EFFECT */

.overlay-door {
  visibility: hidden;
  width: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: width 0.5s 0.3s, visibility 0s 0.8s;
  transition: width 0.5s 0.3s, visibility 0s 0.8s;
}

.overlay-door.open {
  visibility: visible;
  width: 100%;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
}

.overlay-door nav {
  position: absolute;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}

.overlay-door nav,
.overlay-door .overlay-close {
  opacity: 0;
  -webkit-transition: opacity 0.3s 0.5s;
  transition: opacity 0.3s 0.5s;
}

.overlay-door.open nav,
.overlay-door.open .overlay-close {
  opacity: 1;
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.overlay-door.close nav,
.overlay-door.close .overlay-close {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

@media screen and (max-height: 30.5em) {
  .overlay nav {
    height: 70%;
    font-size: 34px;
  }
  .overlay ul li {
    min-height: 34px;
  }
}

.button-toggle {
  background: black;
  padding: 20px 30px 20px 30px;
  color: white;
  font-size: 3vw;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 300ms ease-in;
}
.button-toggle:hover {
  background-color: var(--overlay--background);
}

body {
  background: black;
  font-family: "Libre Franklin", sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
  font-smooth: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
}

</style>
<body>
	<button class="button-toggle toggle-overlay center-stuff">
		Sliding Door Overlay
	  </button>
	  
	  <div class="overlay overlay-door">
		<button type="button" class="toggle-overlay overlay-close">Close</button>
		<nav class="center-stuff">
		  <ul>
			<li><a href="#" class="toggle-overlay">MENU ITEM</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Work</a></li>
			<li><a href="#">Clients</a></li>
			<li><a href="#">Contact</a></li>
		  </ul>
		</nav>
	  </div>
</body>
<script>
$(".toggle-overlay").click(function () {
  $(".overlay-door").toggleClass("open");
  $("body").toggleClass("no_scroll");
});

$(document).keydown(function (e) {
  "use strict";
  // ESCAPE key pressed
  if (e.keyCode === 27) {
    if ($(".overlay").hasClass("open")) {
      $(".overlay").toggleClass("open");
      $("body").toggleClass("no_scroll");
    }
  }
});

</script>
</html>
