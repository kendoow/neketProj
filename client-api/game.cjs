const axios = require("axios");
const host = "http://127.0.0.1:3000";

async function getGame(name) {
  try {
    const response = await axios.get(`${host}/game/${name}`);
    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
}

async function getAllGames() {
    try {
      const response = await axios.get(`${host}/all_games`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

getGame('dota');
// getAllGames();