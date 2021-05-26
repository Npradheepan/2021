<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=s, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400" rel="stylesheet">
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-KwxQKNj2D0XKEW5O/Y6haRH39PE/xry8SAoLbpbCMraqlX7kUP6KHOnrlrtvuJLR" crossorigin="anonymous">

    <title>Document</title>
</head>
<style>
    html {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ece9e6;
  background: linear-gradient(to bottom, #ece9e6, #fff);
}
html body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Quicksand', sans-serif;
  overflow-x: hidden;
  position: relative;
  top: -2.5rem;
}
html body .heading {
  text-align: center;
  color: #2e5266;
  margin-bottom: 3rem;
}
html body .heading h1 {
  margin-bottom: 0;
}
html body .heading h6 {
  margin: 0;
}
html body .heading p {
  margin: 0;
}
html body .heading a {
  color: #2e5266;
  display: inline-block;
}
html body .heading a .fab {
  margin-right: 0.5rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.container .ui-card {
  height: 20rem;
  width: 12rem;
  position: relative;
  z-index: 1;
  transform: scale(0.6) translateY(-2rem);
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  background: #2e5266;
  background: linear-gradient(to top, #2e5266, #6e8898);
  transition: 1s;
}
.container .ui-card:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 100%;
  background-color: rgba(0,0,0,0.3);
  bottom: -5rem;
  filter: blur(4px);
}
.container .ui-card:nth-child(0):before {
  content: '0';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(1):before {
  content: '1';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(2):before {
  content: '2';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(3):before {
  content: '3';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(4):before {
  content: '4';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(5):before {
  content: '5';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(6):before {
  content: '6';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(7):before {
  content: '7';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(8):before {
  content: '8';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card:nth-child(9):before {
  content: '9';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
.container .ui-card.active {
  z-index: 3;
  transform: scale(1) translateY(0) translateX(0);
  opacity: 1;
  pointer-events: auto;
  transition: 1s;
}
.container .ui-card.prev,
.container .ui-card.next {
  z-index: 2;
  transform: scale(0.8) translateY(-1rem) translateX(0);
  opacity: 0.6;
  pointer-events: auto;
  transition: 1s;
}

</style>
<body>
    
<div class="heading">
    <h1>Custom Carousel</h1>
    <h6>( click slides or press left & right arrow keys )</h6>
    <div class="me"></div><a href="https://github.com/cmdeveloped" target="_blank"><i class="fab fa-github"></i></a><a href="https://twitter.com/collinscode_" target="_blank"><i class="fab fa-twitter"></i></a><a href="https://codepen.io/collinscode" target="_blank"><i class="fab fa-codepen"></i></a><a href="https://linkedin.com/in/cmdeveloped" target="_blank"><i class="fab fa-linkedin"></i></a>
  </div>
  <div class="container">
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
    <div class="ui-card"></div>
  </div>
</body>
<script>
    $num = $(".ui-card").length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $(".ui-card:nth-child(" + $even + ")").addClass("active");
  $(".ui-card:nth-child(" + $even + ")")
    .prev()
    .addClass("prev");
  $(".ui-card:nth-child(" + $even + ")")
    .next()
    .addClass("next");
} else {
  $(".ui-card:nth-child(" + $odd + ")").addClass("active");
  $(".ui-card:nth-child(" + $odd + ")")
    .prev()
    .addClass("prev");
  $(".ui-card:nth-child(" + $odd + ")")
    .next()
    .addClass("next");
}

$(".ui-card").click(function () {
  $slide = $(".active").width();
  console.log($(".active").position().left);

  if ($(this).hasClass("next")) {
    $(".container")
      .stop(false, true)
      .animate({ left: "-=" + $slide });
  } else if ($(this).hasClass("prev")) {
    $(".container")
      .stop(false, true)
      .animate({ left: "+=" + $slide });
  }

  $(this).removeClass("prev next");
  $(this).siblings().removeClass("prev active next");

  $(this).addClass("active");
  $(this).prev().addClass("prev");
  $(this).next().addClass("next");
});

// Keyboard nav
$("html body").keydown(function (e) {
  if (e.keyCode == 37) {
    // left
    $(".active").prev().trigger("click");
  } else if (e.keyCode == 39) {
    // right
    $(".active").next().trigger("click");
  }
});

</script>
</html>
