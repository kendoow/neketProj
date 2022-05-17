let mongoose = require('mongoose');

let news_schema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    text:{
        type: String,
        required: true
    },
    creation_date:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        required: true
    },
    is_published:{
        type: Boolean,
        required: true,
        default: false
    }
    
});

news_schema.plugin(require('mongoose-nanoid'), 12);

const News = mongoose.model('News', news_schema);

module.exports = News;