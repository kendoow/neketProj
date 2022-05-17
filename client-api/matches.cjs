const axios = require("axios");
const host = "http://127.0.0.1:3000";

async function createMatch(team1_name, team2_name, date, time, info, 
    team1_score, team2_score, game_name, live_link) {   
    try {
        let matchCount = await getMatchesCount();
        const response = await axios.post(`${host}/new_match`, {
            id: matchCount,
            team1_name: team1_name,
            team2_name: team2_name,
            date: date,
            time: time,
            info: info,
            team1_score: team1_score,
            team2_score: team2_score,
            game_name: game_name,
            live_link: live_link
      });
  
      if (response.data.code == 11000) {
        // занчит новость с таким заголовком уже есть, нужно изменить логин
        console.log("Change match id");
      }
      else {
        // все хорошо вот данные новости
        console.log(response.data.message);
      }
  
  
    } catch (error) {
        console.error(error);
    }
}
  
async function updateMatch(identifier, team1_name, team2_name, date, time, info, 
    team1_score, team2_score, game_name, live_link) {
    try {
        const response = await axios.put(`${host}/update_match/${identifier}`, {
          team1_name: team1_name,
          team2_name: team2_name,
          date: date,
          time: time,
          info: info,
          team1_score: team1_score,
          team2_score: team2_score,
          game_name: game_name,
          live_link: live_link
        });
    
        console.log(response.data.message);
        return response.data
    
      } catch (error) {
        console.error(error);
      }
}

  async function getMatch(identifier) {
    try {
      const response = await axios.get(`${host}/match/${identifier}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
async function deleteMatch(identifier) {
    try {
      const response = await axios.delete(`${host}/delete_match/${identifier}`);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
}

async function getAllMatches() {
    try {
        const response = await axios.get(`${host}/all_matches`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getMatchesCount() {
    try {
        const response = await axios.get(`${host}/all_matches`);
        return response.data.length;
    } catch (error) {
        console.error(error);
    }
}


// createMatch('hui', 'gay', '12 oct', '22:00', 'tour 1', '0', '0', 'dota', 'https://awwaea.com');
// updateMatch(1, 'hui', 'gay', '12 oct', '22:00', 'tour bebra', '0', '0', 'dota', 'https://awwaea.com');
// getMatch(1);
deleteMatch(1);
// getAllMatches();