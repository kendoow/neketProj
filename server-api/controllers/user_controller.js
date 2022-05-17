const table = require('../models/user_model');
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

class UserController{
    CreateUser(req, res){
        if (!req.body) {
            res.status(400).send({message: "User data is invalid!"});
            Logger.error("User creation failed!");
            return;
        }
        const User = new table({
            username : req.body.username,
            password : req.body.password,
            role : req.body.role
        });
        table.create(User).then(data => {
            if (!data){
                res.status(400).send({message: "Error occured while creating user"});
                Logger.error(ErrorMessage);
                return;
            }
            res.status(200).send({message:"User Created!"});
        }).catch(err=>{res.send(err),
                Logger.error(err)
                return;
            });
        Logger.info("Created User: " + User.username)
    }

    GetUsers(req, res) {
        table.find().then(user => {
            res.send(user);
        }).catch(err =>{
            res.status(500).send({message : err.message || "Error occured while accessing user data"})
        })
    }

    GetUser(req, res) {
        let uname = req.params.username;
        if (!uname) {
            res.status(400).send({message: "User ID is invalid!"});
            return;
        }
        table.findOne({username: uname}).then(user => {
            res.send(user);
        }).catch(err =>{
            res.status(500).send({message : err.message || "Error occured while accessing user"})
        })
    }

    UpdateUser(req, res){
        if (!req.body){
            res.status(400).send({message: "User ID is invalid!"});
            Logger.error("User ID or Data are invalid!")
            return;
        }
        let id = req.params.id;
        const ErrorMessage = "Failed to update user " + id;
        table.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
            if (!data){
                res.status(400).send({message: ErrorMessage});
                Logger.error(ErrorMessage);
                return;
            }
            res.send(data);
            Logger.info("User " + id + " is updated!");
            }).catch(err =>{
                res.status(500).send({message: err});
                Logger.error(err);
        });
    }

    DeleteUser(req, res) {
        let id = req.params.id;
        if (!id){
            res.status(400).send({message: "User ID are invalid!"});
            Logger.error("User ID is invalid!");
            return;
        }
        const ErrorMessage = "Failed to delete user!";
        table.findByIdAndDelete(id).then(data => {
            if (!data){
                res.status(400).send({message: ErrorMessage});
                Logger.error(ErrorMessage);
                return;
            }
            res.send("User successfully deleted!");
            Logger.info("User " + id + " is deleted!");
            }).catch(err =>{
                res.status(500).send({message: err});
                Logger.error(err);
        });
    }
}

module.exports = new UserController();