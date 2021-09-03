const router = require('express').Router();
let Sale = require('../models/sale.model');

router.route('/').get((req,res) => {
    Sale.find()
    .then(sales => res.json(sales))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const UserId = req.body.UserId;
    const date = Date.parse(req.body.date);
    const brandname = req.body.brandname;
    const productname = req.body.productname;
    const weight = req.body.weight;
    const animal = req.body.animal;
    const amount = Number(req.body.amount);
    const discount = Number(req.body.discount);
    const total = Number(req.body.total);

    const newSale = new Sale ({
        UserId,
        date,
        brandname,
        productname,
        weight,
        animal,
        amount,
        discount,
        total
    });

    newSale.save()
    .then(() => res.json('Sale added !'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    Sale.findById(req.params.id)
    .then(sale => res.json(sale))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) => {
    Sale.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sale removed!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) => {
    Sale.findById(req.params.id)
    .then(sale => {
        sale.date = req.body.date;
        sale.brandname = req.body.brandname;
        sale.productname = req.body.productname;
        sale.weight = req.body.weight;
        sale.animal = req.body.animal;
        sale.amount = Number(req.body.amount);
        sale.discount = Number(req.body.discount);
        sale.total = Number(req.body.total);

        sale.save()
        .then(() => res.json('Sale updated!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;