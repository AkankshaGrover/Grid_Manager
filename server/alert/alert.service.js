const db = require('../database');

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete
};

async function getAll() {
    return await db.Alert.findAll();
}

async function getById(id) {
    return await getAlert(id);
}

async function create(params) {
    // validate
    const phoneRegex = new RegExp('[0-9]{10}')
    const emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}')
    if(params.name == null || params.email == null || 
        params.phone == null || params.criteria == null || params.value == null || params.day == null)
        {
            throw 'Field cannot be null'
        }
    if (typeof params.name != 'string') {
        throw 'Name should be string'
    }
    if (!emailRegex.test(params.email)) {
        throw 'Email should be string'
    }
    if (typeof params.day != 'string') {
        throw 'Day should be string'
    }
    if (typeof params.criteria != 'string') {
        throw 'Criteria should be string'
    }
    if (typeof params.value != 'number') {
        throw 'Value should be number'
    }
    if (!phoneRegex.test(params.phone)) {
        throw 'Phone should be number and 10 digits long'
    }
    const alert = new db.Alert(params);

    // save alert
    await alert.save();
}
async function _delete(id) {
    const alert = await getAlert(id);
    await alert.destroy();
}

// helper functions

async function getAlert(id) {
    const alert = await db.Alert.findByPk(id);
    if (!alert) throw 'Alert not found';
    return alert;
}