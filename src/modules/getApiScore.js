const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IxtJwxspqZwRLJsMAjxT/scores/');
  const results = await response.json();
  const scoreList = results.result;
  return scoreList;
};

export default getScore;