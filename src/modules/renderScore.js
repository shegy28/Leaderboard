import { name, score, leaderBoard } from './const.js';

let scoreArr = [];
const pushToLocal = () => {
  localStorage.setItem('leaderboard', JSON.stringify(scoreArr));
};

const addScore = () => {
  const user = {};
  user.name = name.value;
  user.score = score.value;
  scoreArr.push(user);
  pushToLocal();
};

const renderScore = () => {
  leaderBoard.innerHTML = '';
  scoreArr.forEach((user) => {
    const leader = `<li> ${user.name}: ${user.score}</li>`;
    leaderBoard.innerHTML += leader;
    name.value = '';
    score.value = '';
  });
};

const showList = () => {
  if (localStorage.getItem('leaderboard')) {
    scoreArr = JSON.parse(localStorage.getItem('leaderboard'));
  }
  renderScore();
};

export { renderScore, addScore, showList };