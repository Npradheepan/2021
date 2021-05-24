<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.3.6/pixi.min.js"></script>
  <title>Document</title>
</head>
<style>
  body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Anton", sans-serif;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  background: rgb(5, 3, 134);
}

.donuts_mask {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  height: 1300px;
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgb(5, 3, 134);

}
.donuts_mask::before {
  position: absolute;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.99);
  border-radius: 100%;
  background: rgb(5, 3, 134);
}
.donuts_mask:nth-child(1) {
  z-index: 10;
  -webkit-clip-path: circle(1%);
          clip-path: circle(1%);
  -webkit-animation: rotate 3000ms 163ms ease-in-out infinite;
          animation: rotate 3000ms 163ms ease-in-out infinite;
}
.donuts_mask:nth-child(1)::before {
  width: 0%;
  padding-top: 0%;
}
.donuts_mask:nth-child(2) {
  z-index: 9;
  -webkit-clip-path: circle(2%);
          clip-path: circle(2%);
  -webkit-animation: rotate 3000ms 913ms ease-in-out infinite;
          animation: rotate 3000ms 913ms ease-in-out infinite;
}
.donuts_mask:nth-child(2)::before {
  width: 10%;
  padding-top: 10%;
}
.donuts_mask:nth-child(3) {
  z-index: 8;
  -webkit-clip-path: circle(3%);
          clip-path: circle(3%);
  -webkit-animation: rotate 3000ms 69ms ease-in-out infinite;
          animation: rotate 3000ms 69ms ease-in-out infinite;
}
.donuts_mask:nth-child(3)::before {
  width: 20%;
  padding-top: 20%;
}
.donuts_mask:nth-child(4) {
  z-index: 7;
  -webkit-clip-path: circle(4%);
          clip-path: circle(4%);
  -webkit-animation: rotate 3000ms 293ms ease-in-out infinite;
          animation: rotate 3000ms 293ms ease-in-out infinite;
}
.donuts_mask:nth-child(4)::before {
  width: 30%;
  padding-top: 30%;
}
.donuts_mask:nth-child(5) {
  z-index: 6;
  -webkit-clip-path: circle(5%);
          clip-path: circle(5%);
  -webkit-animation: rotate 3000ms 448ms ease-in-out infinite;
          animation: rotate 3000ms 448ms ease-in-out infinite;
}
.donuts_mask:nth-child(5)::before {
  width: 40%;
  padding-top: 40%;
}
.donuts_mask:nth-child(6) {
  z-index: 5;
  -webkit-clip-path: circle(6%);
          clip-path: circle(6%);
  -webkit-animation: rotate 3000ms 839ms ease-in-out infinite;
          animation: rotate 3000ms 839ms ease-in-out infinite;
}
.donuts_mask:nth-child(6)::before {
  width: 50%;
  padding-top: 50%;
}
.donuts_mask:nth-child(7) {
  z-index: 4;
  -webkit-clip-path: circle(7%);
          clip-path: circle(7%);
  -webkit-animation: rotate 3000ms 529ms ease-in-out infinite;
          animation: rotate 3000ms 529ms ease-in-out infinite;
}
.donuts_mask:nth-child(7)::before {
  width: 60%;
  padding-top: 60%;
}
.donuts_mask:nth-child(8) {
  z-index: 3;
  -webkit-clip-path: circle(8%);
          clip-path: circle(8%);
  -webkit-animation: rotate 3000ms 863ms ease-in-out infinite;
          animation: rotate 3000ms 863ms ease-in-out infinite;
}
.donuts_mask:nth-child(8)::before {
  width: 70%;
  padding-top: 70%;
}
.donuts_mask:nth-child(9) {
  z-index: 2;
  -webkit-clip-path: circle(9%);
          clip-path: circle(9%);
  -webkit-animation: rotate 3000ms 753ms ease-in-out infinite;
          animation: rotate 3000ms 753ms ease-in-out infinite;
}
.donuts_mask:nth-child(9)::before {
  width: 80%;
  padding-top: 80%;
}
.donuts_mask:nth-child(10) {
  z-index: 1;
  -webkit-clip-path: circle(10%);
          clip-path: circle(10%);
  -webkit-animation: rotate 3000ms 157ms ease-in-out infinite;
          animation: rotate 3000ms 157ms ease-in-out infinite;
}
.donuts_mask:nth-child(10)::before {
  width: 90%;
  padding-top: 90%;
}
.donuts_mask:nth-child(11) {
  z-index: 0;
  -webkit-clip-path: circle(11%);
          clip-path: circle(11%);
  -webkit-animation: rotate 3000ms 87ms ease-in-out infinite;
          animation: rotate 3000ms 87ms ease-in-out infinite;
}
.donuts_mask:nth-child(11)::before {
  width: 100%;
  padding-top: 100%;
}
.donuts_mask:nth-child(12) {
  z-index: -1;
  -webkit-clip-path: circle(12%);
          clip-path: circle(12%);
  -webkit-animation: rotate 3000ms 765ms ease-in-out infinite;
          animation: rotate 3000ms 765ms ease-in-out infinite;
}
.donuts_mask:nth-child(12)::before {
  width: 110%;
  padding-top: 110%;
}
.donuts_mask:nth-child(13) {
  z-index: -2;
  -webkit-clip-path: circle(13%);
          clip-path: circle(13%);
  -webkit-animation: rotate 3000ms 791ms ease-in-out infinite;
          animation: rotate 3000ms 791ms ease-in-out infinite;
}
.donuts_mask:nth-child(13)::before {
  width: 120%;
  padding-top: 120%;
}
.donuts_mask:nth-child(14) {
  z-index: -3;
  -webkit-clip-path: circle(14%);
          clip-path: circle(14%);
  -webkit-animation: rotate 3000ms 662ms ease-in-out infinite;
          animation: rotate 3000ms 662ms ease-in-out infinite;
}
.donuts_mask:nth-child(14)::before {
  width: 130%;
  padding-top: 130%;
}
.donuts_mask:nth-child(15) {
  z-index: -4;
  -webkit-clip-path: circle(15%);
          clip-path: circle(15%);
  -webkit-animation: rotate 3000ms 899ms ease-in-out infinite;
          animation: rotate 3000ms 899ms ease-in-out infinite;
}
.donuts_mask:nth-child(15)::before {
  width: 140%;
  padding-top: 140%;
}
.donuts_mask:nth-child(16) {
  z-index: -5;
  -webkit-clip-path: circle(16%);
          clip-path: circle(16%);
  -webkit-animation: rotate 3000ms 986ms ease-in-out infinite;
          animation: rotate 3000ms 986ms ease-in-out infinite;
}
.donuts_mask:nth-child(16)::before {
  width: 150%;
  padding-top: 150%;
}
.donuts_mask:nth-child(17) {
  z-index: -6;
  -webkit-clip-path: circle(17%);
          clip-path: circle(17%);
  -webkit-animation: rotate 3000ms 334ms ease-in-out infinite;
          animation: rotate 3000ms 334ms ease-in-out infinite;
}
.donuts_mask:nth-child(17)::before {
  width: 160%;
  padding-top: 160%;
}
.donuts_mask:nth-child(18) {
  z-index: -7;
  -webkit-clip-path: circle(18%);
          clip-path: circle(18%);
  -webkit-animation: rotate 3000ms 183ms ease-in-out infinite;
          animation: rotate 3000ms 183ms ease-in-out infinite;
}
.donuts_mask:nth-child(18)::before {
  width: 170%;
  padding-top: 170%;
}
.donuts_mask:nth-child(19) {
  z-index: -8;
  -webkit-clip-path: circle(19%);
          clip-path: circle(19%);
  -webkit-animation: rotate 3000ms 75ms ease-in-out infinite;
          animation: rotate 3000ms 75ms ease-in-out infinite;
}
.donuts_mask:nth-child(19)::before {
  width: 180%;
  padding-top: 180%;
}
.donuts_mask:nth-child(20) {
  z-index: -9;
  -webkit-clip-path: circle(20%);
          clip-path: circle(20%);
  -webkit-animation: rotate 3000ms 543ms ease-in-out infinite;
          animation: rotate 3000ms 543ms ease-in-out infinite;
}
.donuts_mask:nth-child(20)::before {
  width: 190%;
  padding-top: 190%;
}
.donuts_mask:nth-child(21) {
  z-index: -10;
  -webkit-clip-path: circle(21%);
          clip-path: circle(21%);
  -webkit-animation: rotate 3000ms 574ms ease-in-out infinite;
          animation: rotate 3000ms 574ms ease-in-out infinite;
}
.donuts_mask:nth-child(21)::before {
  width: 200%;
  padding-top: 200%;
}
.donuts_mask:nth-child(22) {
  z-index: -11;
  -webkit-clip-path: circle(22%);
          clip-path: circle(22%);
  -webkit-animation: rotate 3000ms 730ms ease-in-out infinite;
          animation: rotate 3000ms 730ms ease-in-out infinite;
}
.donuts_mask:nth-child(22)::before {
  width: 210%;
  padding-top: 210%;
}
.donuts_mask:nth-child(23) {
  z-index: -12;
  -webkit-clip-path: circle(23%);
          clip-path: circle(23%);
  -webkit-animation: rotate 3000ms 673ms ease-in-out infinite;
          animation: rotate 3000ms 673ms ease-in-out infinite;
}
.donuts_mask:nth-child(23)::before {
  width: 220%;
  padding-top: 220%;
}
.donuts_mask:nth-child(24) {
  z-index: -13;
  -webkit-clip-path: circle(24%);
          clip-path: circle(24%);
  -webkit-animation: rotate 3000ms 26ms ease-in-out infinite;
          animation: rotate 3000ms 26ms ease-in-out infinite;
}
.donuts_mask:nth-child(24)::before {
  width: 230%;
  padding-top: 230%;
}
.donuts_mask:nth-child(25) {
  z-index: -14;
  -webkit-clip-path: circle(25%);
          clip-path: circle(25%);
  -webkit-animation: rotate 3000ms 273ms ease-in-out infinite;
          animation: rotate 3000ms 273ms ease-in-out infinite;
}
.donuts_mask:nth-child(25)::before {
  width: 240%;
  padding-top: 240%;
}
.donuts_mask:nth-child(26) {
  z-index: -15;
  -webkit-clip-path: circle(26%);
          clip-path: circle(26%);
  -webkit-animation: rotate 3000ms 958ms ease-in-out infinite;
          animation: rotate 3000ms 958ms ease-in-out infinite;
}
.donuts_mask:nth-child(26)::before {
  width: 250%;
  padding-top: 250%;
}
.donuts_mask:nth-child(27) {
  z-index: -16;
  -webkit-clip-path: circle(27%);
          clip-path: circle(27%);
  -webkit-animation: rotate 3000ms 573ms ease-in-out infinite;
          animation: rotate 3000ms 573ms ease-in-out infinite;
}
.donuts_mask:nth-child(27)::before {
  width: 260%;
  padding-top: 260%;
}
.donuts_mask:nth-child(28) {
  z-index: -17;
  -webkit-clip-path: circle(28%);
          clip-path: circle(28%);
  -webkit-animation: rotate 3000ms 586ms ease-in-out infinite;
          animation: rotate 3000ms 586ms ease-in-out infinite;
}
.donuts_mask:nth-child(28)::before {
  width: 270%;
  padding-top: 270%;
}
.donuts_mask:nth-child(29) {
  z-index: -18;
  -webkit-clip-path: circle(29%);
          clip-path: circle(29%);
  -webkit-animation: rotate 3000ms 135ms ease-in-out infinite;
          animation: rotate 3000ms 135ms ease-in-out infinite;
}
.donuts_mask:nth-child(29)::before {
  width: 280%;
  padding-top: 280%;
}
.donuts_mask:nth-child(30) {
  z-index: -19;
  -webkit-clip-path: circle(30%);
          clip-path: circle(30%);
  -webkit-animation: rotate 3000ms 558ms ease-in-out infinite;
          animation: rotate 3000ms 558ms ease-in-out infinite;
}
.donuts_mask:nth-child(30)::before {
  width: 290%;
  padding-top: 290%;
}
.donuts_mask:nth-child(31) {
  z-index: -20;
  -webkit-clip-path: circle(31%);
          clip-path: circle(31%);
  -webkit-animation: rotate 3000ms 318ms ease-in-out infinite;
          animation: rotate 3000ms 318ms ease-in-out infinite;
}
.donuts_mask:nth-child(31)::before {
  width: 300%;
  padding-top: 300%;
}
.donuts_mask:nth-child(32) {
  z-index: -21;
  -webkit-clip-path: circle(32%);
          clip-path: circle(32%);
  -webkit-animation: rotate 3000ms 482ms ease-in-out infinite;
          animation: rotate 3000ms 482ms ease-in-out infinite;
}
.donuts_mask:nth-child(32)::before {
  width: 310%;
  padding-top: 310%;
}
.donuts_mask:nth-child(33) {
  z-index: -22;
  -webkit-clip-path: circle(33%);
          clip-path: circle(33%);
  -webkit-animation: rotate 3000ms 250ms ease-in-out infinite;
          animation: rotate 3000ms 250ms ease-in-out infinite;
}
.donuts_mask:nth-child(33)::before {
  width: 320%;
  padding-top: 320%;
}
.donuts_mask:nth-child(34) {
  z-index: -23;
  -webkit-clip-path: circle(34%);
          clip-path: circle(34%);
  -webkit-animation: rotate 3000ms 335ms ease-in-out infinite;
          animation: rotate 3000ms 335ms ease-in-out infinite;
}
.donuts_mask:nth-child(34)::before {
  width: 330%;
  padding-top: 330%;
}
.donuts_mask:nth-child(35) {
  z-index: -24;
  -webkit-clip-path: circle(35%);
          clip-path: circle(35%);
  -webkit-animation: rotate 3000ms 218ms ease-in-out infinite;
          animation: rotate 3000ms 218ms ease-in-out infinite;
}
.donuts_mask:nth-child(35)::before {
  width: 340%;
  padding-top: 340%;
}
.donuts_mask:nth-child(36) {
  z-index: -25;
  -webkit-clip-path: circle(36%);
          clip-path: circle(36%);
  -webkit-animation: rotate 3000ms 427ms ease-in-out infinite;
          animation: rotate 3000ms 427ms ease-in-out infinite;
}
.donuts_mask:nth-child(36)::before {
  width: 350%;
  padding-top: 350%;
}
.donuts_mask:nth-child(37) {
  z-index: -26;
  -webkit-clip-path: circle(37%);
          clip-path: circle(37%);
  -webkit-animation: rotate 3000ms 520ms ease-in-out infinite;
          animation: rotate 3000ms 520ms ease-in-out infinite;
}
.donuts_mask:nth-child(37)::before {
  width: 360%;
  padding-top: 360%;
}
.donuts_mask:nth-child(38) {
  z-index: -27;
  -webkit-clip-path: circle(38%);
          clip-path: circle(38%);
  -webkit-animation: rotate 3000ms 110ms ease-in-out infinite;
          animation: rotate 3000ms 110ms ease-in-out infinite;
}
.donuts_mask:nth-child(38)::before {
  width: 370%;
  padding-top: 370%;
}
.donuts_mask:nth-child(39) {
  z-index: -28;
  -webkit-clip-path: circle(39%);
          clip-path: circle(39%);
  -webkit-animation: rotate 3000ms 18ms ease-in-out infinite;
          animation: rotate 3000ms 18ms ease-in-out infinite;
}
.donuts_mask:nth-child(39)::before {
  width: 380%;
  padding-top: 380%;
}
.donuts_mask:nth-child(40) {
  z-index: -29;
  -webkit-clip-path: circle(40%);
          clip-path: circle(40%);
  -webkit-animation: rotate 3000ms 177ms ease-in-out infinite;
          animation: rotate 3000ms 177ms ease-in-out infinite;
}
.donuts_mask:nth-child(40)::before {
  width: 390%;
  padding-top: 390%;
}
.donuts_mask:nth-child(41) {
  z-index: -30;
  -webkit-clip-path: circle(41%);
          clip-path: circle(41%);
  -webkit-animation: rotate 3000ms 532ms ease-in-out infinite;
          animation: rotate 3000ms 532ms ease-in-out infinite;
}
.donuts_mask:nth-child(41)::before {
  width: 400%;
  padding-top: 400%;
}
.donuts_mask:nth-child(42) {
  z-index: -31;
  -webkit-clip-path: circle(42%);
          clip-path: circle(42%);
  -webkit-animation: rotate 3000ms 868ms ease-in-out infinite;
          animation: rotate 3000ms 868ms ease-in-out infinite;
}
.donuts_mask:nth-child(42)::before {
  width: 410%;
  padding-top: 410%;
}
.donuts_mask:nth-child(43) {
  z-index: -32;
  -webkit-clip-path: circle(43%);
          clip-path: circle(43%);
  -webkit-animation: rotate 3000ms 469ms ease-in-out infinite;
          animation: rotate 3000ms 469ms ease-in-out infinite;
}
.donuts_mask:nth-child(43)::before {
  width: 420%;
  padding-top: 420%;
}
.donuts_mask:nth-child(44) {
  z-index: -33;
  -webkit-clip-path: circle(44%);
          clip-path: circle(44%);
  -webkit-animation: rotate 3000ms 199ms ease-in-out infinite;
          animation: rotate 3000ms 199ms ease-in-out infinite;
}
.donuts_mask:nth-child(44)::before {
  width: 430%;
  padding-top: 430%;
}
.donuts_mask:nth-child(45) {
  z-index: -34;
  -webkit-clip-path: circle(45%);
          clip-path: circle(45%);
  -webkit-animation: rotate 3000ms 35ms ease-in-out infinite;
          animation: rotate 3000ms 35ms ease-in-out infinite;
}
.donuts_mask:nth-child(45)::before {
  width: 440%;
  padding-top: 440%;
}
.donuts_mask:nth-child(46) {
  z-index: -35;
  -webkit-clip-path: circle(46%);
          clip-path: circle(46%);
  -webkit-animation: rotate 3000ms 943ms ease-in-out infinite;
          animation: rotate 3000ms 943ms ease-in-out infinite;
}
.donuts_mask:nth-child(46)::before {
  width: 450%;
  padding-top: 450%;
}
.donuts_mask:nth-child(47) {
  z-index: -36;
  -webkit-clip-path: circle(47%);
          clip-path: circle(47%);
  -webkit-animation: rotate 3000ms 525ms ease-in-out infinite;
          animation: rotate 3000ms 525ms ease-in-out infinite;
}
.donuts_mask:nth-child(47)::before {
  width: 460%;
  padding-top: 460%;
}
.donuts_mask:nth-child(48) {
  z-index: -37;
  -webkit-clip-path: circle(48%);
          clip-path: circle(48%);
  -webkit-animation: rotate 3000ms 202ms ease-in-out infinite;
          animation: rotate 3000ms 202ms ease-in-out infinite;
}
.donuts_mask:nth-child(48)::before {
  width: 470%;
  padding-top: 470%;
}
.donuts_mask:nth-child(49) {
  z-index: -38;
  -webkit-clip-path: circle(49%);
          clip-path: circle(49%);
  -webkit-animation: rotate 3000ms 667ms ease-in-out infinite;
          animation: rotate 3000ms 667ms ease-in-out infinite;
}
.donuts_mask:nth-child(49)::before {
  width: 480%;
  padding-top: 480%;
}
.donuts_mask:nth-child(50) {
  z-index: -39;
  -webkit-clip-path: circle(50%);
          clip-path: circle(50%);
  -webkit-animation: rotate 3000ms 284ms ease-in-out infinite;
          animation: rotate 3000ms 284ms ease-in-out infinite;
}
.donuts_mask:nth-child(50)::before {
  width: 490%;
  padding-top: 490%;
}

