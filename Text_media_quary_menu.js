<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<title>Document</title>
</head>
<style>
/* *** MAIN *** */

/* Google Font */

@import url("https://fonts.googleapis.com/css?family=Libre+Franklin:400,400i,800,800i&display=swap");
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  background: white;
  margin: 0;
  padding: 0;
}
body,
html {
  font-family: "Libre Franklin", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
  color: black;
  scroll-behavior: smooth;
  font-smooth: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
}
p {
  font-family: "Libre Franklin", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
}

@media (max-width: 768px) {
  p {
    font-size: 14px;
    line-height: 1.5;
  }
}
img {
  max-width: 100%;
  height: auto;
}

/* Media Query Small Screens */

#main-nav {
  background: black;
  height: 55px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-transition: all 3s ease;
  transition: all 1000ms ease;
}
/**** SMALL SCREENS  ***/

@media (max-width: 768px) {
  #main-nav {
    background: black;
    position: fixed;
    width: 100%;
    height: 100%;
    margin-left: -100%;
  }
  .menu-toggle {
    display: inherit;
    z-index: 2;
    background: black;
    font-size: 25px;
    position: fixed;
    left: 15px;
    top: 10px;
    color: white;
    cursor: pointer;
    z-index: 0;
    transition: all 300ms ease-in;
  }
  .button-toggle {
    right: 15px;
  }

  .nav-open {
    margin-left: 0% !important;
  }
}
.responsive-menu {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  float: left;
  font-family: "Open-Sans", Arial;
  list-style: none;
  background: #333333;
}
.responsive-menu ul li:hover {
  cursor: pointer;
}
.responsive-menu li {
  display: inline-block;
  font-size: 13px;
  margin: 0;
  padding: 0;
  float: left;
  line-height: 20px;
  position: relative;
}
.responsive-menu > li > a {
  letter-spacing: 1px;
  padding: 18px 20px;
  color: #f7f7f7;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  -webkit-transition: color 0.2s linear, background 0.2s linear;
  transition: color 0.2s linear, background 0.2s linear;
}
.responsive-menu li:hover > a,
.responsive-menu li.active > a,
.responsive-menu a:focus {
  background: #555;
  color: #fff;
}
/*----------------------------
	Right align menu item
----------------------------*/
.responsive-menu li.right {
  float: right;
}
/*-------------------------
	Icons 
-------------------------*/
.responsive-menu i {
  line-height: 20px !important;
  margin-right: 10px;
  font-size: 15px;
  float: left;
}

/**** SMALL SCREENS  ***/

@media (max-width: 768px) {
  .responsive-menu-wrapper.scrollable {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .responsive-menu li {
    display: block;
    width: 100%;
  }
  .responsive-menu > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
  }
  .responsive-menu a {
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
}
/* NO SCROLL
   Prevent background scrolling when overlay is open */
.no_scroll {
  overflow: hidden;
}
a {
  text-decoration: none;
}
/* **
 * MAIN PAGE
** */

#page-content {
}
/* **
 * OVERLAY
** */

/* Hide overlay on initial page load */

.hidden {
  display: none;
  visibility: hidden;
}
/* OVERLAY
   Position and style overlay */
#overlay-slide {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 2;
  background: white;
  color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.overlay-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  background: #333;
  height: 55px;
  color: #fff;
}
/* OVERLAY CONTENT
   Overlay window is fixed and overflow scrolling enabled.
   Prevents background content scrolling.
   Top margin = to height of header.
   Height is set to 100% LESS the height
   of the header because the
   content window TOP MARGIN is 55px.
   
    */

