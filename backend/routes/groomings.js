const router = require('express').Router();
let Grooming = require('../models/grooming.model');

router.route('/').get((req,res) => {
    Grooming.find()
    .then(groomings => res.json(groomings))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) =>{
    const animal = req.body.animal;
    const service = req.body.service;
    const price = Number(req.body.price);
    const size = req.body.size;

    const newGrooming = new Grooming ({
        animal,
        service,
        price,
        size,
    });

    newGrooming.save()
    .then(() => res.json('Grooming Type Added !'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    Grooming.findById(req.params.id)
    .then(grooming => res.json(grooming))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) => {
    Grooming.findByIdAndDelete(req.params.id)
    .then(() => res.json('Grooming style deleted!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) => {
    Grooming.findById(req.params.id)
    .then(grooming => {
        grooming.animal = req.body.animal;
        grooming.service = req.body.service;
        grooming.price = Number(req.body.price);
        grooming.size = req.body.size;

        grooming.save()
        .then(() => res.json('Grooming style/styles updated!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;