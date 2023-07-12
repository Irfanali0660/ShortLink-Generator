var express = require('express');
var router = express.Router();
let {shorturl,shorturlcheck} = require('../controller/homeController')

/* GET users listing. */
router.post('/shorturl',shorturl);
router.post('/shorturlcheck',shorturlcheck)

module.exports = router;
