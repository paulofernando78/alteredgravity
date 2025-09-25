import { play } from "./assets/images/svg-imports";
import { VFX } from "@vfx-js/core";

document.getElementById("play-audio").innerHTML = play;

const audio = new Audio("/assets/audio/audio.mp3");

const playButton = document.querySelector("#play-audio");
playButton.addEventListener("click", () => {
  audio.play()
  audio.loop = true
})

const title = document.querySelector("#title");
const vfx = new VFX();
vfx.add(title, { shader: "glitch", overflow: 100 });
