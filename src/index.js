import './style.css';
import {
  submit, name, score, refresh,
} from './modules/const.js';
import {
  addScore, refreshScore, renderScore, showList,
} from './modules/renderScore.js';

window.addEventListener('load', () => {
  refreshScore();
});

submit.addEventListener('click', (e) => {
  if (name.value === '' || score.value === '') {
    e.preventDefault();
    name.placeholder = 'Field cant be empty';
    score.placeholder = 'Field cant be empty';
  } else {
    addScore();
    
  }
});

// ID: IxtJwxspqZwRLJsMAjxT
refresh.addEventListener('click', () => {
  refreshScore();
});
