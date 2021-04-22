<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Petrona:wght@300&display=swap");
body {
  --color-text: hsl(0, 0%, 15%);
  --color-bg: hsl(285, 18%, 4%);
  --color-bubble-emoji: hotpink;
  --color-bubble-user: skyblue;
  --color-highlight: yellow;
  --space: clamp(1.25rem, 4vw, 2rem);
  --font-main: "Petrona", serif;
  --duration: 90ms;
  --ease: cubic-bezier(0.25, 1, 0.5, 1);
}

/* Global */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  place-content: center;
  padding: calc(var(--space) * 2);
  color: var(--color-text);
  background-color: var(--color-bg);
  font-family: var(--font-main);
}

.squiggle-vision-svg {
  position: fixed;
  top: 100%;
  pointer-events: none;
}

/* Sections */
.hide .section {
  opacity: 0;
}

.no-js-text {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  place-items: center;
  max-width: 35ch;
  width: 100vw;
  height: 100vh;
  font-size: 2rem;
  line-height: 1.4;
  color: white;
}

.section {
  display: grid;
  justify-items: center;
  position: relative;
}

.section .wrapper {
  position: relative;
  line-height: 1.2;
}

/* Bubble */
.bubble {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--color-text);
  width: 100%;
  height: 100%;
  background-color: var(--color-bubble-emoji);
  border-radius: 1vmin;
  pointer-events: none;
}

.bubble::after {
  content: "";
  position: absolute;
  top: calc(100% - 1vmin);
  left: 60%;
  width: 5vmin;
  height: 5vmin;
  background-color: inherit;
  -webkit-clip-path: polygon(30% 0, 0 100%, 100% 0);
          clip-path: polygon(30% 0, 0 100%, 100% 0);
}

/* Text */
.text-wrapper {
  position: relative;
  padding: var(--space);
  z-index: 1;
  text-align: center;
  outline: none;
  min-width: 20vmin;
}

/* Emoji section */
.section--emoji {
  display: grid;
  justify-items: center;
  grid-gap: var(--space);
  padding: var(--space);
  position: relative;
  font-size: clamp(1.25rem, 5vmin, 4rem);
  transform-origin: 50% 0;
  transition: transform calc(var(--duration) * 4) var(--ease);
}

.section--emoji .text-wrapper span {
  position: relative;
  visibility: hidden;
  -webkit-animation: char var(--duration) calc(var(--i) * var(--duration)) linear forwards;
          animation: char var(--duration) calc(var(--i) * var(--duration)) linear forwards;
}

.emoji {
  position: relative;
  margin-bottom: var(--space);
  font-family: Courier, monospace;
  font-size: 10vmin;
  letter-spacing: 0.5vmin;
  line-height: 1.5;
  width: 1.75ch;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.emoji span {
  display: block;
  white-space: nowrap;
}

/* User section */
.section--user {
  font-size: clamp(1.5rem, 6vmin, 5rem);
  transition: opacity calc(var(--duration) * 2) var(--ease), transform calc(var(--duration) * 4) var(--ease);
}

.section--user .bubble {
  min-width: 18vmin;
  background-color: var(--color-bubble-user);
}

.section--user .bubble::after {
  left: unset;
  right: 3rem;
  transform: scaleX(-1);
}

/* Textarea */
.section--user .wrapper {
  display: inline-grid;
}

.section--user .wrapper::after {
  content: attr(data-value);
  padding: var(--space);
  visibility: hidden;
  white-space: pre-wrap;
}

.section--user .wrapper::after,
.section--user .textarea {
  grid-area: 1/1;
  min-width: 1em;
}

.section--user .textarea {
  width: auto;
  font: inherit;
  margin: 0;
  resize: none;
  background: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
}

.section--user .textarea::-moz-selection {
  background: var(--color-highlight);
}

.section--user .textarea::selection {
  background: var(--color-highlight);
}

.submit-button {
  all: unset;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%) scale(1.1);
  font-size: clamp(0.8rem, 2vw, 1rem);
  line-height: 1;
  padding: 0.75em 0.25em 0 1.25em;
  border: 4px solid var(--color-bg);
  border-radius: 0.4rem;
  background-color: var(--color-bubble-emoji);
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 2;
}

