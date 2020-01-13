const router = require('express').Router();
let Champion = require('../models/champion.model');
const multer = require('multer');

//converts the binary into an acutal file.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/championIcons');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

//GET request
router.route('/').get((req, res) => {
    Champion.find()                                 //promise that returns all champions in database
        .then(users => res.json(users))         //if found return json object
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST request
router.post('/add', (req, res) => {
    console.log(req.file)
    const id = req.body.id;         //get info from the client's page
    const key = req.body.key;
    const championName = req.body.championName;
    const title = req.body.title;
    const mainRole = req.body.mainRole;
    const tags = req.body.tags;
    const stats = req.body.stats;
    const abilities = req.body.abilities;


    const newChampion = new Champion({
        id,
        key,
        championName,
        title,
        mainRole,
        tags,
        stats,
        abilities
    });       //store the information into a model object

    newChampion.save()                              //promise that saves the new champion into the database
        .then(() => res.json('Champion added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/addIcon/:id', upload.single('championIcon'), (req, res) => {
    Champion.findById(req.params.id)
        .then(champion => {
            champion.championIcon = req.file.path;

            champion.save()
                .then(() => res.json('Icon Added'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id'),((req, res) => {
    Champion.findById(req.params.id)
    .then(champion => {
        champion.id = req.body.id;
        champion.key = req.body.key;
        champion.championName = req.body.championName;
        champion.title = req.body.title;
        champion.mainRole = req.body.mainRole;
        champion.tags = req.body.tags;
        champion.stats = req.body.stats;
        champion.abilities = req.body.abilities;

        champion.save()
            .then(() => res.json('Icon Added'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;