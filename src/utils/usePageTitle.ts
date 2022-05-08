import { useEffect } from 'react';

const defaultPostfix = ' - Kodeworks';

export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title + defaultPostfix;;
  }, [title]);
}
