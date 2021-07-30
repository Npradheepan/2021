<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=UnifrakturMaguntia&display=swap" rel="stylesheet"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans&amp;display=swap">
    <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
    <title>Document</title>
</head>
<style>
* {
  box-sizing: border-box;
}

@font-face {
  font-family: manrope vf;
  src: url(https://cors-anywhere.herokuapp.com/https://jacobleech.com/fonts/variable/ManropeGX.ttf) format("truetype-variations");
  font-style: normal;
  font-variation-settings: "wght" 800;
  font-variation-ligatures: normal;
  font-weight: 200 800;
}
@font-face {
  font-family: Manrope;
  src: url(https://cors-anywhere.herokuapp.com/https://jacobleech.com/fonts/Manrope-Light.woff2) format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: Manrope;
  src: url(https://cors-anywhere.herokuapp.com/https://jacobleech.com/fonts/Manrope-Regular.woff2) format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: Manrope;
  src: url(https://cors-anywhere.herokuapp.com/https://jacobleech.com/fonts/Manrope-Medium.woff2) format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: Manrope;
  src: url(https://cors-anywhere.herokuapp.com/https://jacobleech.com/fonts/Manrope-Bold.woff2) format("woff2");
  font-weight: 700;
}
html {
  font-size: 15px;
}
@media screen and (min-width: 40em) {
  html {
    font-size: 17px;
  }
}

body {
  padding: 0;
  margin: 0;
  background: yellow;
  color: black;
  font-family: manrope vf, Manrope, -apple-system, BlinkMacSystemFont, Roboto, helvetica neue, sans-serif;
  font-variation-settings: "wght" 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body.reverse {
  background: black;
  color: yellow;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50em;
  min-height: 95vh;
  margin: 0 auto 90vh;
}

.detail {
  position: relative;
  padding: 0.5rem;
}
@media screen and (min-width: 40em) {
  .detail {
    padding: 1rem;
  }
}
.detail:before {
  content: "";
  position: absolute;
  width: 4.5em;
  height: 0.35em;
  background: black;
  box-shadow: 1px 1px #bdbd00, 2px 2px #bdbd00, 3px 3px #bdbd00;
  top: 0.5em;
  left: 1.5em;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) 1s, opacity 0.2s linear 1s;
}
@media screen and (min-width: 40em) {
  .detail:before {
    width: 6em;
    height: 0.45em;
    top: 1em;
    left: 1.75em;
    box-shadow: 1px 1px #bdbd00, 2px 2px #bdbd00, 3px 3px #bdbd00, 4px 4px #bdbd00, 5px 5px #bdbd00;
  }
}

.reverse .detail:before {
  background: yellow;
  box-shadow: 1px 1px #4d4d00, 2px 2px #4d4d00, 3px 3px #4d4d00;
}
@media screen and (min-width: 40em) {
  .reverse .detail:before {
    box-shadow: 1px 1px #4d4d00, 2px 2px #4d4d00, 3px 3px #4d4d00, 4px 4px #4d4d00, 5px 5px #4d4d00;
  }
}
.reverse h1 {
  text-shadow: 1px 1px #4d4d00, 2px 2px #4d4d00, 3px 3px #4d4d00;
}
@media screen and (min-width: 40em) {
  .reverse h1 {
    text-shadow: 1px 1px #4d4d00, 2px 2px #4d4d00, 3px 3px #4d4d00, 4px 4px #4d4d00, 5px 5px #4d4d00;
  }
}
.reverse button {
  background: yellow;
  color: black;
}

.text-mask {
  overflow: hidden;
  padding: 0.8rem;
  line-height: 1;
}

h1 {
  font-family: "UnifrakturCook", cursive;
  font-size: 6rem;
  letter-spacing: -0.2rem;
  word-spacing: -0.2rem;
  transform: translateY(105%);
  text-shadow: 1px 1px #bdbd00, 2px 2px #bdbd00, 3px 3px #bdbd00;
  margin: 0;
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: transform 0.45s cubic-bezier(0.47, 0, 0.745, 0.715), opacity 0.4s ease-in;
}
@media screen and (min-width: 40em) {
  h1 {
    font-size: 8rem;
    text-shadow: 1px 1px #bdbd00, 2px 2px #bdbd00, 3px 3px #bdbd00, 4px 4px #bdbd00, 5px 5px #bdbd00;
  }
}

p {
  margin: 0;
  position: relative;
  letter-spacing: 0.05rem;
  word-spacing: -0.1rem;
  font-variation-settings: "wght" 900;
  font-size: 1.1rem;
  line-height: 1.5rem;
  opacity: 0;
}
p.visible {
  opacity: 1;
}
p .word {
  display: inline-block;
  transform: translateY(5rem);
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.47, 0, 0.745, 0.715), opacity 0.3s ease;
}
p .word.line-0 {
  transition-delay: 0.45s;
}
p .word.line:not(.line-0) {
  transition-delay: calc(.45s + (.1s * var(--line-index)));
}

button {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: yellow;
  border-radius: 100%;
  font-size: 1.5rem;
  min-height: 3rem;
  min-width: 3rem;
  cursor: pointer;
  transition: transform 0.35s ease;
  line-height: 0;
  font-family: "Noto Sans", sans-serif;
}
button.trigger {
  transform: rotate(180deg);
}
button.trigger.flip {
  transform: rotate(0);
}
button.theme {
  right: 6.5rem;
}
button.theme.active {
  box-shadow: 0 0 0.5rem 0.2rem rgba(255, 255, 0, 0.33);
  transform: scale(1.1);
}
button.theme.active:hover {
  box-shadow: 0 0 0.6rem 0.3rem rgba(255, 255, 0, 0.5);
}
button.theme.active:active {
  background: black;
  color: red;
  box-shadow: 0 0 0.3rem 0.1rem rgba(255, 0, 0, 0.75);
}
button:hover {
  background: #e6e600;
  color: black;
  box-shadow: 0 0 0.6rem 0.3rem rgba(255, 255, 0, 0.5);
}
button:active {
  background: black;
  color: red;
  box-shadow: 0 0 0.3rem 0.1rem rgba(255, 0, 0, 0.75);
}

.animate .detail:before {
  transform: scaleX(1);
  opacity: 1;
}
.animate h1 {
  opacity: 1;
  transform: translateY(0);
}
.animate p .word {
  transform: translateY(0);
  opacity: 1;
}
</style>
<body>
    <div id="wrap" class="wrap">
        <div class="detail">
          <div class="text-mask">
            <h1>Welcome</h1>
          </div>
          <div class="text-mask">
            <p id="lines" class="line-animate">Lorem ipsum dolor sit amet, mea ad impetus virtute salutandi. Facer labitur priea, invero aperiam duo, meliore fierent euhis. Eum quis case integre cu, visutzril definitionem.</p>
          </div>
        </div>
        <button id="trigger" class="trigger">☝️</button>
        <button id="theme" class="theme">✌️</button>
      </div>
</body>
<script>
const wrap = document.getElementById('wrap');
const trigger = document.getElementById('trigger');
const theme = document.getElementById('theme');
const target = document.querySelector('#lines');
const results = Splitting({ target: target, by: 'lines' });
let lines = results[0].lines;

document.onreadystatechange = function () {
  switch (document.readyState) {
    case 'interactive':
      target.classList.add('visible');
      break;

    case 'complete':
      lines.forEach((line, i) => {
        line.forEach(word => {
          word.classList.add(`line`, `line-${i}`);
        });
      });

      wrap.classList.add('animate');

      trigger.addEventListener('click', function () {
        wrap.classList.toggle('animate');
        this.classList.toggle('flip');
      });

      theme.addEventListener('click', function () {
        document.body.classList.toggle('reverse');
        this.classList.toggle('active');
      });

      const elem = document.querySelector('.detail');
      const duration = wrap.offsetHeight / 2;

      let scrollTarget = 0;
      let scrollCurrent = 0;

      const ease = 0.15;

      const tl = new TimelineLite({ paused: true });
      tl.fromTo(elem, 0.55, { skewY: "-5deg" }, { skewY: "0deg" });

      window.addEventListener('scroll', () => {
        scrollTarget = window.scrollY;
      });

      function normalize(val, max, min) {
        return (val - min) / (max - min);
      }

      function render() {
        scrollCurrent += (scrollTarget - scrollCurrent) * ease;

        const progress = normalize(scrollCurrent, duration, 0);
        tl.progress(progress);

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);

      break;}

};
</script>
</html>
