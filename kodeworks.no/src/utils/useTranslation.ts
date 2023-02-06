import { NextRouter, useRouter } from 'next/router';

import { Dictionary, DictText } from '../types';

export function useTranslation(dictionary: Dictionary) {
  const router = useRouter();
  const locale = getLocale(router);

  function translate(term: string, ...args: any[]): string {
    let translation = dictionary[locale!][term];

    args.forEach((arg, i) => {
      translation = translation.replaceAll(`%${i + 1}`, arg);
    });

    return Boolean(translation) ? translation : term;
  }

  return {
    translate: translate,
    t: translate,
  };
}

export function getLocale(router: NextRouter): string | undefined {
  const { locales, defaultLocale, ...nextRouter } = router;
  const locale = (locales ?? []).includes(nextRouter.locale || '')
    ? nextRouter.locale
    : defaultLocale;

  return locale;
}

export function fmt(txt: DictText, loc: string): string {
  return typeof txt === 'string' ? (txt as string) : txt[loc];
}
