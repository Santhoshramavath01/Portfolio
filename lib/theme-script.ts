// Inlined into <head> before hydration to prevent a flash of the wrong theme.
// Reads localStorage first, falls back to system preference, defaults to dark.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored;
    if (!theme) {
      var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      theme = prefersLight ? 'light' : 'dark';
    }
    var root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    root.style.colorScheme = theme;
  } catch (e) {}
})();
`;
