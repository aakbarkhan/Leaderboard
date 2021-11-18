const sendScores = async () => {
  const playerName = document.querySelector('#name-input').value;
  const playerScore = document.querySelector('#score-input').value;
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FxX4jXjzFQDx4hE2gLhe/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: playerName, score: playerScore }),
  });
  const content = await data.json();
  document.querySelector('#name-input').value = '';
  document.querySelector('#score-input').value = '';
  return content;
};
export default sendScores;