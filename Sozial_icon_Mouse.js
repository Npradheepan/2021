<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap"rel="stylesheet">
  <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>
<title>Document</title>
</head>
<style>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #121212;
  cursor: none;
}

.cursor {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 100;
}
.cursor--large {
  --size: 40px;
  border: 1px solid #ff3c3c;
}
.cursor--small {
  --size: 10px;
  background: #ff3c3c;
  transform: translate(-50%, -50%);
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
main button {
  --size: 60px;
  border: none;
  min-width: var(--size);
  min-height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  transition: background 200ms ease, color 200ms ease;
  cursor: none;
}
main:hover button {
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.04);
}
main:hover button:hover {
  color: #fff;
}

.support {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  display: flex;
}
.support a {
  margin: 0 10px;
  color: #fff;
  font-size: 1.8rem;
  backface-visibility: hidden;
  transition: all 150ms ease;
}
.support a:hover {
  transform: scale(1.1);
}
</style>
<body>
  <main>

    <button>
      <ion-icon name="logo-facebook"></ion-icon>
    </button>
    <button>
      <ion-icon name="logo-twitter"></ion-icon>
    </button>
    <button>
      <ion-icon name="logo-instagram"></ion-icon>
    </button>
    <button>
      <ion-icon name="logo-youtube"></ion-icon>
    </button>
    <button>
      <ion-icon name="logo-dribbble"></ion-icon>
    </button>
  
  </main>
  
  <div class="cursor cursor--large"></div>
  <div class="cursor cursor--small"></div>
  
  <div class="support">
    <a href="https://twitter.com/DevLoop01" target="_blank"><i class="fab fa-twitter-square"></i></a>
    <a href="https://dribbble.com/devloop01" target="_blank"><i class="fab fa-dribbble"></i></a>
  </div>
</body>
<script>
console.clear();

const { gsap } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
let mouse = {
	x: -100,
	y: -100
};

// Just in case you need to scroll
let scrollHeight = 0;
window.addEventListener("scroll", function (e) {
	scrollHeight = window.scrollY;
});

let cursorOuterOriginalState = {
	width: cursorOuter.getBoundingClientRect().width,
	height: cursorOuter.getBoundingClientRect().height
};
const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
	button.addEventListener("pointerenter", handleMouseEnter);
	button.addEventListener("pointerleave", handleMouseLeave);
});

document.body.addEventListener("pointermove", updateCursorPosition);
document.body.addEventListener("pointerdown", () => {
	gsap.to(cursorInner, 0.15, {
		scale: 2
	});
});
document.body.addEventListener("pointerup", () => {
	gsap.to(cursorInner, 0.15, {
		scale: 1
	});
});

function updateCursorPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function updateCursor() {
	gsap.set(cursorInner, {
		x: mouse.x,
		y: mouse.y
	});

	if (!isStuck) {
		gsap.to(cursorOuter, {
			duration: 0.15,
			x: mouse.x - cursorOuterOriginalState.width / 2,
			y: mouse.y - cursorOuterOriginalState.height / 2
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();

function handleMouseEnter(e) {
	isStuck = true;
	const targetBox = e.currentTarget.getBoundingClientRect();
	gsap.to(cursorOuter, 0.2, {
		x: targetBox.left,
		y: targetBox.top + scrollHeight,
		width: targetBox.width,
		height: targetBox.width,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0.1)"
	});
}

function handleMouseLeave(e) {
	isStuck = false;
	gsap.to(cursorOuter, 0.2, {
		width: cursorOuterOriginalState.width,
		height: cursorOuterOriginalState.width,
		borderRadius: "50%",
		backgroundColor: "transparent"
	});
}

</script>
</html>
