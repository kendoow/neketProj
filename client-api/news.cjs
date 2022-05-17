const axios = require("axios");
const host = "http://127.0.0.1:3000";

async function createNews(title, text, tags) {   
  try {
    const response = await axios.post(`${host}/new_news`, {
      title: title,
      text: text,
      creation_date: getCurrentDateAndTime(),
      tags: tags,
      is_published: false
    });

    if (response.data.code == 11000) {
        // занчит новость с таким заголовком уже есть, нужно изменить логин
        console.log("Change title");
    }
    else {
        // все хорошо вот данные новости
        console.log(response.data.message);
    }


  } catch (error) {
    console.error(error);
  }
}

async function updateNews(title, text, tags, is_published) {
    try {
      const response = await axios.put(`${host}/update_news/${title}`, {
        title: title,
        text: text,
        creation_date: getCurrentDateAndTime(),
        tags: tags,
        is_published: is_published
      });
      console.log(response.data.message);
      return response.data
    } catch (error) {
      console.error(error);
    }
}

async function deleteNews(title) {
    try {
      const response = await axios.delete(`${host}/delete_news/${title}`);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
}

async function getNews(title) {
  try {
    const response = await axios.get(`${host}/news/${title}`);
    console.log(response.data);
    console.log(response.data.tags.split(" ")); // разделение строки тегов
    return response.data
  } catch (error) {
    console.error(error);
  }
}

async function getAllNews() {
    try {
      const response = await axios.get(`${host}/all_news`);
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
}
  
function getCurrentDateAndTime() {
    let date_ob = new Date();
    let year = date_ob.getFullYear();
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let date = ("0" + date_ob.getDate()).slice(-2);
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    // prints date in YYYY-MM-DD format
    return(date + "." + month + "." + year + " " + hours + ":" + minutes);
}

// createNews('Siska', 'Test test test test test test test', '#tag #tag2 #tag3');
// updateNews('Siska', 'Test test hui test test test test', '#tag #tag2 #tag3', true);
// getNews('Siska');
// deleteNews('Siska');
// getAllNews();