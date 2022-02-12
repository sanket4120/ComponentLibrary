const navbarToggler = document.querySelector('#navbar-toggler');
navbarToggler.addEventListener('click', () => {
  const navbarMenu = document.querySelector('.navbar-menu');
  navbarMenu.classList.toggle('navbar-menu-visible');
});
