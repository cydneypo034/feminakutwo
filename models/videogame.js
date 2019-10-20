const mongoose = require('./connection.js')

var GameSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    bestConsolesToPlayOn: String,
    mainCharacters: String,
    genre: String,
    amountOfLevels: String,
    wouldRecommend: Boolean
})

const GameCollection = mongoose.model('Game', GameSchema)


function getAllGames() {
    return GameCollection.find()
}

function deleteGame(noGame) {
    return GameCollection.findByIdAndDelete(noGame)
}

function getOneGame(gameId) {
    return GameCollection.findById(gameId)
}

function addNewGame(newGame) {
    return GameCollection.create(newGame);
}

function editGame(gameEditId, brandNewGame) {
    return GameCollection.findByIdAndUpdate(gameEditId, brandNewGame)
}
module.exports = {
    addNewGame,
    deleteGame,
    editGame,
    getAllGames,
    getOneGame
}