const express = require('express')
const router = express.Router()
const supplierController = require('../../src/Controller/SupplierController')

router.post('/supplier-signin', supplierController.suppliersSignin)


module.exports = router

