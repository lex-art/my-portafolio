/**
 * Structural site data — everything that is NOT copy.
 *
 * Links, images and metric values are identical across locales, so they live
 * here once; the translatable strings live in src/i18n/locales/<lang>/*.json
 * and are looked up by the `key` on each entry.
 */

const base = import.meta.env.BASE_URL;

export const social = {
  email: 'mailto:ochanaxo@gmail.com',
  github: 'https://github.com/lex-art',
  linkedin: 'https://www.linkedin.com/in/oscar-chanax/',
  instagram: 'https://www.instagram.com/this.al3x',
} as const;

export const metrics = [
  { key: 'experience', value: 6 },
  { key: 'projects', value: 14 },
  { key: 'contributions', value: 334 },
  { key: 'technologies', value: 15 },
] as const;

export const works = [
  {
    key: 'together',
    image: `${base}img/profile.webp`,
    link: null,
  },
  {
    key: 'success',
    image: `${base}img/projects/project-tb.webp`,
    link: 'https://tikalbox.app',
  },
  {
    key: 'current',
    image: `${base}img/projects/714_1x_shots_so.webp`,
    link: 'https://zigi.app',
  },
] as const;

export const experience = [
  {
    key: 'zigiBackend',
    link: 'https://zigi.app',
    image: `${base}img/projects/580_2x_shots_so.webp`,
  },
  {
    key: 'zigiFrontend',
    link: 'https://zigi.app',
    image: `${base}img/projects/714_1x_shots_so.webp`,
  },
  {
    key: 'ciancoders',
    link: 'https://ciancoders.com',
    image: `${base}img/projects/695_2x_shots_so.webp`,
  },
  {
    key: 'freelance',
    link: 'https://tikalbox.app',
    image: `${base}img/projects/600_2x_shots_so-1.webp`,
  },
] as const;
