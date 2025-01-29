const express = require("express");

const adminCoutroller = require("../controllers/admin");

const router = express.Router();

router.get("/detail", adminCoutroller.getAdmin);

module.exports = router;
