
const { Phrase } = require("../models/Phrases")

async function getRandomPhrase(req, res) {
    let type = req.query.phraseType;

    try {
        const [doc] = await Phrase.aggregate([
            { $match: { type } },
            { $sample: { size: 1 } }
        ]);
        if (!doc) {
            return res.status(404).json({ error: `No phrase found for this type: ${type}` });
        }
        return res.status(200).json({ phrase: doc.phrase })
    } catch (err) {
        return res.status(400).json({ error: "Error getting random phrase" })
    }

}
module.exports = { getRandomPhrase }