<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.0/slick-theme.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.0/slick.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/jquery.slick/1.5.0/slick.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
	<title>Document</title>
</head>
<style type="text/css">
.no-fouc {
	display: none;
}
/* Slick Slider */

body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: sans-serif;
  background: linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%);
}

/* Borrowed the H1 format from Miss Tiff from Jersey.
   https://codepen.io/tmrDevelops/pen/qENbLZ
*/
h1 {
  width: 100%;
  text-align: center;
  margin-top: 50px;
  color: hsla(360, 45%, 95%, 0.9);

  letter-spacing: 0.8em;
  font-size: 2.5vw;
  font-weight: normal;
  opacity: 0.2;
  text-transform: uppercase;
  text-shadow: hsla(0, 45%, 5%, 0.3) 0 0 1px,
    hsla(360, 55%, 95%, 0.3) 0 -1px 2px, hsla(0, 45%, 5%, 0.3) 0 -1px 2px,
    hsla(360, 55%, 95%, 0.3) 0 20px 15px;
}
section {
  width: 60%;
  margin: 70px auto;
}

/* Simple Slider */
.white-back {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
}
.simple blockquote p {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #1e528e;
  padding: 25px;
  font-size: 1.25em;
  font-style: italic;
  text-align: center;
}
.simple cite {
  font-size: 1em;
  float: right;
  font-style: normal;
  color: #1e528e;
}
.simple cite a {
  color: #2d91c2;
  font-style: italic;
  text-decoration: none;
  font-size: 0.85em;
}
.simple cite a:hover {
  color: #00b4cc;
}
/* A custom cursor to let folks know they can drag things */

.simple blockquote p,
.bubble blockquote {
  cursor: url(data:image/png;base64,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),
    auto;
}

/* Bubble Slider */

.bubble blockquote {
  margin: 10px 10px 0;
  background: #fff;
  padding: 60px;
  position: relative;
  border: none;
  border-radius: 8px;
  font-size: 1.25em;
  color: #1e528e;
}
.bubble blockquote:before,
.bubble blockquote:after {
  content: "\201C";
  position: absolute;
  font-size: 80px;
  padding: 10px;
  line-height: 1;
  color: #1e528e;
}
.bubble blockquote:before {
  top: 0;
  left: 10px;
}
.bubble blockquote:after {
  content: "\201D";
  right: 10px;
  bottom: -0.5em;
}
.bubble div {
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #fff;
  margin: 0 0 0 60px;
  margin-bottom: 10px;
}
.bubble cite {
  padding-left: 20px;
  font-size: 1.25em;
  color: #f7f7f7;
}

</style>

<body>
	<h1>Slick Testimonial Slider</h1>

<!-- 

The mark-up is simple. I did a little reading online about the correct mark-up for citations and the proper use of blockquotes.
From what I gather, the first slider seems to be the more valid mark-up.  I simply created sections with the class "quotes" as the
container for the testimanials.  Ken's script reads through the list and formats everything for you.  Pretty sweet.
In this example I am using the default settings and style sheet.  The great thing about Ken's scripts is that you
rotate any kind of content very simply. 

To prevent the flashing of unstyles content, I placed a CSS  snippet in the head of the HTML document.

<style type="text/css">
.no-fouc {
	display: none;
}
</style>

On Document Ready, I simply use jQuery to remove the class.

$( document ).ready(function() {
$('.no-fouc').removeClass('no-fouc');
});


Visit Ken's site for the source code and docs. 

Source: https://kenwheeler.github.io/slick/

-->

<!-- Simplest Slider -->

<section role="complementary" class="simple white-back quotes no-fouc">
  <blockquote>
    <p><strong>to cite (verb)</strong>: to acknowledge (give credit to) the original author or artist by providing a reference.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p><strong>citation (noun)</strong>: a properly formatted line of text that indicates the source for a quote, idea, fact etc. that you use.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p>If you are repeating a section of the article for emphasis, use an aside element.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p> A blockquote element cannot be inside a paragraph, and since HTML4 actually needs to contain paragraphs.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p><strong>to cite (verb)</strong>: to acknowledge (give credit to) the original author or artist by providing a reference.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p><strong>citation (noun)</strong>: a properly formatted line of text that indicates the source for a quote, idea, fact etc. that you use.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p>If you are repeating a section of the article for emphasis, use an aside element.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
  <blockquote>
    <p> A blockquote element cannot be inside a paragraph, and since HTML4 actually needs to contain paragraphs.</p>
    <cite>Someone Said<br />
      <a href="#">Said it Here</a></cite>
  </blockquote>
</section>

<!-- Speech Bubble Slider -->

<section class="quotes">
  <div class="bubble">
    <blockquote>I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality... I believe that unarmed truth and unconditional love will have the final word.
    </blockquote>
    <div></div>
    <cite> Martin Luther King, Jr.</cite>
  </div>
  <div class="bubble">
    <blockquote> Peace is not a relationship of nations. It is a condition of mind brought about by a serenity of soul. Peace is not merely the absence of war. It is also a state of mind. Lasting peace can come only to peaceful people.
    </blockquote>
    <div></div>
    <cite> Jawaharlal Nehru</cite>
  </div>
  <div class="bubble">
    <blockquote> Forgiveness is not always easy. At times, it feels more painful than the wound we suffered, to forgive the one that inflicted it. And yet, there is no peace without forgiveness.
    </blockquote>
    <div></div>
    <cite> Marianne Williamson</cite>
  </div>
  <div class="bubble">
    <blockquote>Of all our dreams today there is none more important - or so hard to realise - than that of peace in the world. May we never lose our faith in it or our resolve to do everything that can be done to convert it one day into reality. </blockquote>
    <div></div>
    <cite> Lester B. Pearson</cite>
  </div>
</section>
<br><br><br>
</body>
<script>
/*
This is a super simple slider using Ken Wheeler's "Slick Slider." 
It's responsive, swipable and light weight.

Visit Ken's site for the source code and docs. 

Source: https://kenwheeler.github.io/slick/

*/

/*
The following executes Ken's Slick Slider with several options.
*/

$(".quotes").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
});

/*
To prevent the flashing of unstyled content (FOUC) I created a class ".no-fouc"
which hides the slider.  When everything is ready to roll, I simply remove the
.no-fouc class from the slider section using the script below.  I placed the CSS snippet in the head of the HTML
page so that it's loaded before other things for obvious reasons.  What about folks with JS turned off?  
Well, I don't worry about them too much anymore.  Oh my.  I feel the heat from the flames already.  :) 
*/

$(document).ready(function () {
  $(".no-fouc").removeClass("no-fouc");
});

</script>
</html>
