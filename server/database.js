const config = require('./config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();
const power_data = [
    {cost: 50, day: 52},
    {cost: 51, day: 50},
    {cost: 52, day: 65},
    {cost: 54, day: 56},
    {cost: 50, day: 50},
    {cost: 52, day: 65},
    {cost: 56, day: 45},
    {cost: 57, day: 57},
    {cost: 55, day: 59},
    {cost: 50, day: 53},
    {cost: 54, day: 54},
    {cost: 53, day: 55},
    {cost: 53, day: 54}
]
const alertData = [
    { name: 'Akanksha', value: '20', email: 'akanksha@gmail.com', phone: '9876543210', criteria:'greater', day: 'Monday'},
    { name: 'Sidharth', value: '10', email: 'sidharth@gmail.com', phone: '9876543210', criteria:'less', day: 'Tuesday'},
    { name: 'Shubham', value: '15', email: 'shubham@gmail.com', phone: '9876543210', criteria:'less', day: 'Wednesday'}
]
async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.Alert = require('./alert/alert.model')(sequelize);
    db.Power = require('./power/power.model')(sequelize);

    // sync all models with database
    await sequelize.sync({ force: true }).then(() => {
        console.log('Tables created successfully!');
        db.Power.bulkCreate(power_data, { validate: true })
        .then((res) => {console.log('Power table populated successfully : ', res)})
        .catch((error) => {
            console.error('Unable to populate Power table : ', error);
        })
        db.Alert.bulkCreate(alertData, { validate: true })
        .then((res) => {console.log('Alert table populated successfully : ', res)})
        .catch((error) => {
            console.error('Unable to populate Alert table : ', error);
        })
    }).catch((error) => {
        console.error('Unable to create table(s) : ', error);
    });
}
