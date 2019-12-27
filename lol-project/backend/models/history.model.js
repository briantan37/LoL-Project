const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
    username: { type: String, required: true },
    charList: { type: String},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const History = mongoose.model('History', historySchema);

module.exports = History;