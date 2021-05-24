<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min.js"></script>
  <title>Document</title>
</head>
<style>
  body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content-canvas {
  width: 66%;
}

canvas {
  max-width: 100%;
  max-height: 600px;
  display: block;
}

</style>
<body>
  <div class="content-canvas"></div>

<script id="vertex-shader" type="x-shader/x-vertex">
  varying vec2 vUv;
  
  void main(){  
    vUv = uv; 
    //modelViewMatrix: es la posición y orientación de la cámara dentro de la escena
    //projectionMatrix: la proyección para la escena de la cámara incluyendo el campo de visión
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }
</script>

<script id="fragment-shader" type="x-shader/x-fragment">
  uniform float time;
  uniform vec2 resolution;
  uniform sampler2D texture1;
  
  varying vec2 vUv;
  
  void main() {  
    vec2 uv1 = vUv;
    // variable que contiene el eje de coordenadas
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    
    float frequency = 15.;
    float amplitude = 0.015;
    
    float x = uv1.y * frequency + time * .7; 
    float y = uv1.x * frequency + time * .3;
    
    uv1.x += cos(x+y) * amplitude * cos(y);
    uv1.y += sin(x-y) * amplitude * cos(y);

    vec4 rgba = texture2D(texture1, uv1);
    gl_FragColor = rgba;
  }
</script>
</body>
<script>
const init = () => {
  const content = document.querySelector(".content-canvas");
  const s = {
    w: innerWidth,
    h: innerHeight
  };

  const gl = {
    renderer: new THREE.WebGLRenderer({ antialias: true }),
    camera: new THREE.PerspectiveCamera(75, s.w / s.h, 0.1, 100),
    scene: new THREE.Scene(),
    loader: new THREE.TextureLoader()
  };

  let time = 0;

  const addScene = () => {
    gl.camera.position.set(0, 0, 1);
    gl.scene.add(gl.camera);

    gl.renderer.setSize(s.w, s.h);
    gl.renderer.setPixelRatio(devicePixelRatio);
    content.appendChild(gl.renderer.domElement);

    mesh();
  };

  const uniforms = {
    time: { type: "f", value: 0 },
    resolution: {
      type: "v2",
      value: new THREE.Vector2(innerWidth, innerHeight)
    },
    mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
    waveLength: { type: "f", value: 1.5 },
    texture1: {
      value: gl.loader.load("https://source.unsplash.com/900x900/?water")
    }
  };

  const getGeom = () => new THREE.PlaneGeometry(1, 1, 64, 64);

  const getMaterial = () => {
    return new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: uniforms,
      vertexShader: document.querySelector("#vertex-shader").textContent,
      fragmentShader: document.querySelector("#fragment-shader").textContent
    });
  };

  const mesh = () => {
    gl.geometry = getGeom();
    gl.material = getMaterial();

    gl.mesh = new THREE.Mesh(gl.geometry, gl.material);

    gl.scene.add(gl.mesh);
  };

  const update = () => {
    time += 0.05;
    gl.material.uniforms.time.value = time;

    render();
    requestAnimationFrame(update);
  };

  const render = () => gl.renderer.render(gl.scene, gl.camera);

  const resize = () => {
    const w = innerWidth;
    const h = innerHeight;

    gl.camera.aspect = w / h;
    gl.renderer.setSize(w, h);

    const dist = gl.camera.position.z - gl.mesh.position.z;
    const height = 1;

    gl.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

    if (w / h > 1) gl.mesh.scale.x = gl.mesh.scale.y = (1.05 * w) / h;

    gl.camera.updateProjectionMatrix();
  };

  addScene();
  update();
  resize();
  window.addEventListener("resize", resize);
};

init();
  
</script>
</html>
