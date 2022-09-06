const Router = require("express");
const { getIndex } = require("../controllers/index.controller");

const router = Router();

router.route("/").get(getIndex);

module.exports = router;
