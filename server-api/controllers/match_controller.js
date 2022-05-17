const table = require('../models/match_model');
const winston = require('winston');

const LoggerConfiguration = {
    'transports': [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/example.log'
        })
    ]
}

const Logger = winston.createLogger(LoggerConfiguration);

class MatchController{
    CreateMatch(req, res){
        if (!req.body) {
            res.status(400).send({message: "Match data is invalid!"});
            Logger.error("Match creation failed!");
            return;
        }
        //let size = table.estimatedDocumentCount();
        // table.count({}, function(error, collection_size){
        //     size = collection_size;
        // });
        const Match = new table({
            id : req.body.id,
            team1_name : req.body.team1_name,
            team2_name : req.body.team2_name,
            date : req.body.date,
            time : req.body.time,
            info : req.body.info,
            team1_score : req.body.team1_score,
            team2_score : req.body.team2_score,
            game_name : req.body.game_name,
            live_link: req.body.live_link
        });
        table.create(Match).then(data => {
            if (!data){
                res.status(400).send({message: "Match data is invalid!"});
                Logger.error("Match creation failed!");
                return;
            }
            res.status(200).send({message: "Match created successfully!"})},
             Logger.info("Created Match: " + Match.info)
            ).catch(err=>{res.send(err),
                 Logger.error(err)
            });
    }

    GetMatches(req, res) {
        table.find().then(match => {
            res.send(match);
        }).catch(err =>{
            res.send(err);
        })
    }

    GetMatch(req, res) {
        let match_id = req.params.id;
        if (!match_id) {
            res.status(400).send({message: "Match ID is invalid!"});
            return;
        }
        table.findOne({id: match_id}).then(match => {
            res.send(match);
        }).catch(err =>{
            res.send(err);
        })
    }

    UpdateMatch(req, res){
        if (!req.body){
            res.status(400).send({message: "Match ID is invalid!"});
            Logger.error("Match ID or Data are invalid!")
            return;
        }
        let match_id = req.params.id;
        const ErrorMessage = "Failed to update match " + match_id;
        table.findOneAndUpdate({id : match_id}, req.body, {useFindAndModify: false}).then(data => {
            if (!data){
                res.status(400).send({message: ErrorMessage});
                Logger.error(ErrorMessage);
                return;
            }
            res.status(200).send({message :"Match is updated"});
            Logger.info("Match " + match_id + " is updated!");
            }).catch(err =>{
                res.send(err);
                Logger.error(err);
        });
    }

    DeleteMatch(req, res) {
        let match_id = req.params.id;
        if (!match_id){
            res.status(400).send({message: "Match ID is invalid!"});
            Logger.error("Match ID is invalid!");
            return;
        }
        const ErrorMessage = "Failed to delete match!";
        table.findOneAndDelete({id : match_id}).then(data => {
            if (!data){
                res.status(400).send({message: ErrorMessage});
                Logger.error(ErrorMessage);
                return;
            }
            res.status(200).send({message :"Match successfully deleted!"});
            Logger.info("Match " + match_id + " is deleted!");
            }).catch(err =>{
                res.send(err);
                Logger.error(err);
        });
    }
}

module.exports = new MatchController();