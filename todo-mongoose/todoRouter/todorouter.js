const controller = require("../todoController/todoController")
const express = require("express")

router = express.Router()

router.get("/", controller.getAll);
router.get("/", controller.store);
router.get("/:id", controller.update);
router.get("/:id", controller.destroy);

module.exports = router