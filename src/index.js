import './style.css';
import createGame from './components/POST.js';

const firstGame = 'Chess';
createGame(firstGame)
  .then((gameId) => {
    // eslint-disable-next-line no-console
    console.log(`Game created: ${gameId}`);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(`Error creating game: ${error}`);
  });