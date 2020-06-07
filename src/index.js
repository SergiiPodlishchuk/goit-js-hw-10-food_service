import menu from './menu.json';
import menuItemFeedTemplate from './templates/menu-item.hbs';
import './styles.css';

const menuJs = document.querySelector('.js-menu');

function buildMenuFeed(MenuFeed) {
  const markup = MenuFeed.map(item => menuItemFeedTemplate(item)).join('');
  menuJs.insertAdjacentHTML('beforeend', markup);
}

buildMenuFeed(menu);

// ===============================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// ==================================

const inputSwitchChange = document.querySelector('.js-switch-input');
inputSwitchChange.addEventListener('change', changeThemeFunc);

const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);

function changeThemeFunc(event) {
  body.classList.toggle(Theme.DARK);

  if (body.classList.contains(Theme.DARK)) {
    localStorage.setItem('Theme', Theme.DARK);
    localStorage.setItem('checked', true);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    localStorage.removeItem('Theme');
    localStorage.removeItem('checked');
  }
}

if (localStorage.getItem('checked')) {
  inputSwitchChange.checked = localStorage.getItem('checked');
  body.classList.add(localStorage.getItem('Theme'));
  body.classList.remove(Theme.LIGHT);
}
