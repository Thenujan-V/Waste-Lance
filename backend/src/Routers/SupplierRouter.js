const express = require('express')
const router = express.Router()
const supplierController = require('../../src/Controller/SupplierController')

router.post('/supplier-signup', supplierController.suppliersSignup)
router.post('/email-verification-message', supplierController.emailVerificationMessage)
router.post('/otp-check', supplierController.otpCheck)
router.post('/supplier-signin', supplierController.suppliersSignin)
router.post('/forgot-password', supplierController.forgotPassword)
router.post('/reset-password/:id', supplierController.resetPassword)
router.put('/delete-account/:id', supplierController.deleteAccount)
router.put('/edit-account/:id', supplierController.editAccount)
router.put('/edit-password/:id', supplierController.editPassword)
router.get('/show-account/:id', supplierController.showAccount)


module.exports = router

