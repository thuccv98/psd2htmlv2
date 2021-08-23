function handleToggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.header-menu');
  if (!menuToggle || !menu) return;
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('is-active');
  });
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
      menu.classList.toggle('is-active');
    }
  });
}
handleToggleMenu();
