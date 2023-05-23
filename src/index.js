import './style.css';
import createGame from './components/Create.js';
import refreshScores from './components/Refresh.js';
import submitScore from './components/Submit.js';

const firstGame = 'Chess';
let gameId;

createGame(firstGame)
  .then((id) => {
    gameId = id;
    // eslint-disable-next-line no-console
    console.log(`Game created: ${gameId}`);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(`Error creating game: ${error}`);
  });

const refreshBtn = document.getElementById('refresh-btn');
const scoreForm = document.getElementById('score-form');

refreshBtn.addEventListener('click', async () => {
  try {
    await refreshScores(gameId);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error refreshing scores: ${error}`);
  }
});

scoreForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (name === '' || score === '') {
    // eslint-disable-next-line no-console
    console.error('Name and score are required');
    return;
  }

  try {
    await submitScore(gameId, name, score);
    nameInput.value = '';
    scoreInput.value = '';
    // eslint-disable-next-line no-console
    console.log('Score submitted successfully');
    await refreshScores(gameId);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error submitting score: ${error}`);
  }
});
