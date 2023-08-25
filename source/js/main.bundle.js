/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
////////////// кнопка КОНТАКТЫ ///////////////////

const contactsSection = document.querySelector('.footer');
const contactsButton = document.querySelector('.intro-hobby');

scrollToContacts = () => {
  contactsSection.scrollIntoView({ behavior: "smooth" });
}

contactsButton.addEventListener('click', scrollToContacts);

////////////// кнопка ВВЕРХ /////////////////////

const UpButton = {
  VISIBLE_SCROLL_HEIGHT: 100,
  VISIBLE_CURSOR: "pointer",
  VISIBLE_OPACITY: 1,
  HIDEN_CURSOR: "auto",
  HIDEN_OPACITY: 0
};

const upButton = document.querySelector('.button--up');
const bodyElement = document.querySelector('.body');

// скрытие кнопки ВВЕРХ
hideUpButton = () => {
  if (document.documentElement.scrollTop > UpButton.VISIBLE_SCROLL_HEIGHT) {
    upButton.style.opacity = UpButton.VISIBLE_OPACITY;
    upButton.style.cursor = UpButton.VISIBLE_CURSOR;
  } else {
    upButton.style.opacity = UpButton.HIDEN_OPACITY;
    upButton.style.cursor = UpButton.HIDEN_CURSOR;
  }
}

window.onscroll = () => {
  hideUpButton();
}

// прокрутка до верху по клику кнопки ВВЕРХ
scrollToTop = () => {
  bodyElement.scrollIntoView({ behavior: "smooth" });
}

upButton.addEventListener('click', scrollToTop);

// реакция на мышь
upButton.addEventListener('mouseenter', () => {
  if (document.documentElement.scrollTop > UpButton.VISIBLE_SCROLL_HEIGHT){
  upButton.style.opacity = 0.7;
  }
});

upButton.addEventListener('mouseleave', () => {
  if (document.documentElement.scrollTop > UpButton.VISIBLE_SCROLL_HEIGHT){
  upButton.style.opacity = 1;
  }
});

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map