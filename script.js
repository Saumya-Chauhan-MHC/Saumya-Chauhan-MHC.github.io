/*
 * JavaScript for Saumya Chauhan’s research website.
 * Handles dark‑mode toggling with localStorage persistence and
 * responsive navigation interactions. When the page loads we
 * restore the user’s preferred theme (light or dark) and
 * allow them to toggle via the moon/sun button. On small
 * screens the navigation menu collapses into a hamburger icon
 * that can be expanded or collapsed.
 */

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Restore theme from localStorage if set
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    // change icon to sun when dark mode is active
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  // Toggle dark/light mode
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });

  // Responsive navigation toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close mobile menu after clicking a link
  navMenu.addEventListener('click', (event) => {
    // Only close if clicked element is an anchor
    if (event.target.tagName.toLowerCase() === 'a' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});