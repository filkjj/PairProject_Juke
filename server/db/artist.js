const db = require('./db')
const { STRING } = require('sequelize')

const Artist = db.define('artist', {
    name: {
        type: STRING,
        allowNull: false
    }
});

module.exports = Artist