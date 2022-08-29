import { useEffect } from 'react';
import { DictText } from '../types';

const defaultPostfix = ' - KodeWorks';

export function usePageTitle(title: DictText): void {
  useEffect(() => {
    document.title = title + defaultPostfix;
  }, [title]);
}
