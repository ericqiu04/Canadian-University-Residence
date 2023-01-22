const express = require('express')
const router = express.Router();

//import controllers
const {getTest} = require('../controllers/test');
const {getUniversity} = require('../controllers/university');

//import middlewares


//api routes
router.get("/", getTest);
router.get("/universities", getUniversity)

module.exports = router;