.submit-button:disabled {
  cursor: not-allowed;
}

/* Focus states */
.submit-button:focus,
.text-wrapper:focus {
  outline: 2px dashed var(--color-highlight);
}

.text-wrapper:focus {
  outline-offset: 4px;
}

/* Animations */
.is-talking .emoji span {
  -webkit-animation: talking calc(var(--duration) * 2) steps(2, jump-none) var(--iteration-count);
          animation: talking calc(var(--duration) * 2) steps(2, jump-none) var(--iteration-count);
}

.is-talking .section--user {
  opacity: 0.5;
  cursor: not-allowed;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

@media (prefers-reduced-motion: no-preference) {
  .is-talking .section--user {
    opacity: 0;
    transform: translateY(50%);
    pointer-events: none;
  }

  .is-talking .section--emoji {
    transform: scale(1.2);
  }

  .bubble,
.emoji {
    -webkit-animation: squiggle 300ms linear infinite;
            animation: squiggle 300ms linear infinite;
  }
}
/* Animation keyframes */
@-webkit-keyframes char {
  to {
    visibility: visible;
  }
}
@keyframes char {
  to {
    visibility: visible;
  }
}
@-webkit-keyframes talking {
  100% {
    transform: translateX(-100%);
  }
}
@keyframes talking {
  100% {
    transform: translateX(-100%);
  }
}
@-webkit-keyframes squiggle {
  0% {
    filter: url("#squiggle-0");
  }
  25% {
    filter: url("#squiggle-1");
  }
  50% {
    filter: url("#squiggle-2");
  }
  75% {
    filter: url("#squiggle-3");
  }
  100% {
    filter: url("#squiggle-4");
  }
}
@keyframes squiggle {
  0% {
    filter: url("#squiggle-0");
  }
  25% {
    filter: url("#squiggle-1");
  }
  50% {
    filter: url("#squiggle-2");
  }
  75% {
    filter: url("#squiggle-3");
  }
  100% {
    filter: url("#squiggle-4");
  }
}
</style>
<body>
  <noscript>
    <p class="no-js-text">Javascript needs to be enabled for this project to run. Any volunteers up to the task of making this work with only HTML and CSS? 😎
    </p>
  </noscript>
  
  <section class="section section--emoji">
    <div class="wrapper">
      <div id="emoji-bubble" class="bubble"></div>
      <div id="emoji-text" class="text-wrapper"></div>
    </div>
    <div id="emoji" class="emoji">
      <span></span>
    </div>
  </section>
  
  <section class="section section--user">
    <div class="wrapper">
      <div id="user-bubble" class="bubble"></div>
      <textarea id="user-text" class="textarea text-wrapper" aria-describedby="submit-button" rows="1" cols="5"></textarea>
      <button id="submit-button" aria-label="Press enter to submit" class="submit-button" disabled>↵</button>
    </div>
  </section>
  
  <svg class="squiggle-vision-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="squiggle-0">
        <feTurbulence baseFrequency="0.025" numOctaves="3" result="noise" seed="0" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
      <filter id="squiggle-1">
        <feTurbulence baseFrequency="0.025 0" numOctaves="3" result="noise" seed="1" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
      <filter id="squiggle-2">
        <feTurbulence baseFrequency="0.025" numOctaves="3" result="noise" seed="2" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
      <filter id="squiggle-3">
        <feTurbulence baseFrequency="0.025 0" numOctaves="3" result="noise" seed="2" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
      <filter id="squiggle-4">
        <feTurbulence baseFrequency="0.025" numOctaves="3" result="noise" seed="1" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
      </filter>
    </defs>
  </svg>
</body>
<script>
const emojiContainer = document.getElementById("emoji");
const emojiContainerInner = emojiContainer.querySelector("span");
const emojiText = document.getElementById("emoji-text");
const userText = document.getElementById("user-text");
const submitButton = document.getElementById("submit-button");
const talkingClassName = "is-talking";

const initEmojiBubble = {
  text: "Ask me a yes or no question.",
  emoji: {
    talking: "😊😄",
    resting: "😊"
  }
};

const answers = [
  {
    text: "As I see it, yes.",
    emoji: {
      talking: "😊😄",
      resting: "😁"
    }
  },
  {
    text: "Ask again later.",
    emoji: {
      talking: "😊😄",
      resting: "🤫"
    }
  },
  {
    text: "Better not tell you now.",
    emoji: {
      talking: "🙂😮",
      resting: "🤐"
    }
  },
  {
    text: "Cannot predict now.",
    emoji: {
      talking: "😐😮",
      resting: "😴"
    }
  },
  {
    text: "Concentrate and ask again.",
    emoji: {
      talking: "😐😮",
      resting: "🤔"
    }
  },
  {
    text: "Don’t count on it.",
    emoji: {
      talking: "🙂😮",
      resting: "😏"
    }
  },
  {
    text: "It is certain.",
    emoji: {
      talking: "😊😄",
      resting: "🤩"
    }
  },
  {
    text: "It is decidedly so.",
    emoji: {
      talking: "😊😄",
      resting: "😀"
    }
  },
  {
    text: "Most likely.",
    emoji: {
      talking: "😊😄",
      resting: "😉"
    }
  },
  {
    text: "My reply is no.",
    emoji: {
      talking: "🙁😮",
      resting: "😞"
    }
  },
  {
    text: "My sources say no.",
    emoji: {
      talking: "🙁😮",
      resting: "😕"
    }
  },
  {
    text: "Outlook not so good.",
    emoji: {
      talking: "🙁😮",
      resting: "☹️"
    }
  },
  {
    text: "Reply hazy, try again.",
    emoji: {
      talking: "😐😮",
      resting: "🥴"
    }
  },
  {
    text: "Signs point to yes.",
    emoji: {
      talking: "🙂😮",
      resting: "😀"
    }
  },
  {
    text: "Very doubtful.",
    emoji: {
      talking: "😣😫",
      resting: "😔"
    }
  },
  {
    text: "Without a doubt.",
    emoji: {
      talking: "😊😄",
      resting: "😍"
    }
  },
  {
    text: "Yes.",
    emoji: {
      talking: "😊😄",
      resting: "☺️"
    }
  },
  {
    text: "Yes – definitely.",
    emoji: {
      talking: "😊😄",
      resting: "😁"
    }
  },
  {
    text: "You may rely on it.",
    emoji: {
      talking: "🙂😮",
      resting: "😉"
    }
  }
];

const talkingAnimCallback = (emoji) => {
  emojiContainerInner.innerText = emoji.resting;
  setTimeout(() => {
    emojiContainer.removeEventListener("animationend", talkingAnimCallback);
    document.documentElement.classList.remove(talkingClassName);
    submitButton.disabled = false;
    userText.disabled = false;
  }, 200);
};

const getEmojiBubbleText = ({ text, emoji }) => {
  document.documentElement.classList.add(talkingClassName);

  emojiText.innerHTML = [...text]
    .map((letter, i) => `<span style='--i: ${i}'>${letter}</span>`)
    .join("");
  emojiText.setAttribute("aria-label", text);
  emojiContainerInner.innerText = emoji.talking;
  emojiContainer.style.setProperty(
    "--iteration-count",
    Math.floor(text.length / 2)
  );
  emojiContainer.addEventListener("animationend", () =>
    talkingAnimCallback(emoji)
  );
};

const handleQuestionSubmission = () => {
  userText.blur();
  submitButton.disabled = true;
  userText.disabled = true;
  getEmojiBubbleText(answers[Math.floor(Math.random() * answers.length)]);
};

const handleUserTextParentValue = () => {
  userText.parentNode.dataset.value = userText.value;
};

const init = () => {
  userText.value = "Ask a question...";
  handleUserTextParentValue();
  getEmojiBubbleText(initEmojiBubble);
  document.documentElement.classList.remove("hide");
};

userText.addEventListener("keydown", (e) => {
  if (userText.contentEditable && e.key === "Enter") {
    e.preventDefault();
    handleQuestionSubmission();
  }
});

userText.addEventListener("focus", (e) => userText.select());
userText.addEventListener("input", (e) => handleUserTextParentValue());

submitButton.addEventListener("click", () => {
  if (!submitButton.disabled) {
    handleQuestionSubmission();
  }
});

init();

</script>
</html>
