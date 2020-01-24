const express = require('express');
const router = express.Router();
const favPlayersCtrl = require('../../controllers/favPlayers');
const addUserToReq = require('../../config/auth');




// ---------------------Protected Routes ------------------
router.use(addUserToReq);
router.get('/favplayers', favPlayersCtrl.getFavPlayers);
router.post('/favplayers', favPlayersCtrl.addFavPlayers);

