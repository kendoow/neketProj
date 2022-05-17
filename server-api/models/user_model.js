let mongoose = require('mongoose');

let user_schema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: false
    }
});

user_schema.plugin(require('mongoose-nanoid'), 15);
const User = mongoose.model('User', user_schema);

module.exports = User;