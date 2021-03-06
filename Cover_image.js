<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
  <title>Document</title>
</head>
<style>
body {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

svg {
	max-width: 70vw;
	max-height: 90vh;
}

</style>
<body>
  <svg class="Hero__image-grid anim-hero" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590.91 632.66">
    <defs>
      <clipPath id="heroclip1">
        <rect class="hero__swipe-1" id="heroclip1Rect" x="101.31" y="51.24" width="488.79" height="221.87" fill="#fff" data-svg-origin="590.1000061035156 162.17499923706055" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      </clipPath>
  
      <clipPath id="heroclip2">
        <rect class="hero__swipe-2" id="heroclip1Rect" x="195.36" y="293.94" width="292.4" height="268.6" fill="#fff" data-svg-origin="487.75999450683594 428.24000549316406" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      </clipPath>
  
      <clipPath id="heroclip3">
        <rect class="hero__swipe-3" id="heroclip3Rect" x="1.73" y="233.41" width="174.53" height="162.61" fill="#fff" data-svg-origin="176.25999879837036 314.71500396728516" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      </clipPath>
  
      <clipPath id="heroclip4">
        <rect class="hero__swipe-4" id="heroclip4Rect" x="100.03" y="405.79" width="75.83" height="73.12" fill="#fff" data-svg-origin="175.86000061035156 442.3500099182129" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      </clipPath>
  
    </defs>
    <g class="fouc fouc--hero" opacity="0" data-svg-origin="591 314.5249938964844" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;">
      <circle class="hero__circle" cx="90.18" cy="79.56" r="50" fill="#dae1e2" data-svg-origin="90.18000030517578 79.55999755859375" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></circle>
      <circle class="hero__circle" cx="488.39" cy="563.49" r="30" fill="#23d8a0" data-svg-origin="488.3900146484375 563.489990234375" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></circle>
  
      <rect class="hero__swipe-1" x="102" y="52" width="488" height="220" fill="#23d8a0" data-svg-origin="590 162" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      <rect class="hero__swipe-2" x="196" y="294" width="292" height="268" fill="#FAFAFA" data-svg-origin="488 428" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      <rect class="hero__swipe-3" x="2" y="234" width="173" height="162" fill="#FAFAFA" data-svg-origin="175 315" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
      <rect class="hero__swipe-4" x="101" y="406" width="75" height="73" fill="#23d8a0" data-svg-origin="176 442.5" transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px;"></rect>
  
      <image clip-path="url(#heroclip1)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero1.jpg?mtime=20210107055409&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="101" y="51" width="490" height="223"></image>
      <image clip-path="url(#heroclip2)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero2.jpg?mtime=20210107055410&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="195" y="293" width="294" height="270"></image>
      <image clip-path="url(#heroclip3)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero3.jpg?mtime=20210107055411&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="1" y="233" width="176" height="164"></image>
      <image clip-path="url(#heroclip4)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero4.jpg?mtime=20210107055413&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="99" y="404" width="78" height="76"></image>
    </g>
  </svg>
</body>
<script>
  var HeroGrid = document.querySelector(".anim-hero");

var animationIsOk = window.matchMedia("(prefers-reduced-motion: no-preference)")
	.matches;

if (animationIsOk) {
	var tl = gsap.timeline({
		delay: 1.7,
		defaults: {
			transformOrigin: "right center",
			ease: "expo.out",
			duration: 1.2,
			stagger: {
				each: 0.5,
				from: "end"
			}
		}
	});
	tl
		.set(".fouc--hero", {
			opacity: 1
		})
		.from(".hero__swipe-1", {
			scaleX: 0
		})
		.from(
			".hero__swipe-2",
			{
				scaleX: 0
			},
			"<"
		)
		.from(
			".hero__swipe-3",
			{
				scaleX: 0
			},
			"<"
		)
		.from(
			".hero__swipe-4",
			{
				scaleX: 0
			},
			"<"
		)
		.from(
			".hero__circle",
			{
				duration: 0.7,
				transformOrigin: "center",
				opacity: 0,
				scale: 0.7,
				ease: "sine.out"
			},
			"<"
		);
}

</script>
</html>
