const express = require('express');
const router = express.Router();
const favPlayersCtrl = require('../../controllers/favPlayers');
const addUserToReq = require('../../config/auth');




// ---------------------Protected Routes ------------------
router.use(addUserToReq);
router.get('/favPlayers', favPlayersCtrl.getFavPlayers);
router.post('/favPlayers', favPlayersCtrl.addFavPlayers);

module.exports = router;
