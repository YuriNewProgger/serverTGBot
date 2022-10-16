const Router = require('express');
const router = new Router();
const timeTableController = require('../Controllers/timeTable.controller');

router.get('/timetable', timeTableController.getTimeTable);

module.exports = router;