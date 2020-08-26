const router = require('express').Router()
const {db, Album, Artist, Song} = require('../db');

router.get('/', async (req,res,next) => {
    console.log('eee')
    res.send(await Album.findAll({
        include: [{model: Artist}]
    }))
})

router.get('/:albumId', async (req,res,next) => {
    res.send(await Album.findByPk(req.params.albumId, {
        include: [{model: Artist}, {model: Song}]
    }))
} )

module.exports = router