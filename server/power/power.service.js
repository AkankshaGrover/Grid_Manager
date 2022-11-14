const db = require('../database');

module.exports = {
    getAll,
};

async function getAll() {
    return await db.Power.findAll();
}