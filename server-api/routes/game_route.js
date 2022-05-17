const GameController = require("../controllers/game_controller");
const express = require('express');
const router = express.Router();

router.get('/game/:id', GameController.GetGame);
router.get('/all_games', GameController.GetGames);

module.exports = router;