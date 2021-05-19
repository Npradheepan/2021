<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>Document</title>
</head>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  background-color: #ccc;
}
.faq-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.faq {
  border: 1px solid #000;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}
.faq.active::before,
.faq.active::after {
  content: "\f075";
  font-family: "Font Awesome 5 Free";
  color: #0c35d7;
  font-size: 7rem;
  opacity: 0.2;
  position: absolute;
  top: 16px;
  left: 36px;
}
.faq.active::after {
  top: -10px;
  left: 0px;
  transform: rotateY(180deg);
}
.faq.active {
  background: #fff;
  border: none;
}
.faq-text {
  display: none;
}
.faq.active .faq-text {
  display: block;
}
.faq-buttons {
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
}
.faq-buttons:focus {
  outline: 0;
}
.faq-buttons .fa-times {
  display: none;
}
.faq.active .faq-buttons .fa-chevron-down {
  display: block;
}
.faq.active .faq-buttons .fa-times {
  display: block;
}
.faq.active .faq-buttons .fa-chevron-down {
  display: none;
}

</style>
<body>
    <div class="faq-container">
        <div class="faq active">
          <div class="faq-title">
            <h3>What's your favourite text editor?</h3>
          </div>
          <div class="faq-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="faq-buttons">
            <i class="fas fa-times"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div class="faq">
          <div class="faq-title">
            <h3>What's your favourite actress?</h3>
          </div>
          <div class="faq-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="faq-buttons">
            <i class="fas fa-times"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div class="faq">
          <div class="faq-title">
            <h3>Do you like Facebook or Twitter?</h3>
          </div>
          <div class="faq-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="faq-buttons">
            <i class="fas fa-times"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div class="faq">
          <div class="faq-title">
            <h3>Do you watch The little Rascals film?</h3>
          </div>
          <div class="faq-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="faq-buttons">
            <i class="fas fa-times"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
</body>
<script>
const toggles = document.querySelectorAll(".faq-buttons");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

</script>
</html>
