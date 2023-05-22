const createGame = async (game) => {
  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: game }),
    });

    const data = await res.json();
    return data.result.split('ID: ')[1];
  } catch (error) {
    throw new Error('Failed to create game');
  }
};

export default createGame;