#overlay-content {
  position: absolute;
  margin-top: 55px;
  width: 100vw;
  height: calc(100vh - 55px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
#overlay-content article {
  width: 92%;
  max-width: 1140px;
  margin: 0 auto;
}
/* **
 * animate.css -https://daneden.me/animate
** */

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
@keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}
@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
@keyframes slideInLeft {
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
/* Add 200px padding at bottom of for readability  */

.padding-200 {
  width: 100%;
  height: 200px;
}
/* Open-Close Buttons  */
.btn-close {
  background: transparent;
  color: white;
  border: none;
  font-size: 50px;
  width: 50px;
  margin-top: -5px;
  margin-left: 25px;
  cursor: pointer;
  outline: none;
  transition: all 300ms ease-in;
}
.btn-close:hover {
  color: red;
}

.button-toggle {
  background: black;
  font-size: 25px;
  position: fixed;
  right: 35px;
  top: 10px;
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: all 300ms ease-in;
}
.button-toggle:hover {
  background: white;
  color: black;
}
.menu-toggle {
  display: none;
}
.menu-toggle:hover {
  background: white;
  color: black;
}
header {
  background: black;
  height: 55px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 0;
}

.menu-1,
.menu-2,
.menu-3,
.menu-4 {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 50px;
  cursor: pointer;
  transition: all 0.3s;
}
.menu-1:before,
.menu-1:after,
.menu-2:before,
.menu-2:after,
.menu-3:before,
.menu-3:after,
.menu-4:before,
.menu-4:after {
  content: "";
  position: absolute;
  transition: all 0.3s;
}

.menu-4 {
  top: -10px;
  width: 30px;
  height: 30px;
  border-bottom: 4px solid #e3e3e3;
}
.menu-4:hover {
  border-bottom-color: hotpink;
}
.menu-4:hover:before,
.menu-4:hover:after {
  background-color: hotpink;
}
.menu-4:before,
.menu-4:after {
  background-color: #e3e3e3;
  height: 4px;
  width: 30px;
  top: 50%;
  left: 50%;
  margin-left: -15px;
}
.menu-4:before {
  margin-top: -10px;
}
.menu-4:after {
  margin-top: 3px;
}

.menu-4-active {
  top: 0;
  margin-left: 38px;
  height: 50px;
  width: 50px;
  border: 0;
  background-color: red;
}
.menu-4-active:before,
.menu-4-active:after {
  background-color: #e3e3e3 !important;
  margin-left: -15px !important;
  margin-top: -2px !important;
}
.menu-4-active:before {
  transform: rotate(45deg) !important;
}
.menu-4-active:after {
  transform: rotate(-45deg) !important;
}

.menu-3 {
  background-color: #e3e3e3;
  width: 50px;
  height: 50px;
}
.menu-3:hover {
  background-color: orange;
}
.menu-3:before,
.menu-3:after {
  background-color: #212121;
  height: 4px;
  width: 30px;
  top: 50%;
  left: 50%;
  margin-left: -15px;
}
.menu-3:before {
  margin-top: -6px;
}
.menu-3:after {
  margin-top: 4px;
}

.menu-3-active {
  border-radius: 40px;
  background-color: red !important;
}
.menu-3-active:before,
.menu-3-active:after {
  background-color: #e3e3e3;
  margin-left: -15px !important;
  margin-top: -2px !important;
}
.menu-3-active:before {
  transform: rotate(45deg) !important;
}
.menu-3-active:after {
  transform: rotate(-45deg) !important;
}

.menu-2 {
  border: 4px solid #e3e3e3;
}
.menu-2:hover {
  border-color: aqua;
}
.menu-2:before,
.menu-2:after {
  background-color: #e3e3e3;
  height: 4px;
  width: 30px;
  top: 50%;
  left: 50%;
  margin-left: -15px;
}
.menu-2:before {
  margin-top: -6px;
}
.menu-2:after {
  margin-top: 4px;
}

.menu-2-active {
  transform: rotate(45deg);
  border-color: red !important;
  background-color: red !important;
}
.menu-2-active:before,
.menu-2-active:after {
  margin-left: -15px !important;
  margin-top: -2px !important;
}
.menu-2-active:after {
  transform: rotate(-90deg) !important;
}

.menu-1 {
  border: 4px solid #e3e3e3;
  border-radius: 50px;
}
.menu-1:hover {
  border-color: limegreen;
  background-color: limegreen;
}
.menu-1:before,
.menu-1:after {
  width: 60px;
  height: 4px;
  background-color: #e3e3e3;
  left: 50%;
  margin-left: -30px;
}
.menu-1:before {
  top: 50%;
  margin-top: -8px;
}
.menu-1:after {
  top: 50%;
  margin-top: 4px;
}

.menu-1-active {
  background-color: red !important;
  border-color: red !important;
}
.menu-1-active:before,
.menu-1-active:after {
  margin-top: -2px;
}
.menu-1-active:before {
  transform: rotate(45deg);
}
.menu-1-active:after {
  transform: rotate(-45deg);
}

</style>
<body>
	<header></header>

<button aria-label="Open addition information overlay" class="trigger-overlay button-toggle">☰</button>

<div id="overlay-slide" class="hidden animated slideOutRight">
  <div class="overlay-header"> <button aria-label="Close addition information overlay" class="btn-close trigger-overlay">×</button></div>
  <div id="overlay-content">
    <article>
      <h1>Sliding Overlay</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe ipsa nulla sapiente est possimus ab voluptatem vero quaerat magnam blanditiis a voluptate quae natus quibusdam ut totam porro molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel adipisci fugiat corporis tempora sequi ut quam voluptates rerum praesentium eaque. Vel minus est non quo saepe officia dolorem iusto architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam iure debitis quas voluptatibus aut maiores eaque aliquam inventore officiis quod pariatur illo error provident recusandae cumque quae accusantium ea!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio vel perferendis tempore voluptas ea ipsam quod dignissimos accusamus non labore itaque ipsa commodi reprehenderit excepturi magni officiis dolorum facilis nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel harum culpa ab! Cumque cupiditate omnis blanditiis veniam? Quia eligendi mollitia sit corrupti amet impedit dolore nam minus maxime laboriosam possimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor totam quibusdam rerum id vero reiciendis officia harum culpa perferendis quam iure vitae quaerat enim consequatur error voluptas consequuntur voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo ab maxime debitis perspiciatis temporibus repellendus quisquam illum eius quam aliquid iusto nisi reiciendis asperiores porro fugit vero. Excepturi facilis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio vel perferendis tempore voluptas ea ipsam quod dignissimos accusamus non labore itaque ipsa commodi reprehenderit excepturi magni officiis dolorum facilis nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel harum culpa ab! Cumque cupiditate omnis blanditiis veniam? Quia eligendi mollitia sit corrupti amet impedit dolore nam minus maxime laboriosam possimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor totam quibusdam rerum id vero reiciendis officia harum culpa perferendis quam iure vitae quaerat enim consequatur error voluptas consequuntur voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo ab maxime debitis perspiciatis temporibus repellendus quisquam illum eius quam aliquid iusto nisi reiciendis asperiores porro fugit vero. Excepturi facilis.</p>
      <h2>Section Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe ipsa nulla sapiente est possimus ab voluptatem vero quaerat magnam blanditiis a voluptate quae natus quibusdam ut totam porro molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel adipisci fugiat corporis tempora sequi ut quam voluptates rerum praesentium eaque. Vel minus est non quo saepe officia dolorem iusto architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam iure debitis quas voluptatibus aut maiores eaque aliquam inventore officiis quod pariatur illo error provident recusandae cumque quae accusantium ea!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio vel perferendis tempore voluptas ea ipsam quod dignissimos accusamus non labore itaque ipsa commodi reprehenderit excepturi magni officiis dolorum facilis nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel harum culpa ab! Cumque cupiditate omnis blanditiis veniam? Quia eligendi mollitia sit corrupti amet impedit dolore nam minus maxime laboriosam possimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolor totam quibusdam rerum id vero reiciendis officia harum culpa perferendis quam iure vitae quaerat enim consequatur error voluptas consequuntur voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo ab maxime debitis perspiciatis temporibus repellendus quisquam illum eius quam aliquid iusto nisi reiciendis asperiores porro fugit vero. Excepturi facilis.</p>
    </article>
    <div class="padding-200"></div>
  </div>
</div>
</body>
<script>
	// Toggle Overlayvar menu = $('.wrapper a');

$(".trigger-overlay").click(function () {
  $(".button-toggle").toggleClass("active");
  $("#overlay-slide").removeClass("hidden");
  $("#overlay-slide").toggleClass("slideInRight slideOutRight");
  $("body").toggleClass("no_scroll");
  $("#overlay-content").animate({ scrollTop: 0 }, 800);
});

$(".menu-toggle").click(function () {
  $("#main-nav").toggleClass("nav-open");

  $("body").toggleClass("no_scroll");
});

// Close Overlay with ESCAPE key

$(document).keydown(function (e) {
  "use strict";
  // ESCAPE key pressed
  if (e.keyCode === 27) {
    // Check if overlay is open
    if ($("#overlay-slide").hasClass("slideInRight")) {
      $("#overlay-slide").toggleClass("slideInRight slideOutRight");
      $("body").toggleClass("no_scroll");
      $("#overlay-content").animate({ scrollTop: 0 }, 800);
    }
  }
});

var menu = $(".wrapper a");

menu.on("click", function () {
  var menuNum = $(this).data("menu");
  $(this).toggleClass("menu-" + menuNum + "-active");
});

</script>
</html>
