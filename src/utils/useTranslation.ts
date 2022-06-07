import { NextRouter, useRouter } from 'next/router';

import { Dictionary } from '../types';
import { i18n } from './i18n';

export function useTranslation(dictionary: Dictionary) {
  const router = useRouter();
  const locale = getLocale(router);

  console.log(i18n('projects', dictionary));

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

function getLocale(router: NextRouter): string | undefined {
  const { locales, defaultLocale, ...nextRouter } = router;
  const locale = (locales ?? []).includes(nextRouter.locale || '')
    ? nextRouter.locale
    : defaultLocale;

  return locale;
}
