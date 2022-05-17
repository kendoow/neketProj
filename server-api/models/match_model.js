let mongoose = require('mongoose');

let match_schema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    team1_name:{
        type: String,
        required: true,
    },
    team2_name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: false
    },
    time:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    team1_score:{
        type: Number,
        required: true
    },
    team2_score:{
        type: Number,
        required: true
    },
    game_name:{
        type: String,
        required: false
    },
    live_link:{
        type: String,
        required: false
    }
});

match_schema.plugin(require('mongoose-nanoid'), 12);
const Match = mongoose.model('Match', match_schema);

module.exports = Match;