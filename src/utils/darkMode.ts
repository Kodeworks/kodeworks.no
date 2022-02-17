export default function darkMode(handleDarkMode: any, ids: Array<string>) {
  let offsets: { top: number, bottom: number }[] = [];

  for (let id of ids) {
    const element = getElement(id);
    const elementTop = element ? element.offsetTop : 0;
    const elementBottom = element ? elementTop + element.offsetHeight : 0;

    offsets.push({ top: elementTop, bottom: elementBottom });
  }

  let isHit = false;

  for (let offset of offsets) {
    if (window.pageYOffset + 40 > offset.top && window.pageYOffset + 40 < offset.bottom) {
      isHit = true;
    }
  }

  handleDarkMode(isHit);
}

function getElement(id: string) {
  let element = document.getElementById(id);

  if (element == null) {
    element = document.querySelector(id);
  }

  return element;
}
