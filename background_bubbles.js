<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.3.6/pixi.min.js"></script>
  <title>Document</title>
</head>
<style>
  body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: rgb(5, 3, 134);
}
</style>
<body>
  
</body>
<script>
var container = document.body.insertBefore(document.createElement('div'), document.body.firstChild)
container.setAttribute('class', 'particle-container')
container.style.position = 'fixed'
container.style.width = '100%'
container.style.height = '100%'
container.style.background = 'linear-gradient(0deg, rgb(5, 3, 134), rgb(5, 3, 134))'
container.style.zIndex = '-1'

var app = new PIXI.Application({
  autoResize: true,
  transparent: true
})
container.appendChild(app.view)

var totalSprites = 1000

for (var i = 0; i < totalSprites; i++) {
  add()
}

function add () {
  var graphics = new PIXI.Graphics();
  graphics.lineStyle(0)
  graphics.beginFill(0xffffff, Math.random() * 0.1 + 0.1)
  graphics.drawCircle(Math.random() * window.innerWidth, Math.random() * window.innerHeight * 2, Math.random() * 20 + 6)
  graphics.endFill()
  // graphics.filters = [new PIXI.filters.BlurFilter(Math.random() * 10 + 1)]
  app.stage.addChild(graphics)

  anime(graphics)
}

function anime (graphics) {
  var duration = Math.random() * 1 + 3
  gsap.set(graphics, {
    alpha: 0
  })
  gsap.to(graphics, {
    alpha: 1,
    duration: duration / 2
  })
  gsap.to(graphics, {
    alpha: 0,
    duration: duration / 2,
    delay: duration / 2
  })
  gsap.to(graphics, {
    x: '+=' + (Math.random() * 100 - 10),
    y: '+=' + (Math.random() * 100 - 10),
    rotation: Math.random() - 0.5,
    duration: duration,
    onComplete: function () {
      app.stage.removeChild(graphics)
      add()
    }
  })
}

window.addEventListener('resize', resize)
resize()
function resize () {
  app.renderer.resize(window.innerWidth, window.innerHeight)
}
</script>
</html>
