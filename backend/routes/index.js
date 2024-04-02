
const express = require("express");

const {userLogin} = require("../controller/user")

const router = express.Router();


router.get("/login",userLogin);


module.exports = router