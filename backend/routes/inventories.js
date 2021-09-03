const router = require('express').Router();
let Inventory = require('../models/inventory.model');

router.route('/').get((req,res) => {
    Inventory.find()
    .then(inventories => res.json(inventories))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const UserId = req.body.UserId;
    const brandname = req.body.brandname;
    const productname = req.body.productname;
    const size = req.body.size;
    const amount = Number(req.body.amount);
    const price = Number(req.body.price);

    const newInventory = new Inventory ({
        UserId,
        brandname,
        productname,
        size,
        amount,
        price
    });

    newInventory.save()
    .then(() => res.json('Inventory added !'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    Inventory.findById(req.params.id)
    .then(inventory => res.json(inventory))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) => {
    Inventory.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item removed!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) => {
    Inventory.findById(req.params.id)
    .then(inventory => {
        inventory.brandname = req.body.brandname;
        inventory.productname = req.body.productname;
        inventory.size = req.body.size;
        inventory.amount = Number(req.body.amount);
        inventory.price = Number(req.body.price);

        inventory.save()
        .then(() => res.json('Inventory updated!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;