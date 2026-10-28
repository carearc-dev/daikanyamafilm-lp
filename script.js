(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  const backdrop = document.querySelector('.menu-backdrop');
  const menuLinks = menu.querySelectorAll('a');

  if (!toggle || !menu || !backdrop) return;

  const setOpen = open => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    menu.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menu.toggleAttribute('inert', !open);
    document.body.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  backdrop.addEventListener('click', () => setOpen(false));
  menuLinks.forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
