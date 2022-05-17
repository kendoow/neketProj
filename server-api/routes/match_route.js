const MatchController = require("../controllers/match_controller");
const express = require('express');
const router = express.Router();

router.post('/new_match', MatchController.CreateMatch);
router.get('/match/:id', MatchController.GetMatch);
router.get('/all_matches', MatchController.GetMatches);
router.put('/update_match/:id', MatchController.UpdateMatch);
router.delete('/delete_match/:id', MatchController.DeleteMatch);

module.exports = router;