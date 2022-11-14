const express = require('express');
const router = express.Router();
const powerService = require('./power.service');

// routes
router.get('/', getAll);

module.exports = router;

// route functions
function getAll(req, res, next) {
    powerService.getAll()
        .then(power => res.json(power))
        .catch(next);
}
