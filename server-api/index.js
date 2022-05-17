const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
const DBConnection = require('./db.js');
const UserRoute = require("./routes/user_route");
const NewsRoute = require("./routes/news_route");
const GameRoute = require("./routes/game_route");
const MatchRoute = require("./routes/match_route");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

DBConnection();

app.use("/", UserRoute);
app.use("/", NewsRoute);
app.use("/", GameRoute);
app.use("/", MatchRoute);
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});