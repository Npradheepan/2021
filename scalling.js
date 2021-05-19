<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
}
.container img {
  object-fit: cover;
  margin: 10px;
  height: 300px;
  width: 300px;
  max-width: 100%;
}

</style>
<body>
    <div class="container"></div>
</body>
<script>
const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const row = 10;

for (let i = 0; i < row; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

//console.log(getRandomSize())

function getRandomSize() {
  return `${getRandomNum()} x ${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}

</script>
</html>
