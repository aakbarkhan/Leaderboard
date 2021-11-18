import './style.css';
import sendScores from './api.js';

const submit = document.querySelector('.submit');
submit.addEventListener('click', sendScores);

const getData = async() => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k7JsreU3WssGQsLJM2G4/scores/'
 const data = await fetch(url);
 const result =  await data.json();
 const listItems  = document.querySelector('.name-scores');
 listItems.innerHTML = '';
 result.result.forEach((item) => {
    listItems.innerHTML += `
    <p>${item.user}: ${item.score}</p>
    `;    
})
document.querySelector('#name-input').value = '';
document.querySelector('#score-input').value = '';
}
getData();
const refreshBtn = document.querySelector('.btn');
refreshBtn.addEventListener('click', getData);
