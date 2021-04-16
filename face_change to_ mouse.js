<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"></script>
  <title>Document</title>
</head>
<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
}
</style>
<body>
  <canvas id="canvas"></canvas>
</body>
<script>
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /* Utils ------------------------------------------ */
const textureLoader = new THREE.TextureLoader();

/* Scene Subjects ----------------------------------------- */
class PlaneSubject {



  constructor(scene) {_defineProperty(this, "raycaster", new THREE.Raycaster());_defineProperty(this, "scene", null);
    const geometry = new THREE.PlaneBufferGeometry(5, 7);
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv; 

        void main() {
          vUv = uv;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float; 

        varying vec2 vUv; 

        uniform float dispFactor; 

        uniform sampler2D disp; 
        uniform sampler2D tex1; 
        uniform sampler2D tex2; 

        void main() {
          vec2 uv = vUv;

          vec4 _currentImage;
          vec4 _nextImage;

          float intensity = 0.5;

          vec4 orig1 = texture2D(tex1, uv);
          vec4 orig2 = texture2D(tex2, uv);

          _currentImage = texture2D(tex1, vec2(
            uv.x, 
            uv.y + dispFactor * (orig2 * intensity)
          ));

          _nextImage = texture2D(tex2, vec2(
            uv.x, 
            uv.y + (1.0 - dispFactor) * (orig1 * intensity)
          ));

          vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

          gl_FragColor = finalTexture;
        }
      `,
      uniforms: {
        dispFactor: {
          type: 'f',
          value: 0.0 },

        tex1: {
          type: 't',
          value: textureLoader.load('https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80') },

        tex2: {
          type: 't',
          value: textureLoader.load('https://images.unsplash.com/photo-1562235033-824d84fc4524?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80') } } });



    material.transparent = true;
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    this.scene = scene;
    this.mesh = mesh;
  }

  update(delta, time) {}

  mouseHandler(mouse, camera) {
    const { scene, mesh, raycaster } = this;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    TweenMax.to(mesh.material.uniforms.dispFactor, 0.5, {
      value: intersects.length });


    TweenMax.to(mesh.scale, 0.5, {
      x: 1 - mouse.y * 0.1,
      y: 1 - mouse.y * 0.1 });


    TweenMax.to(mesh.position, 0.5, {
      x: mouse.x });


    TweenMax.to(mesh.rotation, 0.5, {
      x: -mouse.y * (Math.PI / 3) * 0.3,
      y: mouse.x * (Math.PI / 3) * 0.3 });

  }}


/* Scene Manager ------------------------------------------------ */
class SceneManager {


















































  constructor(_canvas) {_defineProperty(this, "clock", new THREE.Clock());_defineProperty(this, "mouse", new THREE.Vector2());_defineProperty(this, "buildScene", () => {const scene = new THREE.Scene();scene.background = new THREE.Color('#111');return scene;});_defineProperty(this, "buildRender", ({ width, height }) => {const { canvas } = this;const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;renderer.setPixelRatio(DPR);renderer.setSize(width, height);renderer.gammaInput = true;renderer.gammaOutput = true;return renderer;});_defineProperty(this, "buildCamera", ({ width, height }) => {const aspectRatio = width / height;const fieldOfView = 60;const nearPlane = 1;const farPlane = 100;const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);camera.position.z = 8;return camera;});_defineProperty(this, "createSceneSubjects", scene => {const sceneSubjects = [new PlaneSubject(scene)];return sceneSubjects;});
    this.canvas = _canvas;
    this.screenDimentions = {
      width: this.canvas.width,
      height: this.canvas.height };


    this.scene = this.buildScene();
    this.renderer = this.buildRender(this.screenDimentions);
    this.camera = this.buildCamera(this.screenDimentions);
    this.sceneSubjects = this.createSceneSubjects(this.scene);
  }

  update() {
    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.sceneSubjects.map(s => s.update ? s.update(delta, elapsed) : null);

    this.renderer.render(this.scene, this.camera);
  }

  resizeHandler() {
    const { width, height } = this.canvas;

    this.screenDimentions = { width, height };

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  mouseHandler(mousePos) {
    Object.assign(this.mouse, mousePos);

    this.sceneSubjects.map((s) =>
    s.mouseHandler ? s.mouseHandler(this.mouse, this.camera) : null);

  }}


/* Init stuff */
const canvas = document.getElementById('canvas');

const sceneManager = new SceneManager(canvas);

const resizeCanvas = () => {
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  sceneManager.resizeHandler();
};

const mouseHandler = e => {
  const x = e.clientX || e.touches[0].clientX;
  const y = e.clientY || e.touches[0].clientY;
  sceneManager.mouseHandler({
    x: x / window.innerWidth * 2 - 1,
    y: -(y / window.innerHeight) * 2 + 1 });

};

const bindEvents = () => {
  window.onresize = resizeCanvas;
  resizeCanvas();

  window.onmousemove = mouseHandler;
  window.ontouchmove = mouseHandler;
  window.ontouchend = mouseHandler;
  window.ontouchstart = mouseHandler;
};

const render = () => {
  window.requestAnimationFrame(render);
  sceneManager.update();
};

bindEvents();
render();
</script>
</html>
