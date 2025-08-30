const mongoose = require("mongoose");

const PhraseSchema = new mongoose.Schema({
    phrase: String, 
    type: String,
    createdAt: { type: Date, default: Date.now },
})

const Phrase = mongoose.model('Phrase', PhraseSchema);

module.exports = {Phrase};