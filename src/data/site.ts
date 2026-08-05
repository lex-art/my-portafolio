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

/**
 * A row in the Works section. Entries marked `variant: 'project'` are real
 * shipped products: they carry a second body paragraph (the technical read,
 * under the `.tech` key) and a stack tag list. The plain entries render as
 * before — title, body, optional link.
 *
 * `tags` holds technology names, which are the same in every locale and so
 * live here rather than in the translation files.
 *
 * The keys are spelled out rather than left as `string` because Works.astro
 * builds its lookup keys as `home.works.${key}.*`; that template only
 * typechecks while the key stays a literal union. Projects carrying a process
 * note are a separate union member, so asking for `.process` is only possible
 * on the keys that actually have that string in the locale files.
 */
type ProjectKey = 'tikalbox' | 'pos' | 'lyosell';
type ProcessKey = Extract<ProjectKey, 'pos' | 'lyosell'>;

type ProjectFields = {
  image: string;
  link: string;
  variant: 'project';
  tags: readonly string[];
};

type WorkItem =
  | {
      key: 'current';
      image: string;
      link: string | null;
      variant?: undefined;
    }
  | ({ key: Exclude<ProjectKey, ProcessKey>; hasProcess?: false } & ProjectFields)
  | ({ key: ProcessKey; hasProcess: true } & ProjectFields);

export const works: readonly WorkItem[] = [
  {
    key: 'tikalbox',
    image: `${base}img/projects/project-tb.webp`,
    link: 'https://tikalbox.app',
    variant: 'project',
    tags: ['NestJS', 'React', 'MySQL', 'TypeORM', 'Stripe', 'WhatsApp API', 'Grafana', 'Terraform'],
  },
  {
    key: 'pos',
    image: `${base}img/projects/project-pos_system.webp`,
    link: 'https://pos-system.alexander-dev.com',
    variant: 'project',
    tags: [
      'Next.js 16',
      'NestJS',
      'CQRS',
      'PostgreSQL',
      'Better Auth',
      'Tailwind 4',
      'Recurrente',
      'AI-assisted',
    ],
    hasProcess: true,
  },
  {
    key: 'lyosell',
    image: `${base}img/projects/project-lyosell.webp`,
    link: 'https://lyosell.alexander-dev.com',
    variant: 'project',
    tags: [
      'Vendure',
      'Next.js 16',
      'GraphQL',
      'PostgreSQL',
      'Multi-tenant',
      'Recurrente',
      'Caddy',
      'AI-assisted',
    ],
    hasProcess: true,
  },
  {
    key: 'current',
    image: `${base}img/projects/714_1x_shots_so.webp`,
    link: 'https://zigi.app',
  },
];

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