.step1 {
  position: absolute;
  opacity: 1;
  -webkit-animation: opacity 3000ms linear infinite alternate;
          animation: opacity 3000ms linear infinite alternate;
}

.step2 {
  position: absolute;
  opacity: 0;
  -webkit-animation: opacity 3000ms -3000ms linear infinite alternate;
          animation: opacity 3000ms -3000ms linear infinite alternate;
}

@-webkit-keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@-webkit-keyframes opacity {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  50% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}
</style>
<body>
  <div class="donuts">
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
    <div class="donuts_mask">
      <div class="step1">NIROJINY</div>
      <div class="step2">PRADHEEPAN</div>
    </div>
  </div>
</body>
<script>
var container = document.body.insertBefore(document.createElement('div'), document.body.firstChild)
container.setAttribute('class', 'particle-container')
container.style.position = 'fixed'
container.style.width = '100%'
container.style.height = '100%'
container.style.background = 'linear-gradient(0deg, rgb(5, 3, 134), rgb(5, 3, 134))'
container.style.zIndex = '-1'

var app = new PIXI.Application({
  autoResize: true,
  transparent: true
})
container.appendChild(app.view)

var totalSprites = 1000

for (var i = 0; i < totalSprites; i++) {
  add()
}

function add () {
  var graphics = new PIXI.Graphics();
  graphics.lineStyle(0)
  graphics.beginFill(0xffffff, Math.random() * 0.1 + 0.1)
  graphics.drawCircle(Math.random() * window.innerWidth, Math.random() * window.innerHeight * 2, Math.random() * 20 + 6)
  graphics.endFill()
  // graphics.filters = [new PIXI.filters.BlurFilter(Math.random() * 10 + 1)]
  app.stage.addChild(graphics)

  anime(graphics)
}

function anime (graphics) {
  var duration = Math.random() * 1 + 3
  gsap.set(graphics, {
    alpha: 0
  })
  gsap.to(graphics, {
    alpha: 1,
    duration: duration / 2
  })
  gsap.to(graphics, {
    alpha: 0,
    duration: duration / 2,
    delay: duration / 2
  })
  gsap.to(graphics, {
    x: '+=' + (Math.random() * 100 - 10),
    y: '+=' + (Math.random() * 100 - 10),
    rotation: Math.random() - 0.5,
    duration: duration,
    onComplete: function () {
      app.stage.removeChild(graphics)
      add()
    }
  })
}

window.addEventListener('resize', resize)
resize()
function resize () {
  app.renderer.resize(window.innerWidth, window.innerHeight)
}
</script>
</html>
