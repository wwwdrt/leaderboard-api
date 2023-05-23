const submitScore = async (gameId, name, score) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

  const data = {
    user: name,
    score: parseInt(score, 10),
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit score');
    }
  } catch (error) {
    throw new Error('Failed to submit score');
  }
};

export default submitScore;
