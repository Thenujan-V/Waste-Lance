const express = require('express')
const router = express.Router()
const supplierController = require('../../src/Controller/SupplierController')

router.post('/supplier-signup', supplierController.suppliersSignup)
router.post('/supplier-signin', supplierController.suppliersSignin)
router.post('/forgot-password', supplierController.forgotPassword)
router.post('/reset-password', supplierController.resetPassword)


module.exports = router

