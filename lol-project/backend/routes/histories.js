const router = require('express').Router();
let History = require('../models/history.model');

router.route('/').get((req, res) => {
    History.find()
        .then(histories => res.json(histories))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const charList = req.body.charList;
    const date = Date.parse(req.body.date);

    const newHistory = new History({
        username,
        charList,
        date,
    });

    newHistory.save()
        .then(() => res.json('Match added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;