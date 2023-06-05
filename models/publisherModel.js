
const mongoose = require("mongoose")


// / Publisher Schema
const publisherSchema = new mongoose.Schema({
    companyName:String,
    firstParty:Boolean,
    website:String
})

// Publisher Model
const publisherModel = mongoose.model('Publisher', publisherSchema);

// Game Schema
const gameSchema = new mongoose.Schema({
    title: String,
    publisher: publisherSchema
})

// Game Model
const gameModel = mongoose.model('Game', gameSchema);
module.exports =gameModel;