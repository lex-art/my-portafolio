import { animate } from "motion";
import { animateTextFade } from "./animation-scroll";

const textDescription = document.getElementById("text-about");
const title = document.getElementById("title-about");
const subtitle = document.getElementById("subtitle-about");
if (textDescription) {
  animateTextFade(textDescription, { direction: "down", 
    staggerChildren: 0.2 });
}
if (title) {
  animateTextFade(title, { direction: "down", staggerChildren: 0.2 });
}
if (subtitle) {
  animateTextFade(subtitle, { direction: "down", staggerChildren: 0.2 });
}