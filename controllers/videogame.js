const express = require('express')

const gameApi = require('../models/videogame.js')

const gameRouter = express.Router()

///////////////////GET ALL USERS/////////////////////////////
gameRouter.get('/', function (req, res) {
    gameApi.getAllGames().then((games) => {
        res.json(games) 
    })
  })
  
  /////////////////////GET ONE USER//////////////////////////
  gameRouter.get('/gameId', function(req,res){
    gameApi.getOneGame(req.params.gameId).then((foundGame) => {
        res.json(foundGame);
    })
  })
  
  /////////////////////ADD USER///////////////////////////////
  gameRouter.post('/', function (req, res) {
    gameApi.addNewGame(req.body).then((newGame) => {
        res.json(newGame)
    })
  })
  
  /////////////////EDIT USER/////////////////////////////////
  gameRouter.put('/:gameId', function(req, res) {
    gameApi.editGame(req.params.gameId, req.body).then((brandNewGame) => {
    res.json(brandNewGame)
    })
  })
  
  ////////////////////DELETE USER/////////////////////////////
  gameRouter.delete('/:gameId', function(req,res){
    gameApi.deleteGame(req.params.gameId).then((noGame) => {
        res.json(noGame);
    })
  })

  module.exports = {
    gameRouter
  }
  