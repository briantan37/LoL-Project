const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const championSchema = new Schema({
    id: { type: String, required: true },
    key: { type: String },
    championName: { type: String },
    title: { type: String },
    championIcon: { type: String},
    mainRole: { type: String },
    tags: { type: Array },
    stats: { type: Object },
    abilities: { type: Object }
});

const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion;