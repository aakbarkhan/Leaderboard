const sendScores = async ()=>{
    const playerName = document.querySelector('#name-input').value;
    const playerScore = document.querySelector('#score-input').value;
    const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k7JsreU3WssGQsLJM2G4/scores/',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user": playerName, "score": playerScore})
      });
      const content = await data.json();
      console.log(content);
}

export default sendScores;