const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const championSchema = new Schema({
    id: { type: String, required: true },
    key: { type: String },
    name: { type: String },
    origin: { type: [String] },
    class: { type: [String] },
    cost: { type: Number },
    ability: {
        name: { type: String },
        description: { type: String },
        type: { type: String },
        manaCost: { type: Number },
        stats: { type: [Object] },
    },
    stats: {
        offense: {
            damage: { type: Number },
            attackSpeed: { type: Number },
            dps: { type: Number },
            range: { type: Number },
        },
        defense: {
            health: { type: Number },
            armor: { type: Number },
            magicResist: { type: Number },
        }
    },
    items: {type: [String]},
});

const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion;