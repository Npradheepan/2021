<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"></script>
  <title>Document</title>
</head>
<style>
html, body {
  height: 100%;
}

body {
  position: relative;
  overflow: hidden;
  background-color: #111;
  font-family: "helvetica neue", sans-serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2vw 2.5vw;
  pointer-events: none;
  z-index: 1000;
}
.head > div {
  display: flex;
}
.head a {
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  pointer-events: all;
  overflow: hidden;
}
.head a div, .head a:after {
  transition: transform 0.85s cubic-bezier(0.19, 1, 0.22, 1);
}
.head a:after {
  content: attr(data-txt);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  color: pink;
}
.head a:nth-child(2) {
  margin-left: 2vw;
}
.head a:hover div, .head a:hover:after {
  transform: translateY(-100%);
}

.dom-gl {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.slider {
  position: relative;
  padding: 0 22.5vw;
  display: flex;
  align-items: center;
  height: 100%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: -webkit-grab;
  cursor: grab;
  z-index: 2;
}
.slider__inner {
  display: flex;
  position: relative;
}

.slide {
  overflow: hidden;
}
.slide:first-child {
  position: relative;
}
.slide:not(:first-child) {
  position: absolute;
  top: 0;
  height: 100%;
}
.slide__inner {
  position: relative;
  overflow: hidden;
  width: 55vw;
  padding-top: 56.5%;
}
.slide img {
  display: none;
  /*
  height: 100%;
  width: 140%;
  position: absolute;
  top: 0;
  left: -20%;
  object-fit: cover;
  will-change: transform;
  */
}

.titles {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  pointer-events: none;
  z-index: 3;
}
.titles__list {
  position: absolute;
  top: 0;
  left: 0;
}
.titles__title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  font-weight: bold;
  letter-spacing: -0.1vw;
  color: #fff;
}
.titles__title--proxy {
  visibility: hidden;
}

.progress {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.25rem;
  overflow: hidden;
  pointer-events: none;
}
.progress__line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left;
  background-color: #fff;
}
.progress__line:nth-child(2) {
  transform-origin: right;
}
</style>
<body>
  <header class="head">
    <a href="https://codepen.io/ReGGae/live/povjKxV" target="_blank" data-txt="fullscreen is best">
      <div>fullscreen is best</div>
    </a>
    <div>
      <a href="https://twitter.com/Jesper_Landberg" target="_blank" data-txt="about">
        <div>about</div>
      </a>
      <a href="https://twitter.com/Jesper_Landberg" target="_blank" data-txt="contact">
        <div>contact</div>
      </a>
    </div>
  </header>
  
  <div class="slider | js-drag-area">
    <div class="slider__inner | js-slider">
      <div class="slide | js-slide">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 120%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 240%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 360%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 480%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 600%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 720%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
      <div class="slide | js-slide" style="left: 840%;">
        <div class="slide__inner | js-slide__inner">
          <img class="js-slide__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" crossorigin="anonymous" draggable="false">
        </div>
      </div>
    </div>
  </div>
  
  <div class="titles">
    <div class="titles__title titles__title--proxy">Lorem ipsum</div>
    <div class="titles__list | js-titles">
      <div class="titles__title | js-title">Moonrocket</div>
      <div class="titles__title | js-title">Spaceman</div>
      <div class="titles__title | js-title">Moonrocket</div>
      <div class="titles__title | js-title">Spaceman</div>
      <div class="titles__title | js-title">Moonrocket</div>
      <div class="titles__title | js-title">Spaceman</div>
      <div class="titles__title | js-title">Moonrocket</div>
      <div class="titles__title | js-title">Spaceman</div>
      <div class="titles__title | js-title">Moonrocket</div>
    </div>
  </div>
  
  <div class="progress">
    <div class="progress__line | js-progress-line"></div>
    <div class="progress__line | js-progress-line-2"></div>
  </div>
</body>
<script>
  const store = {
  ww: window.innerWidth,
  wh: window.innerHeight,
  isDevice: navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i) };


class Slider {

  constructor(el, opts = {}) {
    this.bindAll();

    this.el = el;

    this.opts = Object.assign({
      speed: 2,
      threshold: 50,
      ease: 0.075 },
    opts);

    this.ui = {
      items: this.el.querySelectorAll('.js-slide'),
      titles: document.querySelectorAll('.js-title'),
      lines: document.querySelectorAll('.js-progress-line') };


    this.state = {
      target: 0,
      current: 0,
      currentRounded: 0,
      y: 0,
      on: {
        x: 0,
        y: 0 },

      off: 0,
      progress: 0,
      diff: 0,
      max: 0,
      min: 0,
      snap: {
        points: [] },

      flags: {
        dragging: false } };



    this.items = [];

    this.events = {
      move: store.isDevice ? 'touchmove' : 'mousemove',
      up: store.isDevice ? 'touchend' : 'mouseup',
      down: store.isDevice ? 'touchstart' : 'mousedown' };


    this.init();
  }

  bindAll() {
    ['onDown', 'onMove', 'onUp'].
    forEach(fn => this[fn] = this[fn].bind(this));
  }

  init() {
    return gsap.utils.pipe(
    this.setup(),
    this.on());

  }

  destroy() {
    this.off();
    this.state = null;
    this.items = null;
    this.opts = null;
    this.ui = null;
  }

  on() {
    const { move, up, down } = this.events;

    window.addEventListener(down, this.onDown);
    window.addEventListener(move, this.onMove);
    window.addEventListener(up, this.onUp);
  }

  off() {
    const { move, up, down } = this.events;

    window.removeEventListener(down, this.onDown);
    window.removeEventListener(move, this.onMove);
    window.removeEventListener(up, this.onUp);
  }

  setup() {
    const { ww } = store;
    const state = this.state;
    const { items, titles } = this.ui;

    const {
      width: wrapWidth,
      left: wrapDiff } =
    this.el.getBoundingClientRect();

    // Set bounding
    state.max = -(items[items.length - 1].getBoundingClientRect().right - wrapWidth - wrapDiff);
    state.min = 0;

    // Global timeline
    this.tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
        ease: 'linear' } }).


    fromTo('.js-progress-line-2', {
      scaleX: 1 },
    {
      scaleX: 0,
      duration: 0.5,
      ease: 'power3' },
    0).
    fromTo('.js-titles', {
      yPercent: 0 },
    {
      yPercent: -(100 - 100 / titles.length) },
    0).
    fromTo('.js-progress-line', {
      scaleX: 0 },
    {
      scaleX: 1 },
    0);

    // Cache stuff
    for (let i = 0; i < items.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      const el = items[i];
      const { left, right, width } = el.getBoundingClientRect();

      // Create webgl plane
      const plane = new Plane();
      plane.init(el);

      // Timeline that plays when visible
      const tl = gsap.timeline({ paused: true }).
      fromTo(plane.mat.uniforms.uScale, {
        value: 0.65 },
      {
        value: 1,
        duration: 1,
        ease: 'linear' });


      // Push to cache
      this.items.push({
        el, plane,
        left, right, width,
        min: left < ww ? ww * 0.775 : -(ww * 0.225 - wrapWidth * 0.2),
        max: left > ww ? state.max - ww * 0.775 : state.max + (ww * 0.225 - wrapWidth * 0.2),
        tl,
        out: false });

    }window.CP.exitedLoop(0);
  }

  calc() {
    const state = this.state;
    state.current += (state.target - state.current) * this.opts.ease;
    state.currentRounded = Math.round(state.current * 100) / 100;
    state.diff = (state.target - state.current) * 0.0005;
    state.progress = gsap.utils.wrap(0, 1, state.currentRounded / state.max);

    this.tl && this.tl.progress(state.progress);
  }

  render() {
    this.calc();
    this.transformItems();
  }

  transformItems() {
    const { flags } = this.state;

    for (let i = 0; i < this.items.length; i++) {if (window.CP.shouldStopExecution(1)) break;
      const item = this.items[i];
      const { translate, isVisible, progress } = this.isVisible(item);

      item.plane.updateX(translate);
      item.plane.mat.uniforms.uVelo.value = this.state.diff;

      if (!item.out && item.tl) {
        item.tl.progress(progress);
      }

      if (isVisible || flags.resize) {
        item.out = false;
      } else if (!item.out) {
        item.out = true;
      }
    }window.CP.exitedLoop(1);
  }

  isVisible({ left, right, width, min, max }) {
    const { ww } = store;
    const { currentRounded } = this.state;
    const translate = gsap.utils.wrap(min, max, currentRounded);
    const threshold = this.opts.threshold;
    const start = left + translate;
    const end = right + translate;
    const isVisible = start < threshold + ww && end > -threshold;
    const progress = gsap.utils.clamp(0, 1, 1 - (translate + left + width) / (ww + width));

    return {
      translate,
      isVisible,
      progress };

  }

  clampTarget() {
    const state = this.state;

    state.target = gsap.utils.clamp(state.max, 0, state.target);
  }

  getPos({ changedTouches, clientX, clientY, target }) {
    const x = changedTouches ? changedTouches[0].clientX : clientX;
    const y = changedTouches ? changedTouches[0].clientY : clientY;

    return {
      x, y, target };

  }

  onDown(e) {
    const { x, y } = this.getPos(e);
    const { flags, on } = this.state;

    flags.dragging = true;
    on.x = x;
    on.y = y;
  }

  onUp() {
    const state = this.state;

    state.flags.dragging = false;
    state.off = state.target;
  }

  onMove(e) {
    const { x, y } = this.getPos(e);
    const state = this.state;

    if (!state.flags.dragging) return;

    const { off, on } = state;
    const moveX = x - on.x;
    const moveY = y - on.y;

    if (Math.abs(moveX) > Math.abs(moveY) && e.cancelable) {
      e.preventDefault();
      e.stopPropagation();
    }

    state.target = off + moveX * this.opts.speed;
  }}


/***/
/*** GL STUFF ****/
/***/

const backgroundCoverUv = `
vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
  float screenRatio = screenSize.x / screenSize.y;
  float imageRatio = imageSize.x / imageSize.y;

  vec2 newSize = screenRatio < imageRatio 
      ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
      : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);

  vec2 newOffset = (screenRatio < imageRatio 
      ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
      : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;

  return uv * screenSize / newSize + newOffset;
}
`;

const vertexShader = `
precision mediump float;

uniform float uVelo;

varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

void main(){
  vec3 pos = position;
  pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.125);

  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}
`;

const fragmentShader = `
precision mediump float;

${backgroundCoverUv}

uniform sampler2D uTexture;

uniform vec2 uMeshSize;
uniform vec2 uImageSize;

uniform float uVelo;
uniform float uScale;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 texCenter = vec2(0.5);
  vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
  vec2 texScale = (texUv - texCenter) * uScale + texCenter;
  vec4 texture = texture2D(uTexture, texScale);

  texScale.x += 0.15 * uVelo;
  if(uv.x < 1.) texture.g = texture2D(uTexture, texScale).g;

  texScale.x += 0.10 * uVelo;
  if(uv.x < 1.) texture.b = texture2D(uTexture, texScale).b;

  gl_FragColor = texture;
}
`;

const loader = new THREE.TextureLoader();
loader.crossOrigin = 'anonymous';

class Gl {

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(
    store.ww / -2,
    store.ww / 2,
    store.wh / 2,
    store.wh / -2,
    1,
    10);

    this.camera.lookAt(this.scene.position);
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true });

    this.renderer.setPixelRatio(1.5);
    this.renderer.setSize(store.ww, store.wh);
    this.renderer.setClearColor(0xffffff, 0);

    this.init();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  init() {
    const domEl = this.renderer.domElement;
    domEl.classList.add('dom-gl');
    document.body.appendChild(domEl);
  }}


class GlObject extends THREE.Object3D {

  init(el) {
    this.el = el;

    this.resize();
  }

  resize() {
    this.rect = this.el.getBoundingClientRect();
    const { left, top, width, height } = this.rect;

    this.pos = {
      x: left + width / 2 - store.ww / 2,
      y: top + height / 2 - store.wh / 2 };


    this.position.y = this.pos.y;
    this.position.x = this.pos.x;

    this.updateX();
  }

  updateX(current) {
    current && (this.position.x = current + this.pos.x);
  }}


const planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
const planeMat = new THREE.ShaderMaterial({
  transparent: true,
  fragmentShader,
  vertexShader });


class Plane extends GlObject {

  init(el) {
    super.init(el);

    this.geo = planeGeo;
    this.mat = planeMat.clone();

    this.mat.uniforms = {
      uTime: { value: 0 },
      uTexture: { value: 0 },
      uMeshSize: { value: new THREE.Vector2(this.rect.width, this.rect.height) },
      uImageSize: { value: new THREE.Vector2(0, 0) },
      uScale: { value: 0.75 },
      uVelo: { value: 0 } };


    this.img = this.el.querySelector('img');
    this.texture = loader.load(this.img.src, texture => {
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      this.mat.uniforms.uTexture.value = texture;
      this.mat.uniforms.uImageSize.value = [this.img.naturalWidth, this.img.naturalHeight];
    });

    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.scale.set(this.rect.width, this.rect.height, 1);
    this.add(this.mesh);
    gl.scene.add(this);
  }}


/***/
/*** INIT STUFF ****/
/***/

const gl = new Gl();
const slider = new Slider(document.querySelector('.js-slider'));

const tick = () => {
  gl.render();
  slider.render();
};

gsap.ticker.add(tick);
</script>
</html>
