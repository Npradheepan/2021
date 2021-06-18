<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
  <title>Document</title>
</head>
<style>
*,
*::after,
*::before {
	box-sizing: border-box;
}

html {
	background: #fff;
}

body {
	--color-text: #000;
	--color-bg: #fff;
	--color-link: #000;
	--color-link-hover: #858585;
	--color-nav-bg: #fff;
	--color-nav-hover: #858585;
	--color-cart-bg: #000;
	--color-cart: #fff;
	--color-details-hover: #858585;
	font-family: Futura, "Trebuchet MS", Arial, sans-serif;
	min-height: 100vh;
	color: #57585c;
	color: var(--color-text);
	background-color: #fff;
	background-color: var(--color-bg);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
	-webkit-appearance: button;
	cursor: pointer;
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
}

button:focus,
a:focus {
	outline: none;
}

.hidden {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

/* Icons */
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
}

main {
	position: relative;
	width: 100%;
}

.content {
	text-align: center;
}

.info {
	display: block;
	max-width: 260px;
	margin: 0 1rem;
	font-weight: bold;
}

.page-header__title {
	font-size: 1rem;
	margin: 0;
}

.page-header__title-inner {
	position: relative;
	line-height: 1.25;
	margin: 0 0.5rem 0 0;
	padding: 0 1rem 0 0;
}

.page-header__title-inner::after {
	content: "";
	right: 0;
	width: 3px;
	height: 1.25rem;
	background: currentColor;
	position: absolute;
}

.page-header__title-sub {
	position: relative;
}

.social {
	display: none;
}

.social__item {
	display: block;
	font-size: 0.75rem;
	margin: 0 0.25rem;
}

.slideshow {
	position: relative;
	width: 100%;
	margin-top: 1rem;
}

.slideshow::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1000;
	opacity: 0;
	transition: opacity 0.4s;
}

.slideshow--details::after {
	opacity: 1;
}

.slide {
	width: 100%;
	height: 50vh;
	top: 0;
	left: 0;
	position: absolute;
	overflow-x: hidden;
	pointer-events: none;
	opacity: 0;
}

.slide--current {
	opacity: 1;
	z-index: 999;
	pointer-events: auto;
	position: relative;
}

.slide__wrap {
	width: 100%;
	height: 50vh;
	overflow: hidden;
	position: relative;
}

.slide__bg,
.slide__img {
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: white;
	background-size: cover;
	background-position: 50% 50%;
	position: absolute;
	pointer-events: none;
}

.slide__bg {
	filter: grayscale(1) brightness(0.7);
}

.slide__title-wrap {
	padding: 2rem 1rem 0;
	text-align: center;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.slide__title {
	margin: 0;
	font-size: 3.5rem;
	line-height: 0.9;
	white-space: pre;
	text-align: left;
}

.slide__title span {
	display: inline-block;
}

.slide__subtitle {
	font-size: 1.15rem;
	font-weight: normal;
	text-align: left;
}

.boxnav {
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	z-index: 1000;
	width: 100%;
}

.boxnav__item {
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--color-nav-bg);
	border: 0;
	height: 4rem;
	flex: 1;
}

.boxnav__item--prev:hover,
.boxnav__item--next:hover {
	color: var(--color-nav-hover);
}

.boxnav__item:focus {
	outline: none;
}

.boxnav__label {
	padding: 0 0.5rem;
	font-size: 1.15rem;
	position: relative;
}

.boxnav__label--total::before {
	content: "";
	position: absolute;
	right: 100%;
	top: 0;
	width: 2px;
	height: 1.45rem;
	background: #000;
	transform: rotate(22.5deg);
}

.icon--caret-rot {
	transform: rotate(180deg);
}

.details-wrap {
	position: relative;
	pointer-events: none;
	width: 100%;
	z-index: 10000;
}

.details {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	display: grid;
	grid-auto-rows: 80px;
	overflow: hidden;
}

