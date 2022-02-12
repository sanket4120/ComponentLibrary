// Handle navbar toggle
const navbarToggler = document.querySelector('#navbar-toggler');
if (navbarToggler) {
  navbarToggler.addEventListener('click', () => {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('navbar-menu-visible');
  });
}
