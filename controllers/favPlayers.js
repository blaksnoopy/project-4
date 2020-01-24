const FavPlayer = require('../models/favPlayer');


module.exports = {
    getFavPlayers,
    addFavPlayers,
}

async function getFavPlayers(req, res) {
    const favPlayers = await FavPlayer.find({user: req.user._id});
    res.json(favPlayers);
};

async function addFavPlayers(req, res) {
    req.body.user = req.user._id;
    await FavPlayer.create(req.body);
    getFavPlayers(req, res);
};