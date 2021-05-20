<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
  <script src="https://assets.codepen.io/16327/Flip.min.js"></script>
  <title>Document</title>
</head>
<style>
  body {
  color: white;
  background-color: black;
  padding: 0 20px;
  font-family: "Signika Negative";
}
#flex {
  display: flex;
  overflow: hidden;
}
#container1,
#container2 {
  width: 50%;
}
#container1 div,
#container2 div {
  margin-bottom: 3px;
  height: 26px;
  background-color: #777;
  border-radius: 13px;
  border: 1px solid #333;
  text-align: center;
}

</style>
<body>
  <button type="button" onclick="fpme()">
    Flipme </button>
  <button type="button" onclick="fpmeBack()">
    Flipme-Back </button>
  <div id="divsvg">

    <svg id="svg1" width="297mm" height="210mm" version="1.1" viewBox="0 0 297 210" xmlns="http://www.w3.org/2000/svg">
      <rect id="rectflip" stroke="#2f528f" stroke-miterlimit="8" stroke-width="1px" y="8" x="46" height="180" width="200" fill-opacity="0.1" image-rendering="auto" />
      <g id="gDS">
        <g id="gDSPolyTitle">
          <path id="PolyDataSet" transform="matrix(.26458 0 0 .26458 16.767 18.626)" d="m5.1997 16.799 9.5195-9.5195h74.076l9.5195 9.5195-9.5195 9.5195h-74.076z" clip-path="url(#clipEmfPath1-98)" fill="none" image-rendering="auto" stroke="#4472c4" stroke-miterlimit="8" stroke-width="1.3299px" />
        </g>
        <g id="gDSIHS">
          <path transform="matrix(.26458 0 0 .26458 21.359 31.084)" d="m5.1997 5.1997h46.238v51.517h-46.238z" clip-path="url(#clipEmfPath1)" fill="none" stroke="#2f528f" stroke-miterlimit="8" stroke-width="1.3299px" />
          <path id="rectIHS" d="m22.672 32.459v13.631h12.234v-13.631z" fill="#728fb2" fill-rule="evenodd" image-rendering="auto" />

        </g>
      </g>
    </svg>

  </div>
<script>
  gsap.registerPlugin(Flip);
gsap.set("#gDS", { transformOrigin: "center center" });
const state = Flip.getState("#gDS");

function fpme() {
  const vars = Flip.fit("#gDS", "#rectflip", { getVars: true, scale: true });
  vars.scaleX = vars.scaleY = Math.min(vars.scaleX, vars.scaleY);
  vars.ease = "power1.inOut";
  vars.duration = 2;
  vars.transformOrigin = "center center";
  gsap.to("#gDS", vars);
}

function fpmeBack() {
  Flip.to(state, {
    duration: 1,
    scale: true,
    ease: "power1.inOut"
  });
}

</script>
</body>
</html>
