(() => {
  const mobileMenu = document.querySelector('.m-burger');
  const openMenuBtn = document.querySelector('.menu-burger-btn');
  const body = document.querySelector('body');
  const mobileLinkRef = document.querySelector('#menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  mobileLinkRef.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;

    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
  mobileLinkRef.addEventListener("click", () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
    body.classList.remove('no-scroll');
    openMenuBtn.setAttribute('aria-expanded', false)
  });
})();