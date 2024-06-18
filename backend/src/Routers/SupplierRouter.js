const express = require('express')
const router = express.Router()
const supplierController = require('../../src/Controller/SupplierController')

router.post('/pickup', supplierController.schedulePickup)




module.exports = router

