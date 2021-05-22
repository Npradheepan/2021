<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <title>Document</title>
</head>
<style>
  body {
    background: #16191c;
    margin: 0 30px;
    font-family: Arial, Sans-serif;
    text-align: center;
    cursor: pointer;
  }

  h1 {
    color: white;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    opacity: 0.6;
    margin: 30px 0 0;
  }

  .leafs {
    perspective: 1000px;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    max-width: 1600px;
  }

  .leaf_img {
    opacity: 0;
    transform: translate3d(0, 40px, 80px) rotateX(25deg);
    transition-duration: 0.4s;
    transition-timing-function: ease-in;
    transform-style: preserve-3d;
  }

  .leaf_img.hover {
    will-change: transform opacity;
    transform: translate3d(0, 0px, 0px) rotateX(0deg);
    transition-timing-function: ease-out;
    opacity: 1;
  }

  .leaf {
    display: inline-block;
    margin: 40px 30px;
  }

  .leaf:nth-child(1) .leaf_img {
    transition-delay: 0s;
  }

  .leaf:nth-child(2) .leaf_img {
    transition-delay: 0.2s;
  }

  .leaf:nth-child(3) .leaf_img {
    transition-delay: 0.4s;
  }

  .leaf:nth-child(4) .leaf_img {
    transition-delay: 0.6s;
  }

  .leaf:nth-child(5) .leaf_img {
    transition-delay: 0.8s;
  }

  .leaf:nth-child(6) .leaf_img {
    transition-delay: 1s;
  }
</style>

<body>
  <h1>Click anywhere to toggle</h1>
  <div class="leafs">
    <!--   <div class="leaf">
      <img class="leaf_img" width="400" src="http://fiorito.nl/wordpress/wp-content/themes/basic-theme/image/home/296.jpg" alt="" />
    </div>
    <div class="leaf">  
      <img class="leaf_img" width="400" src="http://fiorito.nl/wordpress/wp-content/themes/basic-theme/image/home/492.jpg" alt="" />
    </div>    
    <div class="leaf">
      <img class="leaf_img" width="400" src="http://fiorito.nl/wordpress/wp-content/themes/basic-theme/image/home/di-fiorito-264.jpg" alt="" />    
    </div> -->
    <div class="leaf">
      <img class="leaf_img" width="400" src="http://rzcollection.com/template/img/misc/leaf-3.jpg" alt="" />
    </div>
    <div class="leaf">
      <img class="leaf_img" width="400" src="http://rzcollection.com/template/img/misc/leaf-1.jpg" alt="" />
    </div>
    <div class="leaf">
      <img class="leaf_img" width="400" src="http://rzcollection.com/template/img/misc/leaf-2.jpg" alt="" />
    </div>

    <div class="leaf">
      <img class="leaf_img" width="400" src="http://rzcollection.com/template/img/misc/leaf-1.jpg" alt="" />
    </div>
    <div class="leaf">
      <img class="leaf_img" width="400" src="http://rzcollection.com/template/img/misc/leaf-2.jpg" alt="" />
    </div>
    <div class="leaf">
      <img class="leaf_img" width="400" src="http://rzcollection.com/template/img/misc/leaf-3.jpg" alt="" />
    </div>
  </div>
</body>
<script>
  $(function () {
    setTimeout(function () {
      $(".leaf_img").addClass("hover");
    }, 1000);
    $("body").on("click", function () {
      $(".leaf_img").toggleClass("hover");
    });
  });

</script>

</html>
