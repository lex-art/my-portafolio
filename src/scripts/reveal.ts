/**
 * Scroll reveal, Nocturne-tonal: a short fade and a small vertical settle,
 * staggered across an element's children. No scale, no rotation — the system
 * reads as composed, so motion stays under the threshold of noticing.
 *
 * The reveal REPEATS: an element re-hides once it has fully left the
 * viewport and plays again on its next entry, so the animation runs every
 * time the user scrolls past it in either direction.
 *
 * Interpolation is done by CSS transitions rather than by a JS animation
 * library. A library has to read the element's current value when it starts,
 * and on a re-entry the hidden state is written only milliseconds earlier —
 * it would read the already-final value and snap straight to it. A CSS
 * transition is driven by the browser off the committed style, so the
 * repeat animates reliably. Measured: with the library the re-entry produced
 * 0 intermediate frames out of 168.
 *
 * The hidden state is only ever applied by this script, never by the
 * stylesheet: if the bundle fails to load, the content is already visible
 * rather than stranded at opacity 0.
 */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')

const DISTANCE = 8 // px — a settle, not a slide
const DURATION = 1500 // ms
const STAGGER = 160 // ms between children

/** Puts the children in the pre-reveal state, with no transition. */
function stage(children: HTMLElement[]) {
  children.forEach((child) => {
    child.style.transition = 'none'
    child.style.opacity = '0'
    child.style.transform = `translateY(${DISTANCE}px)`
  })
  // Commit the hidden state now, while transitions are still off, so the
  // reset itself never animates.
  void children[0]?.offsetHeight
}

/** Fires the staggered reveal. */
function play(children: HTMLElement[], stagger: number) {
  // Force a style flush so the browser commits the staged values before the
  // transition is armed — without this the two happen in one frame and the
  // element jumps straight to the end.
  void children[0]?.offsetHeight

  children.forEach((child, index) => {
    child.style.transition =
      `opacity ${DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) ${index * stagger}ms, ` +
      `transform ${DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) ${index * stagger}ms`
    child.style.opacity = '1'
    child.style.transform = 'translateY(0px)'
  })
}

/** Clears every trace of the effect, leaving the content plainly visible. */
function show(children: HTMLElement[]) {
  children.forEach((child) => {
    child.style.transition = ''
    child.style.opacity = ''
    child.style.transform = ''
  })
}

export function revealChildren(
  element: HTMLElement,
  {
    staggerChildren = STAGGER,
    resetAt = 0,
  }: { staggerChildren?: number; resetAt?: number } = {}
) {
  const children = Array.from(element.children) as HTMLElement[]
  if (children.length === 0) return

  if (REDUCED.matches) return

  const box = element.getBoundingClientRect()
  const inViewAtSetup = box.top < window.innerHeight && box.bottom > 0

  // Anything already on screen stays as it is; staging it here would blank
  // content the user is currently reading. It joins the cycle once it has
  // left the viewport for the first time.
  if (!inViewAtSetup) stage(children)

  let visible = inViewAtSetup

  // Play must sit strictly above the reset point, or a ratio between the two
  // would neither play nor re-arm and the section would sit staged.
  const PLAY_AT = Math.max(0.15, resetAt + 0.15)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio

        if (!visible) {
          // Enough of the element on screen to be worth playing.
          if (entry.isIntersecting && ratio >= PLAY_AT) {
            visible = true
            play(children, staggerChildren)
          }
          return
        }

        // Re-arm once the element is clear enough of the viewport that the
        // reset cannot be seen. resetAt is 0 for most sections (fully out),
        // but the last section on the page can never leave the viewport —
        // it gets a ratio above 0 so it still re-arms as it scrolls away.
        if (ratio <= resetAt) {
          visible = false
          stage(children)
        }
      })
    },
    { threshold: [0, resetAt, PLAY_AT, 0.5].filter((v, i, a) => a.indexOf(v) === i).sort() }
  )

  observer.observe(element)

  // Safety net, start-up only: if the observer never fired and the element is
  // sitting staged while on screen, drop the hidden state rather than leave
  // content invisible. Once the cycle is running the observer is the
  // authority, so this does not need to keep polling.
  window.setTimeout(() => {
    if (visible || children[0]?.style.opacity !== '0') return
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      visible = true
      show(children)
    }
  }, 3000)
}

/** Reveal every element matching a selector, if present. */
export function revealAll(
  selector: string,
  options?: { staggerChildren?: number; resetAt?: number }
) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    revealChildren(element, options)
  })
}
