const express = require('express')
const router = express.Router()
const MRFController = require('../../src/Controller/MRFController')

router.get('/pickups', MRFController.getPickups)




module.exports = router

