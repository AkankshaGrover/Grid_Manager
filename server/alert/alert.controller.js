const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../validate_request');
const alertService = require('./alert.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createRow, create);
router.delete('/:id', _delete);

module.exports = router;

// route functions
function getAll(req, res, next) {
    alertService.getAll()
        .then(alert => res.json(alert))
        .catch(next);
}

function getById(req, res, next) {
    alertService.getById(req.params.id)
        .then(alert => res.json(alert))
        .catch(next);
}

function create(req, res, next) {
    alertService.create(req.body)
        .then(() => res.json({ message: 'Alert created' }))
        .catch(next);
}

function _delete(req, res, next) {
    alertService.delete(req.params.id)
        .then(() => res.json({ message: 'Alert deleted' }))
        .catch(next);
}

// schema functions

function createRow(req, res, next) {
    const row = Joi.object({
        name: Joi.string().required(),
        criteria: Joi.string().required(),
        value: Joi.number().required(),
        day: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
    });
    validateRequest(req, next, row);
}