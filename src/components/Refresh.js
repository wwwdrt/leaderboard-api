const refreshScores = async (gameId) => {
  try {
    const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    const data = await res.json();

    const scoresElem = document.getElementById('scores');
    scoresElem.innerHTML = '';

    const scores = data.result.slice(0, 5);
    scores.sort((a, b) => b.score - a.score);

    scores.forEach((score) => {
      const li = document.createElement('li');
      li.textContent = `Player: ${score.user} | Score: ${score.score}`;
      scoresElem.appendChild(li);
    });
  } catch (error) {
    throw new Error('Failed to refresh scores.');
  }
};

export default refreshScores;
