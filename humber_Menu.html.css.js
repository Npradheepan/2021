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
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
  }

  body {
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  :root {
    --speed: 0.25s;
  }

  .menu {
    position: relative;
    display: inline-block;
    background-color: white;
    box-shadow: 0 0 2px 2px #ccc;
    width: 5em;
    height: 5em;
    margin: 0.5em;
    cursor: pointer;
    transition: all 0.25s;
  }

  .menu:hover {
    box-shadow: 0 0 1px 1px #bbb;
  }

  .menu:nth-child(1) .menu_line {
    background-color: #BA68C8;
  }

  .menu:nth-child(2) .menu_line {
    background-color: #64B5F6;
  }

  .menu:nth-child(3) .menu_line {
    background-color: #4DB6AC;
  }

  .menu:nth-child(4) .menu_line {
    background-color: #FFD54F;
  }

  .menu:nth-child(5) .menu_line {
    background-color: #F06292;
  }

  .menu_line {
    position: absolute;
    top: 50%;
    width: 50%;
    height: 0.5em;
    border-radius: 0.25em;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu_line-a {
    --top: 33%;
  }

  .menu_line-b {
    --top: 50%;
  }

  .menu_line-c {
    --top: 67%;
  }

  .menu_line-a,
  .menu_line-b,
  .menu_line-c {
    width: 50%;
    top: var(--top);
    transition: width var(--speed) calc(var(--speed) * 2), top var(--speed) var(--speed);
  }

  .on .menu_line-a,
  .on .menu_line-b,
  .on .menu_line-c {
    width: 0.5em;
    top: 50%;
    transition: width var(--speed) 0s, top var(--speed) var(--speed);
  }

  .menu_line-d {
    --deg: 45deg;
  }

  .menu_line-e {
    --deg: -45deg;
  }

  .menu_line-d,
  .menu_line-e {
    width: 0.5em;
    top: 50%;
    transform: translate(-50%, -50%) rotate(var(--deg));
    transition: width var(--speed) 0s;
  }

  .on .menu_line-d,
  .on .menu_line-e {
    width: 50%;
    transition: width var(--speed) calc(var(--speed) * 2);
  }

  .menu_line-f {
    --top: 33%;
    --deg: 45deg;
  }

  .menu_line-h {
    --top: 67%;
    --deg: -45deg;
  }

  .menu_line-f,
  .menu_line-h {
    top: var(--top);
    transform: translate(-50%, -50%) rotate(0);
    transition: transform var(--speed), top var(--speed) var(--speed);
  }

  .on .menu_line-f,
  .on .menu_line-h {
    top: 50%;
    transform: translate(-50%, -50%) rotate(var(--deg));
    transition: top var(--speed), transform var(--speed) var(--speed);
  }

  .menu_line-g {
    transition: opacity 0s var(--speed);
  }

  .on .menu_line-g {
    opacity: 0;
  }

  .menu_line-i {
    --top: 33%;
  }

  .menu_line-k {
    --top: 67%;
  }

  .menu_line-i,
  .menu_line-k {
    top: var(--top);
    transition: transform var(--speed), top var(--speed);
  }

  .on .menu_line-i,
  .on .menu_line-k {
    top: 50%;
    transform: translate(-50%, -50%) rotate(135deg);
    transition: top var(--speed), transform var(--speed);
  }

  .menu_line-j {
    transition: transform var(--speed);
  }

  .on .menu_line-j {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .menu_line-l {
    --top: 33%;
  }

  .menu_line-n {
    --top: 67%;
  }

  .menu_line-l,
  .menu_line-n {
    top: var(--top);
    transition: opacity 0s var(--speed), width var(--speed) calc(var(--speed) * 2);
  }

  .on .menu_line-l,
  .on .menu_line-n {
    width: 0.5em;
    opacity: 0;
    transition: width var(--speed), opacity 0s var(--speed);
  }

  .menu_line-m {
    transition: transform var(--speed);
  }

  .on .menu_line-m {
    transform: translate(-50%, -50%) rotate(45deg);
    transition: transform var(--speed) calc(var(--speed) * 2);
  }

  .menu_line-o {
    --top: 33%;
  }

  .menu_line-p {
    --top: 67%;
  }

  .menu_line-o,
  .menu_line-p {
    top: var(--top);
    width: 0.5em;
    transition: top var(--speed) var(--speed), height calc(var(--speed) * 2) var(--speed), transform var(--speed);
  }

  .on .menu_line-o,
  .on .menu_line-p {
    top: 50%;
    height: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: top var(--speed) var(--speed), height calc(var(--speed) * 2), transform var(--speed) calc(var(--speed) * 2);
  }

  .menu_line-q {
    transition: transform calc(var(--speed) * 2);
  }

  .on .menu_line-q {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  svg {
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    width: 100%;
  }

  svg path {
    fill: none;
    stroke: black;
    stroke-width: 8px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  svg .path-a {
    stroke: #F06292;
    stroke-dasharray: 32 300;
    transition: all calc(var(--speed) * 2);
  }

  .on svg .path-a {
    stroke-dasharray: 16 300;
    stroke-dashoffset: -85;
  }
</style>

<body>
  <div>
    <div class="menu" onclick="setMenu(this);">
      <div class="menu_line menu_line-a"></div>
      <div class="menu_line menu_line-b"></div>
      <div class="menu_line menu_line-c"></div>
      <div class="menu_line menu_line-d"></div>
      <div class="menu_line menu_line-e"></div>
    </div>

    <div class="menu" onclick="setMenu(this);">
      <div class="menu_line menu_line-f"></div>
      <div class="menu_line menu_line-g"></div>
      <div class="menu_line menu_line-h"></div>
    </div>

    <div class="menu" onclick="setMenu(this);">
      <div class="menu_line menu_line-i"></div>
      <div class="menu_line menu_line-j"></div>
      <div class="menu_line menu_line-k"></div>
    </div>

    <div class="menu" onclick="setMenu(this);">
      <div class="menu_line menu_line-l"></div>
      <div class="menu_line menu_line-m"></div>
      <div class="menu_line menu_line-n"></div>
      <div class="menu_line menu_line-o"></div>
      <div class="menu_line menu_line-p"></div>
    </div>

    <div class="menu" onclick="setMenu(this);">
      <div class="menu_line menu_line-q"></div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 80 80">
        <path class="path-a" d="M 24 26 h 36 a 14 14 0 0 1 -6 28 l -28 -28" />
        <path class="path-a" d="M 56 54 h -36 a 14 14 0 0 1 6 -28 l 28 28" />
      </svg>
    </div>

  </div>
</body>
<script>
  function setMenu(e) {
    e.classList.toggle("on");
  }

</script>

</html>
