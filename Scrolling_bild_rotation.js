<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
	<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js"></script>
	<title>Document</title>
</head>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  font-size: 16px;
}

body {
  margin: 0;
  --color-text: #dc6e25;
  --color-bg: #efded3;
  --color-link: #000;
  --color-link-hover: #dc6e25;
  --aspect-ratio: 1/1.5;
  --imgwidthmax: 500px;
  --size-title: 10rem;
  --font-weight-title: 400;
  color: var(--color-text);
  background-color: var(--color-bg);
  font-family: turquoise, serif;
  font-size: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.scroll {
  --color-text: #905348;
  --color-bg: #120605;
  --color-link: #8f8f76;
  --color-link-hover: #fff;
  font-size: 1rem;
  --imgwidthmax: 400px;
  --color-description: #7e605b;
  --font-title: ivymode;
  --size-title: 6vw;
  --imgwidthmax: 600px;
}

a {
  text-decoration: none;
  color: var(--color-link);
  outline: none;
}

a:hover,
a:focus {
  color: var(--color-link-hover);
  outline: none;
}

.page {
  display: grid;
  padding: 5vw;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 100%;
  grid-template-areas: "header" "grid";
  will-change: transform;
}

.page__title {
  grid-area: header;
  margin: 0 0 0.5rem;
  font-family: "Righteous", cursive;
  font-size: var(--size-title);
  font-weight: 400;
}

.arrow {
  width: 60px;
  height: 80px;
  position: absolute;
  top: 1%;
  right: 5%;
  z-index: 999;
}

.arrow path {
  stroke: var(--color-text);
  stroke-width: 2px;
  fill: transparent;
  animation: down 2s infinite;
}

@keyframes down {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.arrow path.a1 {
  animation-delay: -1s;
}
.arrow path.a2 {
  animation-delay: -0.5s;
}
.arrow path.a3 {
  animation-delay: 0s;
}

.content {
  grid-area: grid;
  margin: 25vh 0 30vh;
}

.content--padded {
  padding: 0 10vw;
}

.content__item {
  --imgwidth: calc(var(--imgwidthmax) * var(--aspect-ratio));
  width: var(--imgwidth);
  max-width: 100%;
  position: relative;
  will-change: transform;
  margin-bottom: 30vh;
  display: grid;
  grid-template-columns: 50% 50%;
}

.content--center .content__item {
  margin: 0 auto 60vh;
}

.content__item--expand {
  width: 100%;
  grid-template-columns: minmax(0, var(--imgwidth)) 1fr;
}

.content__item--expand:nth-child(even) {
  grid-template-columns: 1fr minmax(0, var(--imgwidth));
}

.content--alternate .content__item {
  max-width: 90vw;
}

.content--alternate .content__item:nth-child(even) {
  margin-left: auto;
}

.content__item-imgwrap {
  position: relative;
  --imgwidth: 100%;
  margin: 0 auto;
  grid-area: 1 / 1 / 3 / 3;
  overflow: hidden;
  width: var(--imgwidth);
  padding-bottom: calc(var(--imgwidth) / (var(--aspect-ratio)));
  will-change: transform;
}

.content__item--expand .content__item-imgwrap {
  grid-area: 1 / 1 / 3 / 2;
}

.content__item--expand:nth-child(even) .content__item-imgwrap {
  grid-area: 1 / 2 / 3 / 3;
  justify-self: end;
}

.content__item-img {
  --overflow: 40px;
  height: calc(100% + (2 * var(--overflow)));
  top: calc(-1 * var(--overflow));
  width: 100%;
  position: absolute;
  background-size: cover;
  background-position: 50% 0%;
  will-change: transform;
  opacity: 0.8;
}

.content__item-number {
  opacity: 0.03;
  font-size: 25vw;
  position: absolute;
  top: -7vw;
  right: -10vw;
  line-height: 1;
}

.content__item:nth-child(even) .content__item-number {
  right: auto;
  left: -7vw;
}

.content__item-title {
  position: relative;
  font-size: var(--size-title);
  padding: 0 3vw;
  margin: calc(var(--size-title) * -1 / 2) 0 0 0;
  align-self: start;
  line-height: 1;
  font-family: var(--font-title);
  font-weight: var(--font-weight-title);
  color: var(--color-title);
  will-change: transform;
  mix-blend-mode: var(--blendmode-title);
}

.credits {
  text-align: center;
}

.credits a {
  color: var(--color-text);
}

.credits a:hover {
  color: #fff;
}

.credits--fixed {
  position: fixed;
  bottom: 5vw;
  margin: 0;
  left: 5vw;
  width: 90vw;
  text-align: right;
}

.credits--fixed::before {
  content: "";
  background: currentColor;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5rem;
  width: 1px;
}

.content--center .content__item-title {
  grid-area: 1 / 1 / 3 / 3;
  margin: auto;
}

.content__item-title--layer {
  padding: 0;
  z-index: 10;
  grid-area: 1 / 1 / 2 / 3;
  width: 100%;
  text-align: center;
}

.content__item-description {
  grid-area: 3 / 1 / 3 / 3;
  width: 70%;
  position: relative;
  margin: 0;
  padding: 1rem 0 0 0;
  color: var(--color-description);
}

.content--alternate .content__item-title,
.content__item--wide:nth-child(even) .content__item-description {
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
}

.content--alternate .content__item:nth-child(even) .content__item-title,
.content__item--wide .content__item-description {
  grid-area: 3 / 2 / 4 / 3;
  justify-self: end;
  width: auto;
}

.content__item--expand .content__item-description {
  grid-area: 1 / 2 / 3 / 3;
  justify-self: start;
  align-self: start;
  padding: 0 2rem;
  width: 250px;
  font-size: 0.9rem;
}

.content__item--expand:nth-child(even) .content__item-description {
  grid-area: 1 / 1 / 3 / 2;
  justify-self: end;
  text-align: right;
}

@media screen and (min-width: 53em) {
  .page--layout-2 {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header" "...  meta" "grid grid";
  }
}

@media screen and (max-width: 40em) {
  .content__item--expand .content__item-imgwrap,
  .content__item--expand:nth-child(even) .content__item-imgwrap {
    grid-area: 1 / 1 / 3 / 3;
  }
  .content__item--expand .content__item-description,
  .content__item--expand:nth-child(even) .content__item-description,
  .content__item--wide .content__item-description,
  .content__item--wide:nth-child(even) .content__item-description {
    grid-area: 3 / 1 / 4 / 3;
    padding: 1rem 0;
    width: 100%;
    text-align: left;
  }
  .content__item--wide .content__item-description {
    padding: 1rem;
  }
  .content--alternate .content__item-title,
  .content--alternate .content__item:nth-child(even) .content__item-title {
    grid-area: 1 / 1 / 4 / 2;
  }
}

</style>
<body>
	<body class="scroll loading">
		<main>
		  <div data-scroll class="page page--layout-2">
			<h1 class="page__title">#scroll</h1>
	  
			<!--Animated Arrow by @joshgjohnson
	  -->
			<svg class="arrow">
			  <path class="a1" d="M0 0 L30 22 L60 0"></path>
			  <path class="a2" d="M0 20 L30 42 L60 20"></path>
			  <path class="a3" d="M0 40 L30 62 L60 40"></path>
			</svg>
	  
			<div class="content content--alternate content--padded">
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 700/525">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Leopard</h2>
				<p class="content__item-description">
				  The English name 'leopard' comes from Old French: leupart or
				  Middle French: liepart, that derives from Latin: leopardus and
				  Ancient Greek: λέοπάρδος (leopardos).
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 700/460">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/208840/pexels-photo-208840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Irbis</h2>
				<p class="content__item-description">
				  The name 'irbis' comes from the Turkic language, it was borrowed
				  by Russian fur traders from local hunters in the XVII century. In
				  different regions of Central Asia, the predator was called
				  differently: irbish, irbiz, irvish, ilbers.
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 600/450">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/146067/pexels-photo-146067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Tiger</h2>
				<p class="content__item-description">
				  The Middle English 'tigre' and Old English tigras derive French
				  tigre, from Latin tigris.
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 600/500">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Lion</h2>
				<p class="content__item-description">
				  The word 'lion' is derived from Latin: leo and Ancient Greek: λέων
				  (leon).
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 600/455">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/2544554/pexels-photo-2544554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Cheetah</h2>
				<p class="content__item-description">
				  The vernacular name 'cheetah' is derived from Hindustani Urdu:
				  چیتا‎ and Hindi: चीता (ćītā).
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 600/470">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/7386324/pexels-photo-7386324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Lynx</h2>
				<p class="content__item-description">
				  The name 'lynx' originated in Middle English via Latin from the
				  Greek word λύγξ, derived from the Indo-European root leuk-
				  ('light, brightness') in reference to the luminescence of its
				  reflective eyes.
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 600/460">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://get.wallhere.com/photo/manul-wool-fur-snout-667968.jpg);
									  "></div>
				</div>
				<h2 class="content__item-title">Manul</h2>
				<p class="content__item-description">
				  'Manul' is the Pallas's cat's name in the Kyrgyz language. It is
				  called 'manol' in the Mongolian language. The name 'Pallas's cat'
				  was coined by William Thomas Blanford in honour of Peter Simon
				  Pallas. The alternate spelling 'Pallas' cat' is also used.
				</p>
			  </div>
	  
			  <div class="content__item content__item--expand" style="--aspect-ratio: 600/460">
				<div class="content__item-imgwrap">
				  <div class="content__item-img" style="
										  background-image: url(https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
									  "></div>
				</div>
				<h2 class="content__item-title">Cat</h2>
				<p class="content__item-description">
				  The origin of the English word 'cat', Old English catt, is thought
				  to be the Late Latin word cattus, which was first used at the
				  beginning of the 6th century.
				</p>
			  </div>
	  
			  <p class="credits">
				<a href="https://codepen.io/DivineBlow" target="_blank"><i class="fab fa-codepen"></i> DivineBlow <i class="fab fa-codepen"></i></a>
			  </p>
	  
			</div>
		  </div>
		</main>
	  </body>
</body>
<script>
	{
  const MathUtils = {
    map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
    lerp: (a, b, n) => (1 - n) * a + n * b,

    getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
  };

  const body = document.body;

  let winsize;
  const calcWinsize = () =>
    (winsize = { width: window.innerWidth, height: window.innerHeight });
  calcWinsize();

  window.addEventListener("resize", calcWinsize);

  let docScroll;
  let lastScroll;
  let scrollingSpeed = 0;

  const getPageYScroll = () =>
    (docScroll = window.pageYOffset || document.documentElement.scrollTop);
  window.addEventListener("scroll", getPageYScroll);

  class Item {
    constructor(el) {
      // the .item element
      this.DOM = { el: el };
      this.DOM.image = this.DOM.el.querySelector(".content__item-img");
      this.DOM.imageWrapper = this.DOM.image.parentNode;
      // 3d stuff
      this.DOM.el.style.perspective = "1000px";
      this.DOM.imageWrapper.style.transformOrigin = "50% 100%";
      this.ry = MathUtils.getRandomFloat(-0.5, 0.5);
      this.rz = MathUtils.getRandomFloat(-0.5, 0.5);
      this.DOM.title = this.DOM.el.querySelector(".content__item-title");
      this.DOM.title.style.transform = "translate3d(0,0,200px)";
      this.renderedStyles = {
        // here we define which property will change as we scroll the page and the item is inside the viewport
        // in this case we will be:
        // - translating the inner image
        // - rotating the item
        // we interpolate between the previous and current value to achieve a smooth effect
        innerTranslationY: {
          previous: 0,
          current: 0,
          ease: 0.1,

          setValue: () => {
            // the maximum value to translate the image is set in a CSS variable (--overflow)
            const toValue = parseInt(
              getComputedStyle(this.DOM.image).getPropertyValue("--overflow"),
              10
            );
            const fromValue = -1 * toValue;
            return Math.max(
              Math.min(
                MathUtils.map(
                  this.props.top - docScroll,
                  winsize.height,
                  -1 * this.props.height,
                  fromValue,
                  toValue
                ),
                toValue
              ),
              fromValue
            );
          }
        },
        itemRotation: {
          previous: 0,
          current: 0,
          ease: 0.1,
          toValue: Number(MathUtils.getRandomFloat(-70, -50)),

          setValue: () => {
            const toValue = this.renderedStyles.itemRotation.toValue;
            const fromValue = toValue * -1;
            const val = MathUtils.map(
              this.props.top - docScroll,
              winsize.height * 1.5,
              -1 * this.props.height,
              fromValue,
              toValue
            );
            return Math.min(Math.max(val, toValue), fromValue);
          }
        }
      };

      this.getSize();
      this.update();

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => (this.isVisible = entry.intersectionRatio > 0)
        );
      });
      this.observer.observe(this.DOM.el);
      this.initEvents();
    }
    update() {
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      this.layout();
    }
    getSize() {
      const rect = this.DOM.el.getBoundingClientRect();
      this.props = {
        // item's height
        height: rect.height,
        // offset top relative to the document
        top: docScroll + rect.top
      };
    }
    initEvents() {
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      this.getSize();
      this.update();
    }
    render() {
      // update the current and interpolated values
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }

      this.layout();
    }
    layout() {
      // translates the image
      this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`;
      // rotate the image wrapper
      this.DOM.imageWrapper.style.transform = `rotate3d(1,${this.ry},${this.rz},${this.renderedStyles.itemRotation.previous}deg)`;
    }
  }

  // SmoothScroll
  class SmoothScroll {
    constructor() {
      this.DOM = { main: document.querySelector("main") };
      // the scrollable element
      // we translate this element when scrolling (y-axis)
      this.DOM.scrollable = this.DOM.main.querySelector("div[data-scroll]");
      // the items on the page
      this.items = [];
      this.DOM.content = this.DOM.main.querySelector(".content");
      [...this.DOM.content.querySelectorAll(".content__item")].forEach((item) =>
        this.items.push(new Item(item))
      );

      this.renderedStyles = {
        translationY: {
          previous: 0,
          current: 0,
          ease: 0.1,

          setValue: () => docScroll
        }
      };
      // set the body's height
      this.setSize();
      // set the initial values
      this.update();
      // the <main> element's style needs to be modified
      this.style();
      // init/bind events
      this.initEvents();
      // start the render loop
      requestAnimationFrame(() => this.render());
    }
    update() {
      // sets the initial value (no interpolation) - translate the scroll value
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[
          key
        ].previous = this.renderedStyles[key].setValue();
      }
      // translate the scrollable element
      this.layout();
    }
    layout() {
      this.DOM.scrollable.style.transform = `translate3d(0,${
        -1 * this.renderedStyles.translationY.previous
      }px,0)`;
    }
    setSize() {
      // set the heigh of the body in order to keep the scrollbar on the page
      body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
    }
    style() {
      this.DOM.main.style.position = "fixed";
      this.DOM.main.style.width = this.DOM.main.style.height = "100%";
      this.DOM.main.style.top = this.DOM.main.style.left = 0;
      this.DOM.main.style.overflow = "hidden";
    }
    initEvents() {
      // on resize reset the body's height
      window.addEventListener("resize", () => this.setSize());
    }
    render() {
      // Get scrolling speed
      // Update lastScroll
      scrollingSpeed = Math.abs(docScroll - lastScroll);
      lastScroll = docScroll;

      // update the current and interpolated values
      for (const key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].ease
        );
      }

      this.layout();

      // for every item
      for (const item of this.items) {
        if (item.isVisible) {
          if (item.insideViewport) {
            item.render();
          } else {
            item.insideViewport = true;
            item.update();
          }
        } else {
          item.insideViewport = false;
        }
      }

      requestAnimationFrame(() => this.render());
    }
  }

  /***********************************/
  /********** Preload stuff **********/

  // Preload images
  const preloadImages = () => {
    return new Promise((resolve, reject) => {
      imagesLoaded(
        document.querySelectorAll(".content__item-img"),
        { background: true },
        resolve
      );
    });
  };

  preloadImages().then(() => {
    // Remove the loader
    document.body.classList.remove("loading");
    // Get the scroll position and update the lastScroll variable
    getPageYScroll();
    lastScroll = docScroll;
    new SmoothScroll();
  });
}

</script>
</html>
