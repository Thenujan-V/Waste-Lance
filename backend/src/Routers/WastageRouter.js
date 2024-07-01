const express = require('express')
const router = express.Router()

const wastageController = require('../Controller/WastageController')

router.post('/wastage', wastageController.addWastageTypes)



module.exports = router