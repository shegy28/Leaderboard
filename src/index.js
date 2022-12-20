import './style.css';
import { submit, name, score} from './modules/const.js';
import { addScore, renderScore, showList } from './modules/renderScore.js';

window.addEventListener('load', () => {
  showList();
});

submit.addEventListener('click', (e) => {
  if(name.value === '' || score.value === '') {
    e.preventDefault();
    name.placeholder = "Field cant be empty";
    score.placeholder  = "Field cant be empty";
  }else{
    addScore();
    renderScore();
  }

})

 
