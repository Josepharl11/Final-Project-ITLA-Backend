const mongoose = require('mongoose');

const BuildingSchema = new mongoose.Schema({
    id: { type: String, required: true },
    number: String,
    name: String,
    description: String,
    floors: [{
        level: Number,
        descriptionLevel: String,
        spaces: [{
            name: String,
            type: String
        }]
    }]
});

module.exports = mongoose.model('Building', BuildingSchema);