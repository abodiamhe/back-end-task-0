const express = require("express");

const adminCoutroller = require("../controllers/admin");

const router = express.Router();

router.get("/", adminCoutroller.getAdmin);

module.exports = router;
