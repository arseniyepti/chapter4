"use strict";

let brandsButton = document.querySelector('#brands-button');
let brandsHidden = document.querySelector('.brands__images-wrap');

let count = function () {
  let result;
  let arr = document.querySelectorAll('.brands__images-item');
  if (screen.width > 1119) {
    result = arr.length - 8;
  } else {
    result = arr.length - 6;
  }
  return brandsButton.textContent = 'Показать все' + `(${result})`;
}

let count1 = count();

brandsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  brandsHidden.classList.toggle('brands__images-wrap-hidden');
  let brandsButtonClassName = brandsHidden.className;
  if (brandsButtonClassName !== 'brands__images - wrap brands__images - wrap - hidden') {
    brandsButton.textContent = 'Скрыть';
  } else { count1; }
})
