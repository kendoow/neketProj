let mongoose = require('mongoose');

let game_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    system_requirements:{
        OC:{
            type: String,
            required: true
        },
        CPU:{
            type:String,
            required:true
        },
        GPU:{
            type:String,
            required:true
        },
        RAM:{
            type:String,
            required:true
        },
        DiscSpace:{
            type:String,
            required: true
        }
    },
    creation_date:{
        type:String,
        required:true
    }
});

game_schema.plugin(require('mongoose-nanoid'), 12);
const Game = mongoose.model('Game', game_schema);

module.exports = Game;