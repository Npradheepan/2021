<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://alikinvv.github.io/svg-mask-slider/js/libs/jquery-2.1.4.js"></script>
    <script src="https://alikinvv.github.io/svg-mask-slider/js/libs/jquery.mobile.custom.min.js"></script>
    <script src="https://alikinvv.github.io/svg-mask-slider/js/libs/bootstrap.min.js"></script>
    <script src="https://alikinvv.github.io/svg-mask-slider/js/libs/snap.svg-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
    <title>Document</title>
</head>
<style>
    html, body {
  height: 100%;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #37474F;
  min-height: 800px;
}

.container-fluid {
  max-width: 1400px;
}

.header {
  padding: 30px 65px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 113px;
  z-index: 10;
  mix-blend-mode: exclusion;
  filter: invert(65%);
}
.header__logo {
  width: 50px;
}
.header__logo img {
  width: 100%;
}
.header__menu {
  position: absolute;
  top: 30px;
  right: 65px;
  width: 50px;
  cursor: pointer;
}

.icon {
  display: inline-block;
  width: 2em;
  height: 2em;
  font-size: 30px;
}

.slider-wrapper {
  position: relative;
  width: 90%;
  max-width: 1024px;
  margin: 2em auto;
  /* hide horizontal scrollbar on IE11 */
  overflow-x: hidden;
  padding: 30px 65px;
}

.slider > li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  /* hide vertical scrollbar on IE11 */
  overflow: hidden;
}
.slider > li.visible {
  position: relative;
  z-index: 2;
  opacity: 1;
}
.slider > li.visible .text span.text__word {
  opacity: 0;
}
.slider > li.is-animating {
  z-index: 3;
  opacity: 1;
}
.slider__info {
  margin-left: 65px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  color: #fff;
}
.slider__title {
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 7px;
  overflow: hidden;
}
.slider__title span {
  display: block;
}
.slider__desc {
  font-size: 10px;
  overflow: hidden;
}
.slider__desc span {
  display: block;
}
.slider__site {
  display: block;
  font-weight: bold;
  font-size: 13px;
}
.slider__visit {
  display: block;
  margin-right: 32px;
}
.slider__link {
  padding-right: 32px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px;
  color: #fff;
  text-align: right;
  font-size: 10px;
  overflow: hidden;
}
.slider__link a {
  color: #fff;
  overflow: hidden;
  display: block;
}
.slider__link a:hover, .slider__link a:focus {
  text-decoration: none;
}
.slider__link .arrow {
  position: relative;
  right: 0;
}
.slider image {
  pointer-events: none;
  transform-origin: 50% 50%;
}

.slider .svg-wrapper {
  /* using padding Hack to fix bug on IE - svg height not properly calculated */
  height: 0;
  padding-bottom: 57.15%;
}

.slider-wrapper {
  width: 100%;
  height: calc(100% + 9px);
  padding: 0;
  margin: -9px 0 0;
  max-width: 100%;
  overflow: hidden;
}
.slider-wrapper ul {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.slider-wrapper ul.animate {
  top: 100px;
  right: 120px;
  left: 120px;
  bottom: 100px;
}
.slider-wrapper svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* -------------------------------- 

Slider navigation

-------------------------------- */
.slider-navigation li {
  position: absolute;
  z-index: 3;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
  right: 10px;
  height: 48px;
  width: 48px;
}

.slider-navigation li a {
  display: block;
  height: 100%;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  transition: transform 0.2s;
}

.no-touch .slider-navigation li a:hover {
  transform: scale(1.1);
}

.slider-navigation li:last-of-type {
  left: 10px;
  right: auto;
}

.slider-navigation li:last-of-type a {
  background-position: -48px 0;
}

/* -------------------------------- 

Slider dots/controls 

-------------------------------- */
.slider-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  z-index: 3;
  text-align: center;
  width: 90%;
  mix-blend-mode: exclusion;
  filter: invert(65%);
}

.slider-controls::after {
  clear: both;
  content: "";
  display: table;
}

