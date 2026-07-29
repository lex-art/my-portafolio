import { revealAll } from './reveal'

/**
 * Wires the scroll reveal to every section that has a list of peer blocks
 * worth staggering. Loaded once from the page, not per section, so the whole
 * page shares one observer set-up and the effect stays consistent.
 */

// Works: each row reveals its number, copy and figure in sequence.
revealAll('.feature')

// Experience: each timeline entry reveals its meta, copy and figure.
revealAll('.entry')

// The stat band: the four figures come in as a run.
revealAll('.stats-wrap')

// About: the heading cluster and the paragraphs.
revealAll('#title-about')
revealAll('#text-about')

// Contact close. It is the last section on the page, so the document cannot
// scroll far enough to push it out of the viewport — with the default reset
// of 0 it would play once and never re-arm. A higher threshold lets it reset
// as the user scrolls back up and away from the foot.
revealAll('.close', { resetAt: 0.5 })
