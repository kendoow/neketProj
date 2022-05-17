let mongoose = require('mongoose');

let news_schema = new mongoose.Schema({
    user_id:{
        type: Number,
        required: true,
    },
    news_id:{
        type: Number,
        required: true,
    },
    text:{
        type: String,
        required: true
    },
    creation_date:{
        type: String,
        required: true
    }
});

const UnknownDB = mongoose.model('Commment', news_schema);

module.exports = UnknownDB;