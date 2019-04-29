'use strict';

let userStorage = localStorage;
console.log(userStorage)

const step = 1;
const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('#next');
const paginationList = document.querySelector('.pagination');
const paginationBtns = paginationList.querySelectorAll('.pagination__btn');
const resultForm = document.querySelector('#resuld-form');
const titlesPage = document.querySelectorAll('.user-form__title');

// TODO: Сделать проверку из localStorage и подгружать форму старта, если уже заполнялись другие
const startCardPage = 0;
const state = {
  currentCardPage: startCardPage,
  prevCardPage: startCardPage,
  activePage: startCardPage,
  maxCardPage: cards.length - 1
};

paginationList.addEventListener('click', (evt) => {
  if (evt.target.dataset.page) {
    let currentPage = evt.target.dataset.page;

    state.activePage = currentPage;

    setActiveCard(state.activePage, state.prevCardPage)
    state.prevCardPage = state.activePage;

    if (evt.target.dataset.page == state.maxCardPage) {
      resultForm.innerHTML = showFinalResultInputs();
    }
  }
})

nextBtn.addEventListener('click', () => {
  if (state.currentCardPage < state.maxCardPage) {
    if (state.activePage == state.currentCardPage) {
      state.currentCardPage++
    }

    paginationBtns[state.currentCardPage].classList.add('is-visible');
    state.activePage = state.currentCardPage;

    setActiveCard(state.currentCardPage, state.prevCardPage)
    setDisabledPaginationBtn(state.currentCardPage, state.prevCardPage);

    state.prevCardPage = state.activePage;

    if (state.currentCardPage == state.maxCardPage) {
      resultForm.innerHTML = showFinalResultInputs();
    }
  } else {
    setActiveCard(state.currentCardPage, state.prevCardPage)
    resultForm.innerHTML = showFinalResultInputs();
    state.prevCardPage = state.currentCardPage;
  }
});

function setActiveCard(nextPage, prevPage) {
  cards[prevPage].classList.remove('is-active');
  cards[nextPage].classList.add('is-active');
}

function setDisabledPaginationBtn(nextDisabledPage, prevDisabledPage) {
  paginationBtns[prevDisabledPage].classList.remove('is-disabled');
  paginationBtns[nextDisabledPage].classList.add('is-disabled');
}

// input.js
const inputs = document.querySelectorAll('input');
const userForm = document.querySelector("#user-form");

if (userStorage.length) {
  let inputIndex = null;
  let storageKeys = Object.keys(userStorage);
  for (let i = 0; i < storageKeys.length; i++) {
    inputIndex = storageKeys[i].split('input')[1];
    if (inputs[i].type == 'text') {
      inputs[inputIndex].value = userStorage[storageKeys[i]];
    }

    if (inputs[inputIndex].type == 'checkbox') {
      inputs[inputIndex].checked = true;
    }

  }
}

const onInputFocus = function (i) {
  return function () {
    if (inputs[i].type == 'text' && !inputs[i].dataset.init) {
      inputs[i].setAttribute('init', inputs[i].value);
    }
  }
};

const onInputBlur = function (i) {
  return function () {
    groupFinalPage(inputs[i]);
    let inputType = inputs[i].type;
    let input = inputs[i];

    if (inputType == 'text') {
      input.setAttribute('final', input.value);
      input.value = input.getAttribute('final');
      saveLocalStorage(input, inputType, i);
    }

    if (inputType == 'checkbox') {
      saveLocalStorage(input, inputType, i);
    }
  }
}

function saveLocalStorage(input, type, index) {
  if (type == 'text') {
    localStorage['input' + index] = input.getAttribute('final');
  }

  if (type == 'checkbox') {
    if (input.checked) {
      localStorage.setItem('input' + index, input.checked)
    } else {
      localStorage.removeItem('input' + index);
    }
  }
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].onfocus = onInputFocus(i);
  inputs[i].onblur = onInputBlur(i);
}

function showFinalResultInputs() {
  let inputs = document.querySelectorAll('input');
  let finalInputsTemplate = ``;

  titlesPage.forEach((title) => {
    finalInputsTemplate += `<h2>${title.innerText}</h2>`;

    inputs.forEach((input) => {
      let inputValue = input.value;
      let inputLabel = input.previousSibling.textContent;

      if (input.getAttribute('page') == title.innerText.trim()) {
        finalInputsTemplate += `<div>`;

        if (input.type == 'text' && input.getAttribute('init') != input.getAttribute('final')) {
          finalInputsTemplate += `<b>${inputLabel}</b>: ${inputValue}`;
        }

        if (input.type == 'checkbox' && input.checked) {
          finalInputsTemplate += `- ${inputLabel}`;
        }

        if (input.type == 'radio' && input.checked) {
          finalInputsTemplate += `- ${inputLabel}`;
        }

        finalInputsTemplate += `</div>`;
      }
    })
  })

  return finalInputsTemplate;
}

function groupFinalPage(input) {
  input.setAttribute('page', titlesPage[state.activePage].innerText);
}