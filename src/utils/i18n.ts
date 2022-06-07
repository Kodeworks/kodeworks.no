import { Dictionary, DictionaryKey } from '../types';

export function i18n(key: string, dictionary: Dictionary) {
  return Object.keys(dictionary).reduce((keySet: DictionaryKey, locale: string) => {
    keySet[locale] = dictionary[locale as keyof typeof dictionary][key];
    return keySet;
  }, {});
}
