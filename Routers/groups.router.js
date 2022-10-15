const Router = require("express");
const router = new Router();
const groupsController = require("../Controllers/groups.controller");

router.get("/all", groupsController.getGroups);

module.exports = router;