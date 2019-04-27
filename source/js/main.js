'use strict';

const step = 1;
const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('#next');
const paginationList = document.querySelector('.pagination');
const paginationBtns = paginationList.querySelectorAll('.pagination__btn');

// TODO: Сделать проверку из localStorage и подгружать форму старта, если уже заполнялись другие
const startCardPage = 0;
const state = {
  currentCardPage: startCardPage,
  prevCardPage: startCardPage,
  nextCardPage: startCardPage,
  activePage: startCardPage,
  maxCardPage: cards.length -1
};

paginationList.addEventListener('click', (evt) => {
  if(evt.target.dataset.page) {
    let currentPage = evt.target.dataset.page;

    state.activePage = currentPage;

    setActiveCard(state.activePage, state.prevCardPage)
    state.prevCardPage = state.activePage;
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

    state.prevCardPage = state.activePage;
  } else {
    setActiveCard(state.currentCardPage, state.prevCardPage)

    state.prevCardPage = state.currentCardPage;
  }
});



function setActiveCard (nextPage, prevPage) {
  cards[prevPage].classList.remove('is-active');
  cards[nextPage].classList.add('is-active');
}

// TODO: Сделать функцию для дизейбла текущей пагинации.
function setDisabledPaginationBtn () {

}