<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css"></script>
  <title>Document</title>
</head>
<style>
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  background: #97C8DB;
}

h1 {
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 26px;
  font-weight: 400;
}

a {
  color: #000;
}
a:hover, a:active {
  text-decoration: none;
}

.about {
  width: 90%;
  margin: 0 auto;
}

.about:after {
  content: "";
  display: table;
  clear: both;
}

.bio {
  float: left;
  width: 33%;
  padding-right: 30px;
  overflow: hidden;
}
.bio:last-child {
  padding-right: 0;
}

.expanded {
  display: none;
  animation-duration: 0.3s;
}
</style>
<body>
  <section class="about">
    <h1>About Us</h1>
    <div class="bio">
      <h2>Sally Johnson</h2>
      <p>Tart jelly-o chocolate danish cotton candy. Liquorice tootsie roll danish tootsie roll jelly beans danish pastry liquorice. Sweet roll danish tart gummies carrot cake. Soufflé tootsie roll ice cream gummies sweet sugar plum halvah ice cream. Donut jelly chupa chups gummi bears cupcake cake. Sugar plum candy sweet candy canes lemon drops gummi bears danish. Wafer toffee pastry ice cream marzipan jelly-o tiramisu. Donut pie gummies. Jelly beans sweet roll pudding oat cake croissant cheesecake chocolate cake.</p>
      <div class="expanded">
        <p>Chupa chups is cheesecake macaroon macaroon fruitcake topping sugar plum. Wafer macaroon gingerbread tart donut chocolate. Cake muffin brownie chupa chups croissant cake. Apple pie pudding liquorice bear claw. Biscuit lollipop croissant toffee. Bear claw chocolate wafer croissant marzipan pie. Donut brownie pastry marshmallow. Carrot cake toffee liquorice jelly beans bonbon. Dragée candy canes gummies. Pudding caramels sweet marzipan lemon drops cake dragée powder croissant.
          Candy tootsie roll candy canes lollipop sweet icing jujubes cake. Cake candy halvah toffee. Gummi bears tiramisu sugar plum lemon drops soufflé bear claw. Gummi bears marshmallow macaroon marshmallow carrot cake gummi bears chupa chups lemon drops sweet roll.</p>
      </div>
      <a href="#" class="read-more">Read More</a>
    </div>
    <div class="bio">
      <h2>Ed Smith</h2>
      <p>Tart jelly-o chocolate danish cotton candy. Liquorice tootsie roll danish tootsie roll jelly beans danish pastry liquorice. Sweet roll danish tart gummies carrot cake. Soufflé tootsie roll ice cream gummies sweet sugar plum halvah ice cream. Donut jelly chupa chups gummi bears cupcake cake. Sugar plum candy sweet candy canes lemon drops gummi bears danish. Wafer toffee pastry ice cream marzipan jelly-o tiramisu. Donut pie gummies. Jelly beans sweet roll pudding oat cake croissant cheesecake chocolate cake.</p>
      <div class="expanded">
        <p>How we do macaroon macaroon fruitcake topping sugar plum. Wafer macaroon gingerbread tart donut chocolate. Cake muffin brownie chupa chups croissant cake. Apple pie pudding liquorice bear claw. Biscuit lollipop croissant toffee. Bear claw chocolate wafer croissant marzipan pie. Donut brownie pastry marshmallow. Carrot cake toffee liquorice jelly beans bonbon. Dragée candy canes gummies. Pudding caramels sweet marzipan lemon drops cake dragée powder croissant.
          Candy tootsie roll candy canes lollipop sweet icing jujubes cake. Cake candy halvah toffee. Gummi bears tiramisu sugar plum lemon drops soufflé bear claw. Gummi bears marshmallow macaroon marshmallow carrot cake gummi bears chupa chups lemon drops sweet roll.</p>
      </div>
      <a href="#" class="read-more">Read More</a>
    </div>
    <div class="bio">
      <h2>Sarah Wu</h2>
      <p>Tart jelly-o chocolate danish cotton candy. Liquorice tootsie roll danish tootsie roll jelly beans danish pastry liquorice. Sweet roll danish tart gummies carrot cake. Soufflé tootsie roll ice cream gummies sweet sugar plum halvah ice cream. Donut jelly chupa chups gummi bears cupcake cake. Sugar plum candy sweet candy canes lemon drops gummi bears danish. Wafer toffee pastry ice cream marzipan jelly-o tiramisu. Donut pie gummies. Jelly beans sweet roll pudding oat cake croissant cheesecake chocolate cake.</p>
      <div class="expanded">
        <p>Awesomeness is macaroon macaroon fruitcake topping sugar plum. Wafer macaroon gingerbread tart donut chocolate. Cake muffin brownie chupa chups croissant cake. Apple pie pudding liquorice bear claw. Biscuit lollipop croissant toffee. Bear claw chocolate wafer croissant marzipan pie. Donut brownie pastry marshmallow. Carrot cake toffee liquorice jelly beans bonbon. Dragée candy canes gummies. Pudding caramels sweet marzipan lemon drops cake dragée powder croissant.
          Candy tootsie roll candy canes lollipop sweet icing jujubes cake. Cake candy halvah toffee. Gummi bears tiramisu sugar plum lemon drops soufflé bear claw. Gummi bears marshmallow macaroon marshmallow carrot cake gummi bears chupa chups lemon drops sweet roll.</p>
      </div>
      <a href="#" class="read-more">Read More</a>
    </div>
  </section>
</body>
<script>
  "use strict";

var toggleVisibility = function (event) {
  event.preventDefault();
  var expandedContent = event.target.previousElementSibling;
  if (!expandedContent || !expandedContent.classList.contains("expanded")) {
    return;
  }

  if (expandedContent.style.display == "block") {
    expandedContent.classList.remove("animated", "slideInUp");
    expandedContent.classList.add("animated", "slideOutDown");
    expandedContent.style.display = "none";
    event.target.innerHTML = "Read More";
  } else {
    expandedContent.classList.remove("animated", "slideOutDown");
    expandedContent.classList.add("animated", "slideInUp");
    expandedContent.style.display = "block";
    event.target.innerHTML = "Read Less";
  }
};

var aboutSection = document.getElementsByClassName("about")[0];

aboutSection.addEventListener("click", toggleVisibility);

</script>
</html>
