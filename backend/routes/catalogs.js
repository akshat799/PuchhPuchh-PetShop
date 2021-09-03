const router = require('express').Router();
let Catalog = require('../models/catalog.model');

router.route('/').get((req,res) => {
    Catalog.find()
    .then(catalogs => res.json(catalogs))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const UserId = req.body.UserId;
    const brandname = req.body.brandname;
    const productname = req.body.productname;
    const category = req.body.category;
    const animal = req.body.animal;
    const path = req.body.path;
    const price = Number(req.body.price);

    const newCatalog = new Catalog ({
        UserId,
        brandname,
        productname,
        category,
        animal,
        path,
        price
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
        catalog.path = req.body.path;
        catalog.price = Number(req.body.price);

        catalog.save()
        .then(() => res.json('Catelog updated!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;