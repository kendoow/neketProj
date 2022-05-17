const table = require('../models/game_model');

class GameController{
    GetGames(req, res) {
        table.find().then(role => {
            res.send(role);
        }).catch(err =>{
            res.status(500).send({message : err.message || "Error occured while accessing game data"})
        })
    }

    GetGame(req, res) {
        let game_name = req.params.name;
        if (!game_name) {
            res.status(400).send({message: "Game ID is invalid!"});
            return;
        }
        table.findOne({name: game_name}).then(game => {
            res.send(game);
        }).catch(err =>{
            res.send(err)
        })
    }
}

module.exports = new GameController();