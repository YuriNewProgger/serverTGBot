const Router = require('express');
const router = new Router();
const newsController = require('../Controllers/news.controller');


router.get('/lastNews', newsController.getLastNews);


module.exports = router;