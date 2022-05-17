const mongoose = require("mongoose");
const winston = require("winston");
const url = "mongodb://127.0.0.1:27017";

const LoggerConfiguration = {
    'transports': [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/example.log'
        })
    ]
}

const Logger = winston.createLogger(LoggerConfiguration);

const DBConnection = async() =>{
    try{
        const conn = await mongoose.connect(url);
        Logger.info("Connected to MONGODB server");
    } catch(err){
        Logger.error("Error:!" + err);
        process.exit(1);
    }
}
module.exports = DBConnection;