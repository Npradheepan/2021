<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <title>Document</title>
</head>
<style>
    html, body {
  background: #000;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
<body>
    <canvas></canvas>
</body>
<script>
    var $canvas = $("canvas"),
  canvas = $canvas.get(0),
  ctx = canvas.getContext("2d"),
  from = {
    r: 53,
    g: 120,
    b: 250,
    a: 1
  },
  to = {
    r: 250,
    g: 120,
    b: 50,
    a: 1
  },
  color = {
    r: 244,
    g: 123,
    b: 112,
    a: 1
  };

$(window)
  .on("resize", function () {
    $canvas.attr("width", $(window).width());
    $canvas.attr("height", $(window).height());
  })
  .trigger("resize");

var mouseX = 0,
  mouseY = 0;

$(window).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

var particles = [];

function rgba(c) {
  return (
    "rgba(" +
    Math.round(c.r) +
    "," +
    Math.round(c.g) +
    "," +
    Math.round(c.b) +
    "," +
    c.a +
    ")"
  );
}

function interpolate(a, b, p) {
  return a + (b - a) * p;
}

function interpolatec(c, a, b, p) {
  c.r = interpolate(a.r, b.r, p);
  c.g = interpolate(a.g, b.g, p);
  c.b = interpolate(a.b, b.b, p);
  c.a = interpolate(a.a, b.a, p);
}

function loop(now) {
  if (particles.length < 128) {
    particles.push({
      x: mouseX || 0,
      y: mouseY || 0,
      r: Math.random() * 0.1,
      fx: Math.random() > 0.5 ? Math.cos : Math.sin,
      fy: Math.random() > 0.5 ? Math.sin : Math.cos,
      rx: Math.random(),
      ry: Math.random(),
      old: []
    });
  }

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = particles.length - 1; i >= 0; i--) {
    var particle = particles[i];

    particle.x += (mouseX - particle.x) * 0.1;
    particle.y += (mouseY - particle.y) * 0.1;

    particle.x += particle.fx(now * 0.1 * particle.r) * 15 * particle.rx;
    particle.y += particle.fy(now * 0.1 * particle.r) * 15 * particle.ry;

    if (particle.old.length > 10) {
      particle.old.pop();
    }

    particle.old.unshift({
      x: particle.x,
      y: particle.y
    });

    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    var p = (Math.sin(now * 0.0005) + 1) * 0.5;
    if (particle.old.length > 2) {
      for (var j = 1; j < particle.old.length; j++) {
        ctx.beginPath();

        interpolatec(color, from, to, p);

        ctx.strokeStyle = rgba(color);

        var a = particle.old[j - 1];
        var b = particle.old[j];

        if (j == 1) {
          ctx.moveTo(a.x, a.y);
        }

        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  requestAnimationFrame(loop);
}

loop();

</script>
</html>
