<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js"></script>
    <title>Document</title>
</head>
<style>
body {
  margin: 0;
  background: #000;
}

button {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #0B7A75;
  padding: 50px 100px;
  color: white;
  border: none;
  font-size: 50px;
}

.grid {
  display: grid;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-rows: 150px 150px 150px 150px;
}
.grid__item {
  background-color: #000;
  min-height: 100px;
  color: #fff;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  width: 0;
}
.grid__item--1 {
  background-image: url("https://images.unsplash.com/photo-1523057530100-383d7fbc77a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cff1b2c9744c71e84145dd78928513fc&auto=format&fit=crop&w=500&q=60");
}
.grid__item--2 {
  background-image: url("https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc2f58b2cffc18635231617b6a03179c&auto=format&fit=crop&w=500&q=60");
}
.grid__item--3 {
  grid-column: 1/3;
  grid-row: 3/4;
  background-image: url("https://images.unsplash.com/photo-1508136520685-fe5bd8a08052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=518801e338d483eccadf161024860e43&auto=format&fit=crop&w=500&q=60");
}
.grid__item--4 {
  grid-column: 3/5;
  grid-row: 3/5;
  background-image: url("https://images.unsplash.com/photo-1512699057394-81542d1afef2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b757d5297ec263b5b51e01799c299ba&auto=format&fit=crop&w=500&q=60");
}
.grid__item--5 {
  grid-column: 1/5;
  grid-row: 1/3;
  background-image: url("https://images.unsplash.com/photo-1502489663207-421986f620c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8b3c5b15aa13626ba65c6bf9a4b6c7&auto=format&fit=crop&w=1350&q=80");
}
.grid__item--6 {
  grid-column: 5/9;
  grid-row: 1/5;
  background-image: url("https://images.unsplash.com/photo-1495419529704-4964710cbcdc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=769b52d9b2e7e32018efa3e3f7adc5e5&auto=format&fit=crop&w=500&q=60");
}
</style>
<body>
    <div class="grid">
        <div class="grid__item grid__item--1"></div>
        <div class="grid__item grid__item--2"></div>
        <div class="grid__item grid__item--3"></div>
        <div class="grid__item grid__item--4"></div>
        <div class="grid__item grid__item--5"></div>
        <div class="grid__item grid__item--6"></div>
      </div>
      
      <button>Open</button>
</body>
<script>
$("button").on("click", function () {
  $(this).prop("disabled", true);

  if ($(this).hasClass("open")) {
    // Images are visible -------------------------------------------
    $(this).html("Close");

    var relativeOffsetClose = anime.timeline({
      complete: function (anim) {
        $("button").prop("disabled", false);
      }
    });
    relativeOffsetClose
      .add({
        targets: ".grid__item--6",
        opacity: 1,
        easing: "easeOutExpo",
        width: "0"
      })
      .add({
        targets: ".grid__item--5",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=500",
        width: "0"
      })
      .add({
        targets: ".grid__item--4",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=550",
        width: "0"
      })
      .add({
        targets: ".grid__item--3",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=600",
        width: "0"
      })
      .add({
        targets: ".grid__item--2",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=650",
        width: "0"
      })
      .add({
        targets: ".grid__item--1",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=700",
        width: "0"
      });

    $(this).removeClass("open");
    $(this).html("Open");
    //$(this).prop("disabled", false);
  } else {
    // Images are NOT visible -------------------------------------------
    var relativeOffsetOpen = anime.timeline({
      complete: function (anim) {
        $("button").prop("disabled", false);
      }
    });
    relativeOffsetOpen
      .add({
        targets: ".grid__item--1",
        opacity: 1,
        easing: "easeOutExpo",
        width: "100%"
      })
      .add({
        targets: ".grid__item--2",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=500",
        width: "100%"
      })
      .add({
        targets: ".grid__item--3",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=550",
        width: "100%"
      })
      .add({
        targets: ".grid__item--4",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=600",
        width: "100%"
      })
      .add({
        targets: ".grid__item--5",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=650",
        width: "100%"
      })
      .add({
        targets: ".grid__item--6",
        opacity: 1,
        easing: "easeOutExpo",
        offset: "-=700",
        width: "100%"
      });

    $(this).addClass("open");
    $(this).html("Close");
  }
});

</script>
</html>
