const mongoose = require('mongoose');

const WorkplaceSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        workplace: String,
        hourlyRate: Number,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    }
)

const Workplace = mongoose.model('Workplace', WorkplaceSchema);
module.exports = {Workplace};