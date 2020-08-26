const db = require('./db')
const { STRING } = require('sequelize')

const Song = db.define('song', {
    name: {
        type: STRING,
        allowNull: false
    },
    audioUrl: STRING,
    genre: STRING
});

module.exports = Song