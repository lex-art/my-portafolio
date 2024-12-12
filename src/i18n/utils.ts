import { ui, defaultLang, showDefaultLang } from './ui';

type NestedKeys<T> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K}` | `${K}.${NestedKeys<T[K]>}`
    : `${K}`;
}[keyof T & (string | number)];
export const supportedLangs = Object.keys(ui) as (keyof typeof ui)[];


/* export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
} */

  export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (supportedLangs.includes(lang as keyof typeof ui)) {
      return lang as keyof typeof ui;
    }
    return defaultLang;
  }


/* export function useTranslations(lang: keyof typeof ui) {
  return function t(key: NestedKeys<typeof ui[typeof defaultLang]>): string {
    const translation = getNestedValue(ui[lang], key) ?? getNestedValue(ui[defaultLang], key);
    return typeof translation === 'string' ? translation : key;
  };
} */

  export function useTranslations(lang: keyof typeof ui) {
    return function t(key: NestedKeys<typeof ui[typeof defaultLang]>): string {
      const translation = getNestedValue(ui[lang], key) 
                          ?? getNestedValue(ui[defaultLang], key);
      return typeof translation === 'string' ? translation : key;
    };
  }

function getNestedValue(obj: any, key: string) {
  return key.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
} 


export function useI18Translations(url: URL) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const navigate = useTranslatedPath(lang);
  return { t, navigate, lang };

}  

