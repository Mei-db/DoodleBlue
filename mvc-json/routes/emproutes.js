const express = require("express");
const router = express.Router();
const controller = require("../controller/empcontroller");

router.get("/", controller.listEmp);
router.get("/:id",controller.getEmp);
router.post("/",controller.addEmp);
router.put("/:id",controller.updateEmp);
router.delete("/:id",controller.deleteEmp);

module.exports = router;