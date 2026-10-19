const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function updateToggle(theme) {
  const isDark = theme === 'dark';

  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', 'Dark mode');
  toggle.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#111713' : '#efe2c8');
}

function currentTheme() {
  return root.dataset.theme || (systemTheme.matches ? 'dark' : 'light');
}

updateToggle(currentTheme());

toggle.addEventListener('click', () => {
  const theme = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  updateToggle(theme);
});

systemTheme.addEventListener('change', (event) => {
  if (!localStorage.getItem('theme')) {
    updateToggle(event.matches ? 'dark' : 'light');
  }
});
