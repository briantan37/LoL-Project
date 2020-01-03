const router = require('express').Router();
let User = require('../models/champion.model');

//GET request
router.route('/').get((req, res) => {
    User.find()                                 //promise that returns all champions in database
        .then(users => res.json(users))         //if found return json object
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST request
router.route('/add').post((req, res) => {
    const champion = req.body.champion;         //get info from the client's page

    const newChampion = new User({champion});       //store the information into a model object

    newChampion.save()                              //promise that saves the new champion into the database
        .then(() => res.json('Champion added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req,res) => {

});
module.exports = router;