import { spring, animate } from 'motion'

const elements = document.querySelectorAll('.value-counter')

 elements.forEach((element) => {
  const generator = spring({ keyframes: [25, 75], stiffness: 100, duration: 0.5, bounce:0.3,  })
  let isDone = false
  let time = 0
  const sampleDuration = 10 // ms

  while (!isDone) {
    const { done } = generator.next(time)
    const content = element.textContent || "0"; // Obtener el valor del texto
    const finalValue = parseInt(content, 10); // Convertir el valor a número
    const duration = 1; 

    animate(
      0, // Valor inicial
      finalValue, // Valor final
      {
        duration, // Duración de la animación
        stiffness: 300, // Efecto spring
        damping: 20, // Efecto spring
        onUpdate: (latest) => {
          element.textContent = `+${Math.round(latest)}`; // Actualizar el texto
        },
      }
    );

    time += sampleDuration
  
    if (done) isDone = true
  }
})

 