const table = require('../models/news_model');
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

class NewsController{
    CreateNews(req, res){
        if (!req.body) {
            res.status(400).send({message: "News data is invalid!"});
            Logger.error("News creation failed!");
            return;
        }
        const News = new table({
            title : req.body.title,
            text : req.body.text,
            creation_date: req.body.creation_date,
            tags: req.body.tags,
            is_published: req.body.is_published
        });
        table.create(News).then(data => {
            if (!data){
                res.status(400).send({message: "News data is invalid!"});
                Logger.error("News creation failed!");
                return;
            }
            res.status(200).send({message: "News created successfully!"});},
            Logger.info("Created News: " + News.title)
            ).catch(err=>{res.send(err),
                Logger.error(err)
            });
    }

    GetAllNews(req, res) {
        table.find().then(news => {
            res.send(news);
        }).catch(err =>{
            res.send(err);
        })
    }

    GetOneNews(req, res) {
        let news_title = req.params.title;
        if (!news_title) {
            res.status(400).send({message: "News ID is invalid!"});
            return;
        }
        table.findOne({title: news_title}).then(news => {
            res.send(news);
        }).catch(news =>{
            res.send(err);
        })
    }

    UpdateNews(req, res){
        if (!req.body){
            res.status(400).send({message: "News ID is invalid!"});
            Logger.error("News ID or Data are invalid!")
            return;
        }
        let news_title = req.params.title;
        const ErrorMessage = "Failed to update news " + news_title;
        table.findOneAndUpdate({title: news_title}, req.body, {useFindAndModify: false}).then(data => {
            if (!data){
                res.status(400).send({message: ErrorMessage});
                Logger.error(ErrorMessage);
                return;
            }
            res.status(200).send({message: "News are updated successfully!"});
            Logger.info("News " + news_title + " are updated!");
            }).catch(err =>{
                res.send(err);
                Logger.error(err);
        });
    }

    DeleteNews(req, res) {
        let news_title = req.params.title;
        if (!news_title){
            res.status(400).send({message: "News ID is invalid!"});
            Logger.error("News ID is invalid!");
            return;
        }
        const ErrorMessage = "Failed to delete news!";
        table.findOneAndDelete({title: news_title}).then(data => {
            if (!data){
                res.status(400).send({message: ErrorMessage});
                Logger.error(ErrorMessage);
                return;
            }
            res.status(200).send({message:"News successfully deleted!"});
            Logger.info("News " + title + " are deleted!");
            }).catch(err =>{
                res.send(err);
                Logger.error(err);
        });
    }
}

module.exports = new NewsController();