.details-wrap--open .details--current {
	pointer-events: auto;
}

.details__item {
	overflow: hidden;
}

.details__item--addtocart {
	grid-row: 4;
}

.details__inner {
	width: 100%;
	height: 100%;
}

.details__inner {
	display: flex;
	align-items: center;
	justify-content: space-around;
	transform: translate3d(100%, 0, 0);
}

.details__item-img {
	display: none;
}

.details__inner--sizes {
	background: #d4d4d4;
}

.details__size {
	position: relative;
	cursor: pointer;
}

.details__size--selected::before {
	content: "";
	position: absolute;
	width: 2rem;
	height: 2rem;
	top: 50%;
	left: 50%;
	margin: -1rem 0 0 -1rem;
	border: 2px solid #333;
	border-radius: 50%;
}

.details__size--disabled {
	color: #d42d2d;
	cursor: not-allowed;
}

.details__inner--price {
	background: #6ff8ed;
	color: rgb(2, 2, 2);
	font-size: 1.55rem;
}

.details__inner--colors {
	background: rgba(255, 255, 255, 0.007);
	backdrop-filter: blur(20px);
}

.details__color {
	width: 1.5rem;
	height: 1.5rem;
	overflow: hidden;
	color: transparent;
	border-radius: 50%;
	align-self: center;
	justify-self: center;
	cursor: pointer;
}

.details__color--WhiteBlack {
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 20%,
		rgba(0, 0, 0, 1) 100%
	);
}

.details__color--BeigeGray {
	background: rgb(240, 190, 143);
	background: linear-gradient(
		90deg,
		rgb(240, 190, 143) 20%,
		rgb(92, 84, 84) 100%
	);
}

.details__color--BlueBlack {
	background: rgb(16, 134, 245);
	background: linear-gradient(
		90deg,
		rgb(16, 134, 245) 20%,
		rgba(0, 0, 0, 1) 100%
	);
}

.details__color--PinkBlack {
	background: rgb(134, 16, 245);
	background: linear-gradient(
		90deg,
		rgb(134, 16, 245) 20%,
		rgba(0, 0, 0, 1) 100%
	);
}

.details__color--WhiteRedBlue {
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 10%,
		rgba(121, 9, 9, 1) 45%,
		rgba(0, 212, 255, 1) 100%
	);
}

.details__color--WhiteGreenBlack {
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 10%,
		rgb(4, 233, 138) 45%,
		rgb(0, 0, 0) 100%
	);
}

.details__color--red {
	background: #ff0000;
}

.details__color--green {
	background: #32f8a5;
}

.details__color--sky {
	background: #add8e6;
}

.details__inner--grid {
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(3, 1fr);
}

.action {
	border: 0;
	padding: 0;
	flex: 1;
	align-self: stretch;
	background: none;
}

.action--addtocart {
	background: #6ff8ed;
	color: var(--color-cart-bg);
}

.action--close {
	background: var(--color-cart-bg);
	color: #6ff8ed;
	text-transform: lowercase;
}

.action--details {
	position: absolute;
	z-index: 3000;
	top: 100%;
	font-weight: bold;
	font-size: 1.15rem;
	width: 100%;
	background: #000;
	padding: 1rem;
	color: #fff;
}

