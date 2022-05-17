const UserController = require("../controllers/user_controller");
const express = require('express');
const router = express.Router();

router.post('/new_user', UserController.CreateUser);
router.get('/user/:username', UserController.GetUser);
router.get('/all_users', UserController.GetUsers);
router.put('/update_user/:id', UserController.UpdateUser);
router.delete('/delete_user/:id', UserController.DeleteUser);

module.exports = router;