const express = require("express");
const emailController = require("../controllers/emailController");
const router = express.Router();

router.post("/", emailController.handleContact);

module.exports = router;
