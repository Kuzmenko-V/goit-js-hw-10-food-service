//импорты 
import cardsTpl from './js/cards.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const cards = cardsTpl(menu);
const refs = {
    eUl: document.querySelector('.js-menu'),
    eSwith: document.querySelector('#theme-switch-toggle'),
    eBody: document.querySelector('body'),
};
refs.eUl.insertAdjacentHTML('beforeend', cards);
function checkTheme() {
    if (localStorage.getItem('Theme') === Theme.DARK) {
        refs.eSwith.checked = true;
        refs.eBody.classList.add(Theme.DARK)
        return;
    }
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.eBody.classList.add(Theme.LIGHT)
};
checkTheme();
refs.eSwith.addEventListener('change', chengeTheme);
function chengeTheme() {
    refs.eBody.classList.toggle(Theme.LIGHT);
    refs.eBody.classList.toggle(Theme.DARK);
    if (refs.eBody.classList.contains(Theme.DARK)) {
        localStorage.setItem('Theme', Theme.DARK);
        return
    }
    if (refs.eBody.classList.contains(Theme.LIGHT)) {
        localStorage.setItem('Theme', Theme.LIGHT);
        return
    }
 }