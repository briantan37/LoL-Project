const router = require('express').Router();
let User = require('../models/user.model');

//GET request
router.route('/').get((req, res) => {
    User.find()                                 //promise that returns users in database
        .then(users => res.json(users))         //if found return json object
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST request
router.route('/add').post((req, res) => {
    const username = req.body.username;         //get info from the client's page

    const newUser = new User({username});       //store the information into a model object

    newUser.save()                              //promise that saves the new user into the database
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;