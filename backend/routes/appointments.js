const router = require('express').Router();
let Appointment = require('../models/appointment.model');

router.route('/').get((req,res) => {
    Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error:' + err ));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const animal = req.body.animal;
    const service = req.body.service;
    const phone = req.body.phone;
    const account = req.body.account;
    const date = Date.parse(req.body.date);
    const time = req.body.time

    const newAppointment = new Appointment({
        name,
        animal,
        service,
        phone,
        account,
        date,
        time,
    });

    newAppointment.save()
    .then(() => res.json('Appointment Added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) => {
    Appointment.findById(req.params.id)
    .then(appointment => res.json(appointment))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) => {
    Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Appointment cancelled!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) => {
    Appointment.findById(req.params.id)
    .then(appointment => {
        appointment.name = req.body.name;
        appointment.animal = req.body.animal;
        appointment.service = req.body.service;
        appointment.phone = req.body.phone;
        appointment.account = req.body.account;
        appointment.date = Date.parse(req.body.date);
        appointment.time = req.body.time

        appointment.save()
        .then(() => res.json('Appointment updated!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;