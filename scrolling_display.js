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
html,
body {
  background: black;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 8rem;
  visibility: hidden;
}

</style>
<body>
  <div class="container">
    Some Text
  </div>
  <div class="container">
    Some Text
  </div>
  <div class="container">
    Some Text
  </div>
  <div class="container">
    Some Text
  </div>
</body>
<script>
const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true
    }
  });

  tl.to(container, {
    autoAlpha: 1
  }).to(
    container,
    {
      autoAlpha: 0
    },
    0.5
  );
});

</script>
</html>
