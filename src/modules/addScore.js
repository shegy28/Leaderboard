const addApiScore = (user) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IxtJwxspqZwRLJsMAjxT/scores/', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json)); 
}
export default addApiScore;

