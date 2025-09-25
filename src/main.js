import { play, playDisabled } from "./assets/images/svg-imports";
import { VFX } from "@vfx-js/core";

document.getElementById("play-audio").innerHTML = playDisabled;

const audio = new Audio("/assets/audio/audio.mp3");
audio.loop = true;

const playButton = document.querySelector("#play-audio");
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      playButton.innerHTML = play;
    });
  } else {
    audio.pause();
    playButton.innerHTML = playDisabled;
  }
});

const title = document.querySelector("#title");
const vfx = new VFX();
vfx.add(title, { shader: "glitch", overflow: 100 });