.slider-controls li {
  display: inline-block;
  margin-right: 10px;
}

.slider-controls li:last-of-type {
  margin-right: 0;
}

.slider-controls li.selected a {
  background-color: #ffffff;
}

.slider-controls a {
  display: block;
  /* image replacement */
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  color: transparent;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

.no-touch .slider-controls a:hover {
  background-color: #ffffff;
}

.text__first, .text__second {
  position: relative;
}

.text__word {
  opacity: 0;
}

.text__first-bg, .text__second-bg {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  transform-origin: left;
  transform: scaleX(0);
}

.text__first-bg {
  background-color: #5fbff9;
}

.text__second-bg {
  background-color: #f06543;
}

.github {
  width: 40px;
  height: 40px;
  background: url(http://alikinvv.github.io/github.svg) no-repeat center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  -webkit-animation: github 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s infinite;
          animation: github 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s infinite;
  z-index: 999;
}

@-webkit-keyframes github {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes github {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
<body>
    <header class="header">
        <div class="header__logo">
            <img src="https://alikinvv.github.io/svg-mask-slider/img/logo.svg" alt="">
        </div>
        <div class="header__menu">
            <img src="https://alikinvv.github.io/svg-mask-slider/img/menu.svg" alt="">
        </div>
    
    </header>
    <div class="portfolio slider-wrapper">
        <ul class="slider" data-step1="M1402,800h-2V0h1c0.6,0,1,0.4,1,1V800z" data-step2="M1400,800H379L771.2,0H1399c0.6,0,1,0.4,1,1V800z" data-step3="M1400,800H0V0h1399c0.6,0,1,0.4,1,1V800z" data-step4="M-2,800h2V0h-1c-0.6,0-1,0.4-1,1V800z" data-step5="M0,800h1021L628.8,0L1,0C0.4,0,0,0.4,0,1L0,800z" data-step6="M0,800h1400V0L1,0C0.4,0,0,0.4,0,1L0,800z">
    
            <li class="visible">
                <div class="svg-wrapper">
                    <svg viewBox="0 0 1400 800">
                        <defs>
                            <clipPath id="image-1">
                                <path id="changing-path-1" d="M1400,800H0V0h1399c0.6,0,1,0.4,1,1V800z" />
                            </clipPath>
                        </defs>
                        <image height='100%' width="100%" clip-path="url(#image-1)" href="https://alikinvv.github.io/svg-mask-slider/img/2.jpg"></image>
                        <div class="slider__info">
                            <p class="slider__title text">
                                <span class="text__first">
                                    <span class="text__word">News</span>
                                    <span class="text__first-bg" style="background-color: #3A7E94"></span>
                                </span>
                            </p>
                            <p class="slider__desc text">
                                <span class="text__second">
                                    <span class="text__word">BBC News provides trusted World and UK news as well <br> as local and regional perspectives. </span>
                                    <span class="text__second-bg" style="background-color: #E688A1"></span>
                                </span>
                            </p>
                        </div>
                        <div class="slider__link cd-slider-navigation">
                            <a href="#0" class="next-slide slider__site text">
                                <span class="text__first">
                                    <span class="text__word">Visit bbc.com<img class="arrow" src="https://alikinvv.github.io/svg-mask-slider/img/arrow.svg" alt=""></span>
                                    <span class="text__first-bg" style="background-color: #3A7E94"></span>
                                </span>
                            </a>
                            <p class="slider__visit text">
                                <span class="text__second">
                                    <span class="text__word">Official website</span>
                                    <span class="text__second-bg" style="background-color: #E688A1"></span>
                                </span>
                            </p>
                        </div>
                    </svg>
                </div> <!-- .svg-wrapper -->
            </li>
    
            <li>
                <div class="svg-wrapper">
                    <svg viewBox="0 0 1400 800">
                        <defs>
                            <clipPath id="image-2">
                                <path id="changing-path-2" d="M1400,800H0V0h1399c0.6,0,1,0.4,1,1V800z" />
                            </clipPath>
                        </defs>
                        <image height='100%' width="100%" clip-path="url(#image-2)" href="https://alikinvv.github.io/svg-mask-slider/img/1.jpg"></image>
    
                        <div class="slider__info">
                            <p class="slider__title text">
                                <span class="text__first">
                                    <span class="text__word">Search</span>
                                    <span class="text__first-bg" style="background-color: #535986"></span>
                                </span>
                            </p>
                            <p class="slider__desc text">
                                <span class="text__second">
                                    <span class="text__word">Search the world's information, including webpages, images, videos and more. <br> Google has many special features.</span>
                                    <span class="text__second-bg" style="background-color: #DABDB2"></span>
                                </span>
                            </p>
    
                        </div>
                        <div class="slider__link cd-slider-navigation">
                            <a href="#0" class="next-slide slider__site text">
                                <span class="text__first">
                                    <span class="text__word">Visit google.com<img class="arrow" src="https://alikinvv.github.io/svg-mask-slider/img/arrow.svg" alt=""></span>
                                    <span class="text__first-bg" style="background-color: #535986"></span>
                                </span>
                            </a>
                            <p class="slider__visit text">
                                <span class="text__second">
                                    <span class="text__word">Official website</span>
                                    <span class="text__second-bg" style="background-color: #DABDB2"></span>
                                </span>
                            </p>
                        </div>
                    </svg>
    
                </div> <!-- .svg-wrapper -->
            </li>
    
            <li>
                <div class="svg-wrapper">
                    <svg viewBox="0 0 1400 800">
                        <defs>
                            <clipPath id="image-3">
                                <path id="changing-path-3" d="M1400,800H0V0h1399c0.6,0,1,0.4,1,1V800z" />
                            </clipPath>
                        </defs>
                        <image height='100%' width="100%" clip-path="url(#image-3)" href="https://alikinvv.github.io/svg-mask-slider/img/3.jpg"></image>
    
                        <div class="slider__info">
                            <p class="slider__title text">
                                <span class="text__first">
                                    <span class="text__word">BBC</span>
                                    <span class="text__first-bg" style="background-color: #1ABDFE"></span>
                                </span>
                            </p>
                            <p class="slider__desc text">
                                <span class="text__second">
                                    <span class="text__word">BBC News provides trusted World and UK news as well <br> as local and regional perspectives. </span>
                                    <span class="text__second-bg" style="background-color: #CB1537"></span>
                                </span>
                            </p>
                        </div>
                        <div class="slider__link cd-slider-navigation">
                            <a href="#0" class="next-slide slider__site text">
                                <span class="text__first">
                                    <span class="text__word">Visit bbc.com<img class="arrow" src="https://alikinvv.github.io/svg-mask-slider/img/arrow.svg" alt=""></span>
                                    <span class="text__first-bg" style="background-color: #1ABDFE"></span>
                                </span>
                            </a>
                            <p class="slider__visit text">
                                <span class="text__second">
                                    <span class="text__word">Official website</span>
                                    <span class="text__second-bg" style="background-color: #CB1537"></span>
                                </span>
                            </p>
                        </div>
                    </svg>
    
                </div> <!-- .svg-wrapper -->
            </li>
    
        </ul> <!-- .slider -->
    
        <ol class="slider-controls">
            <li class="selected"><a href="#0"><em>Item 1</em></a></li>
            <li><a href="#0"><em>Item 2</em></a></li>
            <li><a href="#0"><em>Item 2</em></a></li>
            <!-- other list items here -->
        </ol> <!-- .slider-controls -->
    </div> <!-- .slider-wrapper -->
    
    <a href="https://github.com/alikinvv/svg-mask-slider" target="_blank" class="github"></a>
</body>
<script>
    jQuery(document).ready(function () {
	var time = 100;
	var timetext = 1400;

	var trigger = false;

	var tl = new TimelineLite({ delay: 1 }),
		firstBg = document.querySelectorAll(".text__first-bg"),
		secBg = document.querySelectorAll(".text__second-bg"),
		word = document.querySelectorAll(".text__word");

	tl
		.to(firstBg, 0.2, { scaleX: 1 })
		.to(secBg, 0.2, { scaleX: 1 })
		.to(word, 0.1, { opacity: 1 }, "-=0.1")
		.to(firstBg, 0.2, { scaleX: 0 })
		.to(secBg, 0.2, { scaleX: 0 });

	trigger = true;

	var tl2 = new TimelineLite({ delay: 1 });

	tl2
		.to($(".text__word"), 0.1, { opacity: 0 })
		.to($(".slider image"), 0.2, { scale: 1 }, "-=0.1")
		.to(
			$(".slider"),
			0.9,
			{ ease: Circ.easeOut, top: 100, left: 120, right: 120, bottom: 100 },
			"-=0.2"
		)
		.to($(".slider"), 0.75, {
			ease: Elastic.easeOut.config(4, 1.5),
			top: -5,
			left: -5,
			right: -5,
			bottom: -5
		})
		//.to($('.slider image'), 2, {ease: Power4.easeOut,scale: 1}, '-=1')
		.pause();

	var duration = 500,
		epsilon = time / 60 / duration / 4,
		firstCustomMinaAnimation = bezier(0.42, 0.03, 0.77, 0.63, epsilon),
		secondCustomMinaAnimation = bezier(0.27, 0.5, 0.6, 0.99, epsilon),
		animating = false;

	//initialize the slider
	$(".slider-wrapper").each(function () {
		initSlider($(this));
	});

	function initSlider(sliderWrapper) {
		//cache jQuery objects
		var slider = sliderWrapper.find(".slider"),
			sliderNav = sliderWrapper.find(".slider-navigation"),
			sliderControls = sliderWrapper.find(".slider-controls").find("li");

		//store path 'd' attribute values
		var pathArray = [];
		pathArray[0] = slider.data("step1");
		pathArray[1] = slider.data("step4");
		pathArray[2] = slider.data("step2");
		pathArray[3] = slider.data("step5");
		pathArray[4] = slider.data("step3");
		pathArray[5] = slider.data("step6");

		//update visible slide when user clicks next/prev arrows
		// sliderNav.on('click', '.next-slide', function(event){
		// 	event.preventDefault();
		// 	setTimeout(function() {
		// 	nextSlide(slider, sliderControls, pathArray);
		// 	},time);
		// });
		// sliderNav.on('click', '.prev-slide', function(event){
		// 	event.preventDefault();
		// 	setTimeout(function() {
		// 		prevSlide(slider, sliderControls, pathArray);
		// 	},time);
		// });

		//detect swipe event on mobile - update visible slide
		slider.on("swipeleft", function (event) {
			if (trigger) {
				trigger = false;
				setTimeout(function () {
					prevSlide(slider, sliderControls, pathArray);
				}, time);

				tl2.restart();

				setTimeout(function () {
					tl.restart();
					trigger = true;
				}, timetext);
			}
		});

		slider.on("swiperight", function (event) {
			if (trigger) {
				trigger = false;
				setTimeout(function () {
					nextSlide(slider, sliderControls, pathArray);
				}, time);

				tl2.restart();

				setTimeout(function () {
					tl.restart();
					trigger = true;
				}, timetext);
			}
		});

		//update visible slide when user clicks .slider-controls buttons
		sliderControls.on("click", function (event) {
			event.preventDefault();
			var selectedItem = $(this);
			if (!selectedItem.hasClass("selected") && trigger) {
				trigger = false;

				setTimeout(function () {
					// if it's not already selected
					var selectedSlidePosition = selectedItem.index(),
						selectedSlide = slider.children("li").eq(selectedSlidePosition),
						visibleSlide = retrieveVisibleSlide(slider),
						visibleSlidePosition = visibleSlide.index(),
						direction = "";
					direction = visibleSlidePosition < selectedSlidePosition ? "next" : "prev";
					updateSlide(
						visibleSlide,
						selectedSlide,
						direction,
						sliderControls,
						pathArray
					);
				}, time);

				tl2.restart();

				setTimeout(function () {
					tl.restart();
					trigger = true;
				}, timetext);
			}
		});

		//keyboard slider navigation
		$(document).keyup(function (event) {
			if (event.which == "37" && elementInViewport(slider.get(0)) && trigger) {
				trigger = false;
				setTimeout(function () {
					prevSlide(slider, sliderControls, pathArray);
				}, time);

				tl2.restart();

				setTimeout(function () {
					tl.restart();
					trigger = true;
				}, timetext);
			} else if (
				event.which == "39" &&
				elementInViewport(slider.get(0)) &&
				trigger
			) {
				trigger = false;

				setTimeout(function () {
					nextSlide(slider, sliderControls, pathArray);
				}, time);

				tl2.restart();

				setTimeout(function () {
					tl.restart();
					trigger = true;
				}, timetext);
			}
		});
	}

	function retrieveVisibleSlide(slider, sliderControls, pathArray) {
		return slider.find(".visible");
	}
	function nextSlide(slider, sliderControls, pathArray) {
		var visibleSlide = retrieveVisibleSlide(slider),
			nextSlide =
				visibleSlide.next("li").length > 0
					? visibleSlide.next("li")
					: slider.find("li").eq(0);
		updateSlide(visibleSlide, nextSlide, "next", sliderControls, pathArray);
	}
	function prevSlide(slider, sliderControls, pathArray) {
		var visibleSlide = retrieveVisibleSlide(slider),
			prevSlide =
				visibleSlide.prev("li").length > 0
					? visibleSlide.prev("li")
					: slider.find("li").last();
		updateSlide(visibleSlide, prevSlide, "prev", sliderControls, pathArray);
	}
	function updateSlide(oldSlide, newSlide, direction, controls, paths) {
		if (!animating) {
			//don't animate if already animating
			animating = true;
			var clipPathId = newSlide.find("path").attr("id"),
				clipPath = Snap("#" + clipPathId);

			if (direction == "next") {
				var path1 = paths[0],
					path2 = paths[2],
					path3 = paths[4];
			} else {
				var path1 = paths[1],
					path2 = paths[3],
					path3 = paths[5];
			}

			updateNavSlide(newSlide, controls);
			newSlide.addClass("is-animating");
			clipPath
				.attr("d", path1)
				.animate({ d: path2 }, duration, firstCustomMinaAnimation, function () {
					clipPath.animate(
						{ d: path3 },
						duration,
						secondCustomMinaAnimation,
						function () {
							oldSlide.removeClass("visible");
							newSlide.addClass("visible").removeClass("is-animating");
							animating = false;
						}
					);
				});
		}
	}

	function updateNavSlide(actualSlide, controls) {
		var position = actualSlide.index();
		controls.removeClass("selected").eq(position).addClass("selected");
	}

	function bezier(x1, y1, x2, y2, epsilon) {
		//https://github.com/arian/cubic-bezier
		var curveX = function (t) {
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};

		var curveY = function (t) {
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};

		var derivativeCurveX = function (t) {
			var v = 1 - t;
			return (
				3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2
			);
		};

		return function (t) {
			var x = t,
				t0,
				t1,
				t2,
				x2,
				d2,
				i;

			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++) {
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}

			(t0 = 0), (t1 = 1), (t2 = x);

			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);

			// Fallback to the bisection method for reliability.
			while (t0 < t1) {
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;
				else t1 = t2;
				t2 = (t1 - t0) * 0.5 + t0;
			}

			// Failure
			return curveY(t2);
		};
	}

	function elementInViewport(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < window.pageYOffset + window.innerHeight &&
			left < window.pageXOffset + window.innerWidth &&
			top + height > window.pageYOffset &&
			left + width > window.pageXOffset
		);
	}
});

</script>
</html>
