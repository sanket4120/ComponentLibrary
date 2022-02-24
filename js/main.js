// Handle navbar toggle
const navbarTogglers = document.querySelectorAll('#navbar-toggler');
if (navbarTogglers) {
  navbarTogglers.forEach((navbarToggler) => {
    navbarToggler.addEventListener('click', () => {
      const targetSidebarId = navbarToggler.dataset.toggle;
      const navbarMenu = document.querySelector(targetSidebarId);
      navbarMenu.classList.toggle('translate-x-0');
    });
  });
}

//Handle modal close
const modalHandleButtons = document.querySelectorAll("[data-target='modal']");
if (modalHandleButtons) {
  modalHandleButtons.forEach((btn) => {
    btn.addEventListener('click', showModal);
  });
}

function showModal(e) {
  const targetModalId = e.target.dataset.toggle;
  const targetModal = document.querySelector(targetModalId);
  targetModal.classList.remove('hide');
  document.body.style.overflowY = 'hidden';
  const closeTargetModalButtons = document.querySelectorAll(
    `${targetModalId} [data-dismiss=modal]`
  );
  closeTargetModalButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      targetModal.classList.add('hide');
      document.body.style.overflowY = 'auto';
    });
  });
}
