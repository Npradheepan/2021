<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
  <title>Document</title>
</head>
<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap");
* {
  box-sizing: border-box;
}

body {
  background: black;
  font-family: "IBM Plex Sans", sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
}

.container__headline {
  font-size: 5vmin;
}

.hero__inner {
  display: flex;
  position: relative;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}
.hero__inner::before {
  content: "";
  display: block;
  padding-bottom: calc(100% / (16 / 9));
}

.hero__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160%;
  -o-object-fit: cover;
     object-fit: cover;
}

.hero__content {
  display: none;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.hero__headline {
  --padding: 1.5vmin;
  --duration: 400ms;
  --delay: calc(var(--duration) / 2);
  --ease: cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  display: inline-block;
  font-size: 10vmin;
  overflow: hidden;
  margin-top: calc(var(--padding) * -1);
  padding: var(--padding);
}
.hero__headline::after {
  content: "";
  position: absolute;
  top: calc(100% - var(--padding));
  left: 0;
  background-color: white;
  width: 100%;
  height: 1.5vmin;
  transform: scaleX(0);
  transition: transform var(--duration) var(--delay) var(--ease);
}
.hero__headline span {
  display: block;
  transform: translateY(110%);
  transition: transform var(--duration) var(--ease);
}
.active .hero__headline::after {
  transform: scaleX(1);
  transition-delay: 0s;
}
.active .hero__headline span {
  transform: translateY(0);
  transition-delay: var(--delay);
}
</style>
<body>
  
<header class="container">
  <h2 class="container__headline">Wanna see something neat?</h2>
</header>
<section class="container hero">
  <div class="hero__inner">
    <div class="hero__images"><img class="hero__image" src="https://images.unsplash.com/photo-1508781197106-d8c535dcf276?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/></div>
    <div class="hero__content">
      <div class="hero__headline"><span>How Neat is That?</span></div>
    </div>
  </div>
</section>
<footer class="container">
  <h2 class="container__headline">That's pretty neat.</h2>
</footer>
</body>
<script>
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2"
  }
});

gsap.to(".hero__image", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2"
  },
  y: "-30%"
});

</script>
</html>
