const button = document.querySelector('[data-button="header-menu"]');
const overlay = document.querySelector('.page-header__overlay');
const body = document.querySelector('body');

// @mixin getColor($color) {
//   background-color: $color;
// }

function getMessage() {
  // nav.style.display = 'block';
  overlay.classList.toggle('menu-active');
  if (overlay.classList.contains('menu-active')) {
    body.style.overflow = 'hidden';
  } else body.style.overflow = 'auto';
}

button.addEventListener('click', getMessage);
// button.addEventListener('focus', () => console.log('focus'));
// button.addEventListener('blur', () => console.log('blur'));
