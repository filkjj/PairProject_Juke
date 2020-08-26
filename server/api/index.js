const router = require('express').Router()
const Album = require('./album')

router.use('/albums', Album);

module.exports = router
