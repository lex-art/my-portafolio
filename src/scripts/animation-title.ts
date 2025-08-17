import { animate } from "motion";
import { animateTextFade } from "./animation-works";

animate(
  "#box",
  { scale: [0.4, 1], x: [-10, 0], rotate: [0, -3] },
  { ease: "circInOut", duration: 1.2 }
);

/* animate("#main-title", 
  { scale: [1.2, 1] }, 
  { ease: "circInOut", duration: 1 }
); */

const animationValue = {
  x: [0,  25, 0],
  y: [0,  15,  0],
}

// const isDark = localStorage.getItem('theme') === 'dark';


/* const color = isDark ? "#a5f3fc" : "#229379";
const colorAnimation = {
  color: ["rgba(255, 255, 255, 0)", color],
}

animate("#main-title", colorAnimation , { ease:"easeInOut", duration: 2 }); 
 */

// Ejemplo de uso:
const title1 = document.getElementById("works-together");
const title2 = document.getElementById("works-together-2");
const title3 = document.getElementById("works-together-3");


// Envolver el texto si es necesario
function wrapTextInSpans(element: HTMLElement): void {
  const words = element.textContent?.split(" ") || [];
  element.innerHTML = "";
  words.forEach((word) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    element.appendChild(span);
  });
}

function setupNavigation(): void {
  const navLinks = document.querySelectorAll("a[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Obtener la sección a la que apunta el enlace
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        // Volver a envolver el texto (opcional) y animar
        wrapTextInSpans(targetElement);
        animateTextFade(targetElement, { direction: "down", staggerChildren: 0.2 });

        // Desplazarse a la sección
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

if (title1) {
  animateTextFade(title1, { direction: "down", staggerChildren: 0.2 });
}

if (title2) {
  animateTextFade(title2, { direction: "down", staggerChildren: 0.2 });
}
 
if(title3) {
  animateTextFade(title3, { direction: "down", staggerChildren: 0.2 });
}