@media screen and (min-width: 53em) {
	body {
		padding: 0;
	}
	.content {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		min-height: 100vh;
		text-align: left;
	}
	.content--fixed {
		position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		display: grid;
		align-content: space-between;
		width: 100%;
		max-width: none;
		min-height: 0;
		height: 100vh;
		padding: 1.5rem 4rem 2rem;
		pointer-events: none;
		align-items: start;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto auto auto;
		grid-template-areas:
			"pageheader ..."
			"... ..."
			"tagline ...";
	}

	.page-header {
		grid-area: pageheader;
		align-self: start;
		justify-self: start;
		position: relative;
		display: flex;
		padding: 1.25rem 1.5rem 1.25rem 0;
		pointer-events: none;
	}
	.page-header::before {
		content: "";
		background: #000;
		width: calc(100% + 4rem);
		height: 100%;
		position: absolute;
		left: -4rem;
		top: 0;
		transform: translate3d(-100%, 0, 0) translate3d(2rem, 0, 0);
		transition: transform 0.3s;
		pointer-events: auto;
	}
	.page-header:hover::before {
		transform: translate3d(0, 0, 0);
	}
	.page-header::after {
		content: "";
		width: 17rem;
		height: 100%;
		position: absolute;
		left: -2rem;
		top: 0;
		pointer-events: auto;
	}
	.page-header__title {
		transition: color 0.3s;
	}
	.page-header:hover .page-header__title {
		color: #fff;
	}
	.social {
		display: flex;
		list-style: none;
		margin: 0 0 0 3rem;
		padding: 0;
		position: relative;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s;
	}
	.social__item-link {
		color: #fff;
	}
	.icon--social {
		opacity: 0;
		transform: translate3d(0, 150%, 0);
		transition: opacity 0.2s linear, transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
		transition-delay: 0.05s;
	}
	.icon--instagram {
		transition-delay: 0.1s;
	}
	.icon--facebook {
		transition-delay: 0.15s;
	}
	.page-header:hover .social {
		opacity: 1;
		pointer-events: auto;
	}
	.page-header:hover .social__item-link .icon {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	.content--fixed a {
		pointer-events: auto;
	}

	.tagline {
		margin: 0;
		grid-area: tagline;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}
	.slideshow {
		overflow: hidden;
		margin: 0;
		height: 100vh;
	}
	.slide {
		height: 100vh;
	}
	.slide__title-wrap {
		padding: calc(6rem + 10vh) 0 0 4rem;
		text-align: left;
	}
	.slide__title {
		font-size: 4.5vw;
	}
	.slide__subtitle {
		margin: 1rem 0 0 0.2rem;
		max-width: 300px;
	}
	.slide__wrap {
		height: 100%;
		position: absolute;
	}
	.slide__bg,
	.slide__img {
		background-position: 50% 70%;
	}
	.boxnav {
		left: auto;
		right: 60vw;
		width: auto;
	}
	.boxnav__item {
		width: 10vw;
		height: 12vw;
		flex: none;
	}
	.details-wrap {
		position: absolute;
		top: 0;
		right: 0;
		pointer-events: none;
	}
	.details {
		width: auto;
		grid-template-columns: 8rem 15rem 200px;
		grid-template-rows: 125px 125px 7rem 3.5rem;
	}
	.details__item-img {
		display: block;
		grid-area: 1 / 3 / 3 / 4;
		max-width: 100%;
	}
	.details__item-sizes {
		grid-area: 1 / 2 / 2 / 3;
	}
	.details__item-price {
		grid-area: 1 / 1 / 2 / 2;
	}
	.details__item-colors {
		grid-area: 2 / 2 / 3 / 3;
	}
	.details__item--addtocart {
		grid-area: 3 / 3 / 4 / 4;
	}
	.details__item--close {
		grid-area: 4 / 3 / 5 / 4;
	}
	.details__inner--grid {
		grid-template-columns: repeat(3, 1.5rem);
	}
	.action--details {
		top: calc(6rem + 10vh);
		right: 4rem;
		left: auto;
		background: none;
		color: inherit;
		width: auto;
		padding: 0;
	}
	.action--details:hover {
		color: var(--color-details-hover);
	}
}

</style>
<body>
  <svg class="hidden">
    <symbol id="icon-arrow" viewBox="0 0 24 24">
      <title>arrow</title>
      <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
    </symbol>
    <symbol id="icon-drop" viewBox="0 0 24 24">
      <title>drop</title>
      <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
      <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
    </symbol>
    <symbol id="icon-codepen" viewBox="0 0 24 24">
      <title>CodePen</title>
      <path d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z" />
    </symbol>
    <symbol id="icon-cart">
      <title>cart</title>
      <path d="M11 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
      <path d="M22 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
      <path d="M23.8 5.4c-0.2-0.3-0.5-0.4-0.8-0.4h-16.2l-0.8-4.2c-0.1-0.5-0.5-0.8-1-0.8h-4c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.2l0.8 4.2c0 0 0 0.1 0 0.1l1.7 8.3c0.3 1.4 1.5 2.4 2.9 2.4 0 0 0 0 0.1 0h9.7c1.5 0 2.7-1 3-2.4l1.6-8.4c0-0.3 0-0.6-0.2-0.8zM20.4 14.2c-0.1 0.5-0.5 0.8-1 0.8h-9.7c-0.5 0-0.9-0.3-1-0.8l-1.5-7.2h14.6l-1.4 7.2z"></path>
    </symbol>
    <symbol id="icon-caret" viewBox="0 0 16 24">
      <title>caret</title>
      <path d="M15.45 2.8L12.65 0l-12 12 12 12 2.8-2.8-9.2-9.2z" />
    </symbol>
  </svg>
  <main>
    <div class="content content--fixed">
      <div class="page-header">
        <h1 class="page-header__title">
          <span class="page-header__title-inner">LikeNuShus</span>
          <span class="page-header__title-sub">man &amp; woman</span>
        </h1>
        <ul class="social">
          <li class="social__item">
            <a class="social__item-link" href="https://codepen.io/DivineBlow" target="_blank">
              <svg class="icon icon--social icon--codepen">
                <use xlink:href="#icon-codepen"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <p class="tagline">Lightly Used Shoes, Cheap!</p>
    </div>
    <div class="slideshow">
      <div class="slide">
        <div class="slide__wrap">
          <div class="slide__img" style="background-image: url(https://images.pexels.com/photos/1456735/pexels-photo-1456735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);"></div>
          <div class="slide__title-wrap">
            <h3 class="slide__title">Asics</h3>
            <h4 class="slide__subtitle">#AnimaSanaInCorporeSano.</h4>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="slide__wrap">
          <div class="slide__img" style="background-image: url(https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8);"></div>
          <div class="slide__title-wrap">
            <h3 class="slide__title">Adidas</h3>
            <h4 class="slide__subtitle">#ImpossibleIsNothing</h4>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="slide__wrap">
          <div class="slide__img" style="background-image: url(https://images.unsplash.com/photo-1612902377756-414b2139d5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80);"></div>
          <div class="slide__title-wrap">
            <h3 class="slide__title">Nike</h3>
            <h4 class="slide__subtitle">#JustDoIt</h4>
          </div>
        </div>
      </div>
    </div><!-- /slideshow -->
    <nav class="boxnav">
      <button class="boxnav__item boxnav__item--prev">
        <svg class="icon icon--caret">
          <use xlink:href="#icon-caret"></use>
        </svg>
      </button>
      <div class="boxnav__item boxnav__item--label">
        <span class="boxnav__label boxnav__label--current">1</span>
        <span class="boxnav__label boxnav__label--total"></span>
      </div>
      <button class="boxnav__item boxnav__item--next">
        <svg class="icon icon--caret-rot">
          <use xlink:href="#icon-caret"></use>
        </svg>
      </button>
    </nav>
    <button class="action action--details">+ details</button>
    <!-- details -->
    <div class="details-wrap">
      <div class="details">
        <div class="details__item details__item-img" data-direction="ttb">
          <div class="details__inner">
            <img src="https://images.unsplash.com/photo-1584539696499-bff0b4768e4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=100" alt="Some image" />
          </div>
        </div>
        <div class="details__item details__item-sizes">
          <div class="details__inner details__inner--sizes">
            <span class="details__size">6</span>
            <span class="details__size">6.5</span>
            <span class="details__size details__size--selected">7</span>
            <span class="details__size">7.5</span>
            <span class="details__size">8</span>
            <span class="details__size">9</span>
            <span class="details__size details__size--disabled">9.5</span>
            <span class="details__size">10</span>
          </div>
        </div>
        <div class="details__item details__item--addtocart" data-direction="ttb">
          <div class="details__inner">
            <button class="action action--addtocart">
              <svg class="icon icon--cart">
                <use xlink:href="#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="details__item details__item-colors" data-direction="ttb">
          <div class="details__inner details__inner--grid details__inner--colors">
            <span class="details__color details__color--BeigeGray">Beige and Gray</span>
            <span class="details__color details__color--red">Red</span>
            <span class="details__color details__color--green">Green</span>
          </div>
        </div>
        <div class="details__item details__item-price">
          <div class="details__inner details__inner--price">$65</div>
        </div>
        <div class="details__item details__item--close" data-direction="ttb">
          <div class="details__inner">
            <button class="action action--close">Close</button>
          </div>
        </div>
      </div><!-- /details -->
      <div class="details">
        <div class="details__item details__item-img" data-direction="ttb">
          <div class="details__inner">
            <img src="https://images.unsplash.com/photo-1597000610458-c910e915835f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=100" alt="Some image" />
          </div>
        </div>
        <div class="details__item details__item-sizes">
          <div class="details__inner details__inner--sizes">
            <span class="details__size">6</span>
            <span class="details__size details__size--disabled">6.5</span>
            <span class="details__size">7</span>
            <span class="details__size">7.5</span>
            <span class="details__size details__size--selected">8</span>
            <span class="details__size">9</span>
            <span class="details__size details__size--disabled">9.5</span>
            <span class="details__size details__size--disabled">10</span>
          </div>
        </div>
        <div class="details__item details__item--addtocart" data-direction="ttb">
          <div class="details__inner">
            <button class="action action--addtocart">
              <svg class="icon icon--cart">
                <use xlink:href="#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="details__item details__item-colors" data-direction="ttb">
          <div class="details__inner details__inner--grid details__inner--colors">
            <span class="details__color details__color--WhiteBlack">White and Black</span>
            <span class="details__color details__color--BlueBlack">Blue and Black</span>
            <span class="details__color details__color--PinkBlack">Pink and Black</span>
          </div>
        </div>
        <div class="details__item details__item-price">
          <div class="details__inner details__inner--price">$30</div>
        </div>
        <div class="details__item details__item--close" data-direction="ttb">
          <div class="details__inner">
            <button class="action action--close">Close</button>
          </div>
        </div>
      </div><!-- /details -->
      <div class="details">
        <div class="details__item details__item-img" data-direction="ttb">
          <div class="details__inner">
            <img src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=100" alt="Some image" />
          </div>
        </div>
        <div class="details__item details__item-sizes">
          <div class="details__inner details__inner--sizes">
            <span class="details__size">6</span>
            <span class="details__size details__size--disabled">6.5</span>
            <span class="details__size">7</span>
            <span class="details__size details__size--disabled">7.5</span>
            <span class="details__size">8</span>
            <span class="details__size details__size--selected">9</span>
            <span class="details__size details__size--disabled">9.5</span>
            <span class="details__size">10</span>
          </div>
        </div>
        <div class="details__item details__item--addtocart" data-direction="ttb">
          <div class="details__inner">
            <button class="action action--addtocart">
              <svg class="icon icon--cart">
                <use xlink:href="#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="details__item details__item-colors" data-direction="ttb">
          <div class="details__inner details__inner--grid details__inner--colors">
            <span class="details__color details__color--WhiteRedBlue">White with Red and Blue trim</span>
            <span class="details__color details__color--WhiteGreenBlack">White with Green and Black trim</span>
            <span class="details__color details__color--sky">Sky</span>
          </div>
        </div>
        <div class="details__item details__item-price">
          <div class="details__inner details__inner--price">$45</div>
        </div>
        <div class="details__item details__item--close" data-direction="ttb">
          <div class="details__inner">
            <button class="action action--close">Close</button>
          </div>
        </div>
      </div><!-- /details -->
    </div>
  </main>
</body>
<script>
{
	//The Slide class
	class Slide {
		constructor(el, settings) {
			this.DOM = { el: el };

			this.settings = {
				detailsEl: null,
				onHideDetails: () => {
					return false;
				}
			};
			Object.assign(this.settings, settings);

			this.DOM.wrap = this.DOM.el.querySelector(".slide__wrap");

			this.DOM.img = this.DOM.wrap.querySelector(".slide__img");

			this.DOM.titleWrap = this.DOM.wrap.querySelector(".slide__title-wrap");

			this.DOM.detailsItems = Array.from(
				this.settings.detailsEl.querySelectorAll(".details__item")
			);
			this.totalDetailItems = this.DOM.detailsItems.length;

			this.DOM.hideDetailsCtrl = this.DOM.detailsItems.filter((item) =>
				item.classList.contains("details__item--close")
			)[0];
			this.DOM.hideDetailsCtrl.addEventListener("click", () =>
				this.settings.onHideDetails()
			);

			this.config = {
				animation: {
					duration: 1.2,
					ease: Expo.easeInOut
				}
			};
		}

		setCurrent(isCurrent = true) {
			this.DOM.el.classList[isCurrent ? "add" : "remove"]("slide--current");
		}

		hide(direction) {
			return this.toggle("hide", direction);
		}

		show(direction) {
			this.DOM.el.style.zIndex = 1000;
			return this.toggle("show", direction);
		}

		toggle(action, direction) {
			return new Promise((resolve, reject) => {
				if (action === "show") {
					TweenMax.to(this.DOM.wrap, this.config.animation.duration, {
						ease: this.config.animation.ease,
						startAt: { x: direction === "right" ? "100%" : "-100%" },
						x: "0%"
					});
					TweenMax.to(this.DOM.titleWrap, this.config.animation.duration, {
						ease: this.config.animation.ease,
						startAt: { x: direction === "right" ? "-100%" : "100%" },
						x: "0%"
					});
				}

				TweenMax.to(this.DOM.img, this.config.animation.duration, {
					ease: this.config.animation.ease,
					startAt:
						action === "hide"
							? {}
							: { x: direction === "right" ? "-100%" : "100%", scale: 1.1 },
					x: "0%",
					scale: action === "hide" ? 1.1 : 1,
					onStart: () => {
						this.DOM.img.style.transformOrigin =
							action === "hide"
								? direction === "right"
									? "100% 50%"
									: "0% 50%"
								: direction === "right"
								? "0% 50%"
								: "100% 50%";
						this.DOM.el.style.opacity = 1;
					},
					onComplete: () => {
						this.DOM.el.style.zIndex = 999;
						this.DOM.el.style.opacity = action === "hide" ? 0 : 1;
						resolve();
					}
				});
			});
		}

		// Show the details boxes.
		showDetails() {
			return new Promise((resolve, reject) => {
				if (this.isDetailsOpen) {
					resolve();
					return false;
				}

				const processItem = (item, pos) => {
					return new Promise((resolve, reject) => {
						const duration = pos >= this.totalDetailItems - 3 ? 0.7 : 0.2;
						const ease =
							pos >= this.totalDetailItems - 3 ? "Expo.easeOut" : "Power2.easeInOut";

						const delay = pos * 0.08;
						// The direction to animate the box. We can specify this as a data attribute otherwise we assume a default of rtl ("right to left")
						// right to left (rtl) | left to right (ltr) | bottom to top (btt) | top to bottom (ttb).
						const direction = item.dataset.direction || "rtl";

						let itemAnimOpts = {
							ease: ease,
							delay: delay,
							x: "0%",
							y: "0%"
						};

						let innerAnimOpts = {
							ease: ease,
							delay: delay,
							x: "0%",
							y: "0%",
							onComplete: resolve
						};

						if (direction === "rtl" || direction === "ltr") {
							itemAnimOpts.startAt =
								direction === "rtl" ? { x: "100%", y: "0%" } : { x: "-100%", y: "0%" };
							innerAnimOpts.startAt =
								direction === "rtl" ? { x: "-100%", y: "0%" } : { x: "100%", y: "0%" };
						} else {
							itemAnimOpts.startAt =
								direction === "btt" ? { x: "0%", y: "100%" } : { x: "0%", y: "-100%" };
							innerAnimOpts.startAt =
								direction === "btt" ? { x: "0%", y: "-100%" } : { x: "0%", y: "100%" };
						}

						TweenMax.to(item, duration, itemAnimOpts);
						TweenMax.to(
							item.querySelector(".details__inner"),
							duration,
							innerAnimOpts
						);
					});
				};

				let processing = [];
				this.DOM.detailsItems.forEach((item, pos) =>
					processing.push(processItem(item, pos))
				);
				Promise.all(processing).then(() => {
					this.isDetailsOpen = true;
					resolve();
				});
			});
		}
		hideDetails() {
			return new Promise((resolve, reject) => {
				if (!this.isDetailsOpen) {
					resolve();
					return false;
				}

				const processItem = (item, pos) => {
					return new Promise((resolve, reject) => {
						const duration = pos === 0 ? 0.7 : 0.2;
						const ease = pos === 0 ? "Expo.easeOut" : "Power2.easeInOut";
						const delay = (this.totalDetailItems - pos - 1) * 0.08;
						const direction = item.dataset.direction || "rtl"; // right to left (rtl) | left to right (ltr) | bottom to top (btt) | top to bottom (ttb).

						let itemAnimOpts = {
							ease: ease,
							delay: delay
						};

						let innerAnimOpts = {
							ease: ease,
							delay: delay,
							onComplete: resolve
						};

						if (direction === "rtl" || direction === "ltr") {
							itemAnimOpts.x = direction === "rtl" ? "100%" : "-100%";
							itemAnimOpts.y = "0%";
							innerAnimOpts.x = direction === "rtl" ? "-100%" : "100%";
							innerAnimOpts.y = "0%";
						} else {
							itemAnimOpts.y = direction === "btt" ? "100%" : "-100%";
							itemAnimOpts.x = "0%";
							innerAnimOpts.y = direction === "btt" ? "-100%" : "100%";
							innerAnimOpts.x = "0%";
						}

						TweenMax.to(item, duration, itemAnimOpts);
						TweenMax.to(
							item.querySelector(".details__inner"),
							duration,
							innerAnimOpts
						);
					});
				};

				let processing = [];
				this.DOM.detailsItems.forEach((item, pos) =>
					processing.push(processItem(item, pos))
				);
				Promise.all(processing).then(() => {
					this.isDetailsOpen = false;
					resolve();
				});
			});
		}
	}

	class Navigation {
		constructor(el, settings) {
			this.DOM = { el: el };

			this.settings = {
				next: () => {
					return false;
				},
				prev: () => {
					return false;
				}
			};
			Object.assign(this.settings, settings);

			// Navigation controls (prev and next)
			this.DOM.prevCtrl = this.DOM.el.querySelector(".boxnav__item--prev");
			this.DOM.nextCtrl = this.DOM.el.querySelector(".boxnav__item--next");
			// The current and total pages elements.
			this.DOM.pagination = {
				current: this.DOM.el.querySelector(".boxnav__label--current"),
				total: this.DOM.el.querySelector(".boxnav__label--total")
			};
			this.initEvents();
		}

		setCurrent(val, direction) {
			//this.DOM.pagination.current.innerHTML = val;
			TweenMax.to(this.DOM.pagination.current, 0.4, {
				ease: "Back.easeIn",
				y: direction === "right" ? "-100%" : "100%",
				opacity: 0,
				onComplete: () => {
					this.DOM.pagination.current.innerHTML = val;
					TweenMax.to(this.DOM.pagination.current, 0.8, {
						ease: "Expo.easeOut",
						startAt: { y: direction === "right" ? "50%" : "-50%", opacity: 0 },
						y: "0%",
						opacity: 1
					});
				}
			});
		}

		setTotal(val) {
			this.DOM.pagination.total.innerHTML = val;
		}

		initEvents() {
			this.DOM.prevCtrl.addEventListener("click", () => this.settings.prev());
			this.DOM.nextCtrl.addEventListener("click", () => this.settings.next());
		}
	}

	// The Slideshow class.
	class Slideshow {
		constructor(el) {
			this.DOM = { el: el };

			this.navigation = new Navigation(document.querySelector(".boxnav"), {
				next: () => this.navigate("right"),
				prev: () => this.navigate("left")
			});

			this.DOM.detailsCtrl = document.querySelector(".action--details");

			this.DOM.detailsWrap = document.querySelector(".details-wrap");

			this.DOM.details = Array.from(
				this.DOM.detailsWrap.querySelectorAll(".details")
			);

			this.slides = [];

			Array.from(this.DOM.el.querySelectorAll(".slide")).forEach((slideEl, pos) =>
				this.slides.push(
					new Slide(slideEl, {
						detailsEl: this.DOM.details[pos],

						onHideDetails: () => {
							if (this.isAnimating) return;
							this.isAnimating = true;
							this.closeDetailsBoxes().then(() => (this.isAnimating = false));
						}
					})
				)
			);

			this.slidesTotal = this.slides.length;

			this.navigation.setTotal(this.slidesTotal);
			// At least 2 slides to continue...
			if (this.slidesTotal < 2) {
				return false;
			}

			this.current = 0;

			this.init();
		}
		// Set the current slide and initialize some events.
		init() {
			this.slides[this.current].setCurrent();
			this.initEvents();
		}
		initEvents() {
			// Open the details boxes.
			this.DOM.detailsCtrl.addEventListener("click", () =>
				this.openDetailsBoxes()
			);
		}
		openDetailsBoxes() {
			if (this.isAnimating) return;
			this.isAnimating = true;

			this.DOM.el.classList.add("slideshow--details");

			this.DOM.detailsWrap.classList.add("details-wrap--open");
			this.DOM.details[this.current].classList.add("details--current");
			this.slides[this.current]
				.showDetails()
				.then(() => (this.isAnimating = false));
		}
		closeDetailsBoxes() {
			return new Promise((resolve, reject) => {
				// Overlay.
				this.DOM.el.classList.remove("slideshow--details");
				this.slides[this.current].hideDetails().then(() => {
					this.DOM.details[this.current].classList.remove("details--current");
					this.DOM.detailsWrap.classList.remove("details-wrap--open");
					resolve();
				});
			});
		}
		// Navigate the slideshow.
		navigate(direction) {
			if (this.isAnimating) return;
			this.isAnimating = true;

			// The next/prev slide´s position.
			const nextSlidePos =
				direction === "right"
					? this.current < this.slidesTotal - 1
						? this.current + 1
						: 0
					: this.current > 0
					? this.current - 1
					: this.slidesTotal - 1;

			this.closeDetailsBoxes().then(() => {
				// Update the current page element.
				this.navigation.setCurrent(nextSlidePos + 1, direction);

				Promise.all([
					this.slides[this.current].hide(direction),
					this.slides[nextSlidePos].show(direction)
				]).then(() => {
					// Update current.
					this.slides[this.current].setCurrent(false);
					this.current = nextSlidePos;
					this.slides[this.current].setCurrent();
					this.isAnimating = false;
				});
			});
		}
	}

	// Initialize the slideshow
	const slideshow = new Slideshow(document.querySelector(".slideshow"));
	// Preload all the images..
	imagesLoaded(
		document.querySelectorAll(".slide__img"),
		{ background: true },
		() => document.body.classList.remove("loading")
	);
}

</script>
</html>
