export default function darkMode(id: string, handleDarkMode: any) {
  const element = document.getElementById(id);
  const elementTop = element ? element.offsetTop : 0;
  const elementBottom = element ? elementTop + element.offsetHeight : 0;

  if (window.pageYOffset + 40 > elementTop && window.pageYOffset + 40 < elementBottom) {
    handleDarkMode(true);
  } else {
    handleDarkMode(false);
  }
}
