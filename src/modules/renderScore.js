import addApiScore from './addScore.js';
import { name, score, leaderBoard } from './const.js';
import getScore from './getApiScore.js';

let scoreArr = [];

const addScore = () => {
  const users = {};
  users.user = name.value;
  users.score = score.value;
  scoreArr.push(users);
  addApiScore(users);
  name.value = '';
  score.value = '';
};

const renderScore = () => {
  leaderBoard.innerHTML = '';
  scoreArr.forEach((person) => {
    const leader = `<li> ${person.user}: ${person.score}</li>`;
    leaderBoard.innerHTML += leader;
    name.value = '';
    score.value = '';
  });
};

const refreshScore = async () => {
  const arr = await getScore();
  scoreArr = await arr;
  renderScore();
};

export {
  renderScore, addScore, refreshScore,
};