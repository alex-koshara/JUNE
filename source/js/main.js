'use strict';

const step = 1;
const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('#next');
const paginationList = document.querySelector('.pagination');
const paginationBtns = paginationList.querySelectorAll('.pagination__btn');
 
// TODO: Сделать проверку из localStorage и подгружать форму старта, если уже заполнялись другие
const startCardPage = 1;
const state = {
  currentCardPage: startCardPage,
  prevCardPage: null,
  nextCardPage: null,
  acitveCard: 1,
  maxCardPage: cards.length
};

paginationList.addEventListener('click', (evt) => {
  if(evt.target.dataset.page) {
    // debugger;
    // FIXME: Какого-то Х** некорректно работает пагинация.
    let currentPage = evt.target.dataset.page; // 1,2...
    
    state.prevCardPage = state.currentCardPage;
    state.currentCardPage = currentPage;
    console.log(state)
    cards[state.prevCardPage - 1].classList.remove('is-active');
    cards[state.currentCardPage - 1].classList.add('is-active');

    // cards[state.currentCardPage].classList.remove('is-active');
    // cards[currentPage - 1].classList.add('is-active');
  }
})

nextBtn.addEventListener('click', () => {
  if (state.currentCardPage < state.maxCardPage) {
    paginationBtns[state.currentCardPage].classList.add('is-visible');
    state.prevCardPage = state.currentCardPage;
    // TODO: сделать здесь функцию!
    cards[state.prevCardPage - 1].classList.remove('is-active');
    cards[state.currentCardPage].classList.add('is-active');

    state.currentCardPage++;
  }
});



function setActiveCard () {
  
}

console.log('');

