import { useEffect,  useState } from 'react';

export function useClipText(ids: string[]): boolean {
  const [shouldClipText, setShouldClipText] = useState(false);

  useEffect(() => {
    function shouldClipText(): void {
      let offsets: { top: number, bottom: number }[] = [];

      for (let id of ids) {
        const element = getElement(id);
        const elementTop = element ? element.offsetTop : 0;
        const elementBottom = element ? elementTop + element.offsetHeight : 0;

        offsets.push({ top: elementTop, bottom: elementBottom });
      }

      let clipText = false;

      for (let i = 0; i < offsets.length; i++) {
        if (window.pageYOffset + 40 > offsets[i].top && window.pageYOffset + 40 < offsets[i].bottom) {
          clipText = true;
        }
      }

      setShouldClipText(clipText);
    }

    document.addEventListener('scroll', shouldClipText);

    return function cleanupListener() {
      document.removeEventListener('scroll', shouldClipText);
    }
  });

  return shouldClipText;
}

function getElement(id: string): HTMLElement | null {
  let element = document.getElementById(id);

  if (element == null) {
    element = document.querySelector(id);
  }

  return element;
}
