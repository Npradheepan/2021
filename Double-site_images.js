<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
*, *::before, *::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

body {
  font-family: "Dancing Script", cursive;
  background-color: #eee;
  height: 10000px;
}

ul {
  position: fixed;
  top: calc(50% - 260px);
  left: calc(50% - 260px);
  width: 520px;
  height: 520px;
  background-color: #333;
  perspective: 1000px;
  box-shadow: 0 0 20px #000 inset;
}
ul::before {
  content: "Scroll...";
  position: absolute;
  top: -1.5em;
  font-size: 24px;
}

li {
  --ang: -180deg;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #fff7;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 48px 32px;
  font-size: 24px;
  transform: rotateY(var(--ang));
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
li > img {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 500px;
  height: 500px;
  z-index: -2;
  border: 1px solid #fff;
}
li::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5em;
  background-color: #fff7;
  z-index: -1;
}
</style>
<body>
  <ul>
  <li> <img src="https://source.unsplash.com/ezSFnAFi9hY/500x500" alt="cut citrus fruits. " />Lorem Ipsum</li>
  <li> <img src="https://source.unsplash.com/TIGDsyy0TK4/500x500" alt="sliced mango. " />Dolor Sit</li>
  <li> <img src="https://source.unsplash.com/TdDtTu2rv4s/500x500" alt="a bunch of blueberries. " />Amet Consectetur</li>
  <li> <img src="https://source.unsplash.com/eudGUrDdBB0/500x500" alt="a pineapple sitting on a table. " />Adipiscing Elit</li>
  <li> <img src="https://source.unsplash.com/eJH4f1rlG7g/500x500" alt="frozen raspberries. " /> Nunc Tortor</li>
  <li> <img src="https://source.unsplash.com/24RUrLSW1HI/500x500" alt="a sliced strawberry. " />Metus Mollis</li>
  <li> <img src="https://source.unsplash.com/h5yMpgOI5nI/500x500" alt="an arrangement of assorted sliced fruits. " />Congue Sagittis</li>
  <li> <img src="https://source.unsplash.com/2TYrR2IB72s/500x500" alt="sliced watermelons. " />Vestibulum Et</li>
  <li> <img src="https://source.unsplash.com/1cWZgnBhZRs/500x500" alt="grapefruits, lemons, and pomegranates. " />Donec Eget</li>
  <li> <img src="https://source.unsplash.com/9aOswReDKPo/500x500" alt="half of an avocado. " />Maecenas et Justo</li>
  <li> <img src="https://source.unsplash.com/Nl7eLS8E2Ss/500x500" alt="half of a lime. " />Malesuada Quam</li>
  <li> <img src="https://source.unsplash.com/3HhXWJzG5Ko/500x500" alt="a single cherry with stem. " />Ultricies Sollicitudin</li>
  <li> <img src="https://source.unsplash.com/fczCr7MdE7U/500x500" alt="a bunch of bananas. " />Gravida Nibh</li>
  <li> <img src="https://source.unsplash.com/uI900SItAyY/500x500" alt="three pears. " />Pellentesque Sapien</li>
  <li> <img src="https://source.unsplash.com/0AynZdszfz0/500x500" alt="a basket full of peaches next to a plate with sliced peaches. " />Suspendisse Vel</li>
  <li> <img src="https://source.unsplash.com/C6JhUKs9q8M/500x500" alt="a bowl of avocados. " />Mauris Consectetur</li>
</ul>
</body>
<script>
  const body = document.querySelector("body");
const lis = document.querySelectorAll("li");

window.addEventListener(
  "scroll",
  () => {
    onscrl();
  },
  false
);

onscrl(false);
function onscrl() {
  const s = (body.scrollHeight - window.innerHeight) / 15;

  lis.forEach((li, ix) => {
    const ang = ((this.scrollY - s * (ix - 1)) * 360) / (s * 2) - 180;

    li.style.setProperty("--ang", Math.max(-180, Math.min(180, ang)) + "deg");
  });
}

</script>
</html>
