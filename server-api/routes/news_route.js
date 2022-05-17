const NewsController = require("../controllers/news_controller");
const express = require('express');
const router = express.Router();

router.post('/new_news', NewsController.CreateNews);
router.get('/news/:title', NewsController.GetOneNews);
router.get('/all_news', NewsController.GetAllNews);
router.put('/update_news/:title', NewsController.UpdateNews);
router.delete('/delete_news/:title', NewsController.DeleteNews);

module.exports = router;