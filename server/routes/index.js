const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

router.post('/api/user/getSummonerByName',
                apiController.getSummonerByName,
                apiController.getSummonerMatches,
                apiController.getEachMatch)


module.exports = router;