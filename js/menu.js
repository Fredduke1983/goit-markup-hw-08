(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open__btn'),
    closeMenuBtn: document.querySelector('.menu-close__btn'),
    menu: document.querySelector('.data-menu'),
    overflowBody: document.querySelector('[data-body]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
    refs.overflowBody.classList.toggle('is-overflow');
  }
})();
