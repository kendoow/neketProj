const axios = require("axios");
const host = "http://127.0.0.1:3000";

async function createUser(username, email, password) {
  try {
    const response = await axios.post(`${host}/new_user`, {
      username: username,
      email: email,
      password: password,
      role: "default",
    });

    if (response.data.code == 11000) {
      // занчит такой пользователь уже есть, нужно изменить логин
      console.log("Change username or email.");
    }
    else {
      // все хорошо вот данные созданого пользователя
      console.log(response.data.message);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getUser(username) {
  try {
    const response = await axios.get(`${host}/user/${username}`);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
}


// createUser('asas', 'asas@gmail.com', 'das');
getUser('asas');