const express = require("express");
const { addGame, updateGame } = require("../controllers/publisherController");

const route = express.Router()



route.post('/add-game',addGame)
route.post('/update-game/:id',updateGame)




module.exports=route;