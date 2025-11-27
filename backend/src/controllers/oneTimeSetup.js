const {Phrase} = require("../models/Phrases");        // adjust path if needed
const jsonPhrases_pos = require("../models/phrases.json"); // array of strings
const jsonPhrases_neg = require("../models/neg-phrases.json"); // array of strings

async function createPhraseBank(type, jsonPhrases) {
  if (!type) throw new Error("Type is required");
  for (const phrase of jsonPhrases) {
    const doc = new Phrase({ phrase, type });
    await doc.save(); // let this throw; caller will handle
  }
  return { inserted: jsonPhrases.length };
}

// controller
async function create(req, res) {
  try {
    const positive = await createPhraseBank("positive", jsonPhrases_pos);
    const negative = await createPhraseBank("negative", jsonPhrases_neg);
    return res.status(200).json({ created: true, positive, negative });
  } catch (err) {
    return res.status(400).json({ created: false, error: err.message });
  }
}

module.exports = {create}