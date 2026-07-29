import { animate } from 'motion'

/**
 * Count the stat figures up when the band scrolls into view.
 *
 * The target lives on data-value so the markup can ship the final number —
 * the figure is correct with JavaScript off, and correct again if the
 * animation is skipped for reduced motion.
 */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')

const elements = document.querySelectorAll<HTMLElement>('.value-counter')

elements.forEach((element) => {
  const target = Number(element.dataset.value ?? '0')
  if (!Number.isFinite(target) || REDUCED.matches) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        animate(0, target, {
          duration: 1.2,
          ease: 'easeOut',
          onUpdate: (latest: number) => {
            element.textContent = `+${Math.round(latest)}`
          },
        })

        observer.disconnect()
      })
    },
    { threshold: 0.4 }
  )

  observer.observe(element)
})
