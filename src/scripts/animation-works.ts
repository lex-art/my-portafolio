import { animate, scroll } from "motion"
/* scroll((progress: number) => console.log(progress))
 */

export function animateTextFade(element: HTMLElement, { direction, staggerChildren = 0.1 }: {
  direction: "up" | "down";
  staggerChildren?: number;
}) {
  const FADE_DOWN = {
    show: { opacity: 1, transform: "translateY(0)" },
    hidden: { opacity: 0, transform: `translateY(${direction === "down" ? "-18px" : "18px"})` },
  };

  // Divide el texto de los hijos en spans para animarlos individualmente
  const children = Array.from(element.children);

  // Aplica los estilos iniciales
  children.forEach((child) => {
    Object.assign((child as HTMLElement)?.style, FADE_DOWN.hidden);
  });

  // Observador para detectar si el elemento está en la vista
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Anima cada hijo con un retraso escalonado
          children.forEach((child, index) => {
            animate(child, FADE_DOWN.show as any, {
              delay: index * staggerChildren,
              duration: 1.5,
              easing: "ease-out",
            } as any);
          });
          observer.disconnect(); // Deja de observar una vez que se ha animado
        }
      });
    },
    { threshold: 0.1 } // Detecta cuando el 10% del elemento está visible
  );

  observer.observe(element);
}

// Ejemplo de uso:
const h1 = document.querySelector("h1"); // Selecciona tu h2 existente
if (h1) {
 
  animateTextFade(h1, { direction: "down", staggerChildren: 0.2 });
}
const image0 = document.getElementById("image-works-0")
const image = document.getElementById("image-works-1")
const image2 = document.getElementById("image-works-2")

if(image0) {
  //animate(image, { opacity: [0, 1], scale: [0.5, 1] }, { duration: 1.5, easing: "ease-out" })
  animateTextFade(image0, { direction: "down", staggerChildren: 0.2 });
}

if(image) {
  animateTextFade(image, { direction: "down", staggerChildren: 0.2 });
}

if(image2) {
  animateTextFade(image2, { direction: "down", staggerChildren: 0.2 });
}