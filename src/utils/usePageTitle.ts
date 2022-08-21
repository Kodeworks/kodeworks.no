import { useEffect } from 'react';

const defaultPostfix = ' - KodeWorks';

export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title + defaultPostfix;;
  }, [title]);
}
