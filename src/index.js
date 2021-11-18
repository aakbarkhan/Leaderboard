import './style.css';
import sendScores from './api.js';

const submit = document.querySelector('.submit');
submit.addEventListener('click', sendScores);

const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FxX4jXjzFQDx4hE2gLhe/scores/';
  const data = await fetch(url);
  const result = await data.json();
  const listItems = document.querySelector('.name-scores');
  listItems.innerHTML = '';
  result.result.forEach((item) => {
    listItems.innerHTML += `
    <p>${item.user}: ${item.score}</p>
    `;
  });
};
getData();
const refreshBtn = document.querySelector('.btn');
refreshBtn.addEventListener('click', getData);
