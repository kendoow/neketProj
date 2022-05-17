// const table = require('../models/comment_model');
// const winston = require('winston');

// const LoggerConfiguration = {
//     'transports': [
//         new winston.transports.Console(),
//         new winston.transports.File({
//             filename: 'logs/example.log'
//         })
//     ]
// }

// const Logger = winston.createLogger(LoggerConfiguration);

// class CommentController{
//     CreateComment(req, res){
//         if (!req.body) {
//             res.status(400).send({message: "Comment data is invalid!"});
//             Logger.error("Comment creation failed!");
//             return;
//         }
//         const Comment = new news_table({
//             id : req.body.id,
//             name : req.body.name,
//             description : req.body.description,
//         });
//         const ErrorMessage = "Error occured while create operation!";
//         table.create(News).then(data => {
//             res.send(data)}, Logger.info("Created Comment: " + News.id)
//             ).catch(err=>{res.status(500).send({
//                 message:err.message || ErrorMessage}), Logger.error(ErrorMessage)
//             });
//     }

//     GetComments(req, res) {
//         table.find().then(role => {
//             res.send(role);
//         }).catch(err =>{
//             res.status(500).send({message : err.message || "Error occured while accessing comment data"})
//         })
//     }

//     GetComment(req, res) {
//         let id = req.body.id;
//         if (!id) {
//             res.status(400).send({message: "Comment ID is invalid!"});
//             return;
//         }
//         table.findById(id).then(role => {
//             res.send(role);
//         }).catch(err =>{
//             res.status(500).send({message : err.message || "Error occured while accessing comment news"})
//         })
//     }

//     UpdateComment(req, res){
//         if (!req.body){
//             res.status(400).send({message: "Comment ID is invalid!"});
//             Logger.error("Comment ID or Data are invalid!")
//             return;
//         }
//         let id = req.body.id;
//         const ErrorMessage = "Failed to update comment " + id;
//         table.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
//             if (!data){
//                 res.status(400).send({message: ErrorMessage});
//                 Logger.error(ErrorMessage);
//                 return;
//             }
//             res.send(data);
//             Logger.info("Comment " + id + " is updated!");
//             }).catch(err =>{
//                 res.status(500).send({message: ErrorMessage});
//                 Logger.error(ErrorMessage);
//         });
//     }

//     DeleteComment(req, res) {
//         let id = req.body.id;
//         if (!id){
//             res.status(400).send({message: "Comment ID is invalid!"});
//             Logger.error("Comment ID is invalid!");
//             return;
//         }
//         const ErrorMessage = "Failed to delete comment!";
//         table.findByIdAndDelete(id).then(data => {
//             if (!data){
//                 res.status(400).send({message: ErrorMessage});
//                 Logger.error(ErrorMessage);
//                 return;
//             }
//             res.send("Comment successfully deleted!");
//             Logger.info("Comment " + id + " is deleted!");
//             }).catch(err =>{
//                 res.status(500).send({message: ErrorMessage});
//                 Logger.error(ErrorMessage);
//         });
//     }
// }

// module.exports = new CommentController();