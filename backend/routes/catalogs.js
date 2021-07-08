const router = require('express').Router();
let Catalog = require('../models/catalog.model');

router.route('/').get((req,res) => {
    Catalog.find()
    .then(catalogs => res.json(catalogs))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const brandname = res.body.brandname;
    const productname = res.body.productname;
    const category = res.body.category;
    const animal = res.body.animal;

    const newCatalog = new Catalog ({
        brandname,
        productname,
        category,
        animal,
    });

    newCatalog.save()
    .then(() => res.json('Item Added !'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    Catalog.findById(req.params.id)
    .then(catalog => res.json(catalog))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) => {
    Catalog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item removed!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) => {
    Catalog.findById(req.params.id)
    .then(catalog => {
        catalog.brandname = req.body.brandname;
        catalog.productname = req.body.productname;
        catalog.category = req.body.category;
        catalog.animal = req.body.animal;

        catalog.save()
        .then(() => res.json('Catelog updated!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;