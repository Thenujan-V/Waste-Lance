const express = require('express')
const router = express.Router()
const supplierController = require('../../src/Controller/SupplierController')

router.post('/supplier-signup', supplierController.suppliersSignup)
router.post('/email-verification', supplierController.emailVerificationMessage)
router.post('/supplier-signin', supplierController.suppliersSignin)
router.post('/forgot-password', supplierController.forgotPassword)
router.post('/reset-password/:id', supplierController.resetPassword)


module.exports = router

