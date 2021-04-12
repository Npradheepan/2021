<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/classnames/2.2.5/index.min.js"></script>
    <title>Document</title>
</head>
<style>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  background: #000;
}

.slider {
  overflow: hidden;
  position: relative;
  height: 100vh;
  color: #fff;
}
.slider__top-heading {
  z-index: 12;
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  transition: all 0.5s 1s;
  transform: translateY(-30px);
  opacity: 0;
}
.slider.s--ready .slider__top-heading {
  transform: translateY(0);
  opacity: 1;
}
.slider__slides {
  position: relative;
  height: 100%;
}
.slider__slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.slider__slide.s--active {
  pointer-events: auto;
}
.slider__slide-content {
  z-index: 6;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-transform: uppercase;
  line-height: 1;
}
.slider__slide-subheading {
  margin-bottom: 20px;
  font-size: 24px;
  letter-spacing: 2px;
  transform: translateY(20px);
  opacity: 0;
  transition: 0.5s;
}
.slider__slide.s--active .slider__slide-subheading {
  transition-delay: 0.65s;
  opacity: 1;
  transform: translateY(0);
}
.slider__slide-heading {
  display: flex;
  margin-bottom: 20px;
  font-size: 60px;
  letter-spacing: 12px;
}
.slider__slide-heading span {
  display: block;
  opacity: 0;
  transform: translateY(-60px);
  transition: all 0.3333333333s;
}
.slider__slide.s--prev .slider__slide-heading span {
  transform: translateY(60px);
}
.slider__slide.s--active .slider__slide-heading span {
  opacity: 1;
  transform: translateY(0);
}
.slider__slide-heading span:nth-child(1) {
  transition-delay: 0s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(1) {
  transition-delay: 0.3333333333s;
}
.slider__slide-heading span:nth-child(2) {
  transition-delay: 0.1s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(2) {
  transition-delay: 0.4333333333s;
}
.slider__slide-heading span:nth-child(3) {
  transition-delay: 0.2s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(3) {
  transition-delay: 0.5333333333s;
}
.slider__slide-heading span:nth-child(4) {
  transition-delay: 0.3s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(4) {
  transition-delay: 0.6333333333s;
}
.slider__slide-heading span:nth-child(5) {
  transition-delay: 0.4s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(5) {
  transition-delay: 0.7333333333s;
}
.slider__slide-heading span:nth-child(6) {
  transition-delay: 0.5s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(6) {
  transition-delay: 0.8333333333s;
}
.slider__slide-heading span:nth-child(n+7) {
  transition-delay: 0.6s;
}
.slider__slide.s--active .slider__slide-heading span:nth-child(n+7) {
  transition-delay: 0.9333333333s;
}
.slider__slide-readmore {
  position: relative;
  font-size: 14px;
  text-transform: lowercase;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  transform: translateY(-20px);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
}
.slider__slide.s--active .slider__slide-readmore {
  transition-delay: 0.65s;
  opacity: 1;
  transform: translateY(0);
}
.slider__slide-readmore:before {
  content: "";
  position: absolute;
  left: -2px;
  top: -3px;
  width: calc(100% + 4px);
  height: calc(100% + 6px);
  background: rgba(255, 255, 255, 0.4);
  transform: scaleX(0.3);
  transform-origin: 0 50%;
  transition: transform 0.3s;
}
.slider__slide-readmore:hover:before {
  transform: scaleX(1);
}
.slider__slide-parts {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
}
.slider__slide-parts:after {
  content: "";
  z-index: 5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
.slider__slide-part {
  position: relative;
  width: 25%;
  height: 100%;
}
.slider__slide-part-inner {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 0 0;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
}
.slider__slide-part-inner:before {
  content: "";
  position: absolute;
  width: 100vw;
  height: 100%;
  background-image: inherit;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.25s;
  opacity: 0;
}
.slider__slide-part:nth-child(1) .slider__slide-part-inner {
  z-index: 3;
  transition-delay: 0.24s;
  transform: translateX(-32.5%);
}
.slider__slide.s--active .slider__slide-part:nth-child(1) .slider__slide-part-inner {
  transition-delay: 0.28s;
}
.slider__slide-part:nth-child(1) .slider__slide-part-inner:before {
  left: 0vw;
  transition-delay: 0.365s;
}
.slider__slide.s--active .slider__slide-part:nth-child(1) .slider__slide-part-inner:before {
  transition-delay: 0.28s;
}
.slider__slide-part:nth-child(2) .slider__slide-part-inner {
  z-index: 2;
  transition-delay: 0.16s;
  transform: translateX(-65%);
}
.slider__slide.s--active .slider__slide-part:nth-child(2) .slider__slide-part-inner {
  transition-delay: 0.36s;
}
.slider__slide-part:nth-child(2) .slider__slide-part-inner:before {
  left: -25vw;
  transition-delay: 0.285s;
}
.slider__slide.s--active .slider__slide-part:nth-child(2) .slider__slide-part-inner:before {
  transition-delay: 0.36s;
}
.slider__slide-part:nth-child(3) .slider__slide-part-inner {
  z-index: 1;
  transition-delay: 0.08s;
  transform: translateX(-97.5%);
}
.slider__slide.s--active .slider__slide-part:nth-child(3) .slider__slide-part-inner {
  transition-delay: 0.44s;
}
.slider__slide-part:nth-child(3) .slider__slide-part-inner:before {
  left: -50vw;
  transition-delay: 0.205s;
}
.slider__slide.s--active .slider__slide-part:nth-child(3) .slider__slide-part-inner:before {
  transition-delay: 0.44s;
}
.slider__slide-part:nth-child(4) .slider__slide-part-inner {
  z-index: 0;
  transition-delay: 0s;
  transform: translateX(-130%);
}
.slider__slide.s--active .slider__slide-part:nth-child(4) .slider__slide-part-inner {
  transition-delay: 0.52s;
}
.slider__slide-part:nth-child(4) .slider__slide-part-inner:before {
  left: -75vw;
  transition-delay: 0.125s;
}
.slider__slide.s--active .slider__slide-part:nth-child(4) .slider__slide-part-inner:before {
  transition-delay: 0.52s;
}
.slider__slide.s--active .slider__slide-part-inner {
  transform: translateX(0);
  transition-timing-function: ease;
}
.slider__slide.s--active .slider__slide-part-inner:before {
  opacity: 1;
}
.slider__control {
  z-index: 100;
  position: absolute;
  left: 50px;
  top: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: translateX(-50px);
  opacity: 0;
  transition: all 0.5s 1s;
  cursor: pointer;
}
.slider__control:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  border: 2px solid #000;
  border-bottom: none;
  border-right: none;
  transform: translateX(5px) rotate(-45deg);
}
.slider__control--right {
  left: auto;
  right: 50px;
  transform: translateX(50px);
}
.slider__control--right:before {
  transform: translateX(-5px) rotate(135deg);
}
.slider.s--ready .slider__control {
  transform: translateX(0);
  opacity: 1;
}

.icon-link {
  z-index: 100;
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;
}
.icon-link img {
  width: 100%;
  vertical-align: top;
}
.icon-link--twitter {
  left: auto;
  right: 5px;
}
</style>
<body>
    <div id="app"></div>
<a href="https://dribbble.com/shots/3774469-T-R-A-V-E-L-E-R" target="_blank" class="icon-link">
  <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png">
</a>
<a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png">
</a>
</body>
<script>
class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
      React.createElement("p", { className: "slider__top-heading" }, "Travelers"), /*#__PURE__*/
      React.createElement("div", { className: "slider__slides" },
      this.props.slides.map((slide, index) => /*#__PURE__*/
      React.createElement("div", {
        className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
        key: slide.city }, /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
      React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city), /*#__PURE__*/
      React.createElement("h2", { className: "slider__slide-heading" },
      slide.city.split('').map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/

      React.createElement("p", { className: "slider__slide-readmore" }, "read more")), /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-parts" },
      [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/

      React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
      React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));


  }}


const slides = [
{
  city: 'Paris',
  country: 'France',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg' },

{
  city: 'Singapore',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg' },

{
  city: 'Prague',
  country: 'Czech Republic',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg' },

{
  city: 'Amsterdam',
  country: 'Netherlands',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg' },

{
  city: 'Moscow',
  country: 'Russia',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg' }];



ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));
</script>
</html>
