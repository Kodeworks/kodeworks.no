import { useEffect, useState } from 'react';

export function useClipText(objects: object[]): string {
  const [shouldClipText, setShouldClipText] = useState('');

  useEffect(() => {
    function shouldClipText(): void {
      let offsets: { top: number; bottom: number; colorMode: string; elementt: any }[] = [];

      for (let object of objects) {
        const element = getElement(object['id']);
        const elementTop = element ? element.offsetTop : 0;
        const elementBottom = element ? elementTop + element.offsetHeight : 0;

        offsets.push({
          top: elementTop,
          bottom: elementBottom,
          colorMode: object['colorMode'],
          elementt: element,
        });
      }
      let clipText = '';

      for (let i = 0; i < offsets.length; i++) {
        if (
          window.pageYOffset + 40 > offsets[i].top &&
          window.pageYOffset + 40 < offsets[i].bottom
        ) {
          clipText = offsets[i].colorMode;
        }
      }

      setShouldClipText(clipText);
    }

    document.addEventListener('scroll', shouldClipText);

    return function cleanupListener() {
      document.removeEventListener('scroll', shouldClipText);
    };
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
