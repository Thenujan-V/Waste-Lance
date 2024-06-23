var supplierModels = require('../Model/SupplierModel')
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken')
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.suppliersSignup = async (req, res) => {
   try{
        const existing_user = await supplierModels.findOne({email : req.body.email})
        if(existing_user){
            return res.status(400).json({
                error: 'Email already exists' 
            })
        }

        const createSupplier = new supplierModels({
            supplier_name : req.body.supplier_name,
            email : req.body.email,
            location : req.body.location,
            work_for : req.body.work_for,
            phone_number : req.body.phone_number,
            password : req.body.password,
       })

        const createRes = await createSupplier.save()
        return res.status(200).send(createRes)
   }
   catch(error){
        return res.status(500).json({
            error : 'can not create account',
            detail : error.message
        })
   }
}

exports.suppliersSignin = async(req, res) => {
    try{
        const user = await supplierModels.findOne({email : req.body.email})
        if(user){
            if(!req.body.password || !user.password){
                return res.send('password not exist')
            }
            const passwordMatch = await bcrypt.compare(req.body.password, user.password)
            if(passwordMatch && user.activeStatus === true){
                const payload = {
                    id : user._id 
                }
                const secretKey = 'qwertyuioplkjhgfdsazxcvbnmloiuytrfdcvbnjytredcvbnjuytfcvbnjy'
                const token = jwtToken.sign(payload, secretKey, {expiresIn : '24h'})
                return res.status(200).json({
                    message : 'signin successful',
                    token : token
                })
            }
            else{
                return res.status(401).json({
                    message : 'password not match'
                })
            }
        }
        else{
            return res.status(404).json({
                error : 'user not found',
            })
        }
    }
    catch(error){
        return res.status(500).json({
            error : 'username or password wrong',
            details : error.message
        })
    }
}

exports.forgotPassword = (req, res) => {
    supplierModels.forgot_password(req.body)
        .then(async (supplierRes) => {
            if(!supplierRes){
                return res.status(404).json({ error: 'User not found' });
            }

            const payloads = {
                id : supplierRes._id,
            }
            const secretKey = 'qwertyuioplkjhgfdsazxcvbnmloiuytrfdcvbnjytredcvbnjuytfcvbnjy'

            const resetToken = jwtToken.sign(payloads, secretKey, {expiresIn : '24h'})
            console.log('reset :', resetToken)
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                user: 'vthenujan7400@gmail.com',
                pass: 'bnluppbspqmvnnse',
                },
            })

            const mailOptions = {
                to: supplierRes.email,
                from: 'vthenujan7400@gmail.com',
                subject: 'Password Reset',
                text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                  Please click on the following link, or paste this into your browser to complete the process:\n\n
                  http://localhost:3000/reset/${resetToken}\n\n
                  If you did not request this, please ignore this email and your password will remain unchanged.\n`,
              };
              await transporter.sendMail(mailOptions)

              return res.status(200).json({
                message: 'Password reset email sent'
            })
            
        })
        .catch(err => {
            return res.status(500).json({
                error : 'user not found',
                detail : err.message
            })
        })
}

exports.resetPassword = (req, res) => {
    if(!req.params.id || !req.body){
        return res.status(400).json({
            error: 'Please provide user ID and new password'
        })
    }

    supplierModels.reset_password(req.params.id, req.body, res)
        .then(resetRes => {
            if(resetRes){
                return res.status(200).json({
                    message:'successfully update password'
                })
            }
            else{
                return res.status(404).json({
                    error: 'User not found'
                })
            }
        })
        .catch(error => {
            return res.status(500).json({
                error : 'error occured in change password',
                detail : error.message
            })
        })
}

exports.emailVerificationMessage = (req, res) => {
    supplierModels.email_verification_message(req.body)
        .then(async (emailRes) => {
            if(!emailRes){
                return res.status(404).json({ error: 'User not found' });
            }

            const genereteRandomOPT = () => {
                const randomNo = Math.random()
                const randomSixDigitNo = Math.floor(randomNo * 1000000)
                const verificationOTP = randomSixDigitNo.toString().padStart(6, '0');

                return verificationOTP
            }
            const mailVerificationOTP = genereteRandomOPT()

            supplierModels.saveOTP(mailVerificationOTP, req.body, res)
                .then(async (saveOTPRes) => {
                    if(!saveOTPRes){
                        return res.status(404).json({
                            error : 'user not found',
                            detail : error.message
                        })
                    }
                    else{
                        const transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                            user: 'vthenujan7400@gmail.com',
                            pass: 'bnluppbspqmvnnse',
                            },
                        })
            
                        const mailOptions = {
                            to: saveOTPRes.email,
                            from: 'vthenujan7400@gmail.com',
                            subject: 'Email Verification OTP',
                            text: `You are receiving this email to verify your email address.\n\n
                                  *** Your OTP (One-Time Password) is: ${mailVerificationOTP} ***\n\n
                                  Please enter this OTP on the verification page to complete the process.\n\n
                                  If you did not request this, please ignore this email.\n`,
                        };
            
                          await transporter.sendMail(mailOptions)
            
                          return res.status(200).json({
                            message: 'mail verification email sent'
                        })
                    }
                })
                .catch(error => {
                    return res.status(500).json({
                        error : 'error occured when save OTP',
                        detail : error.message
                    })
                })
        })
        .catch(error => {
            return res.status(500).json({
                error : 'error occured when mail verification',
                detail : error.message
            })
        })
}

exports.otpCheck = (req, res) => {
    supplierModels.otp_check(req.body) 
        .then(checkRes => {
            if(!checkRes){
                return res.status(404).json({
                    error : 'user not found',
                })
            }
            else{
                if(checkRes.verifiedStatus === req.body.otpNumber){
                    supplierModels.update_verify_status(req.body, res)
                        .then(updateRes => {
                            if(updateRes){
                                return res.status(200).json({
                                    error : 'successfully verified your email',
                                })
                            }
                        })
                        .catch(error => {
                            return res.status(500).json({
                                error : 'error occued when update status',
                                detail : error.message
                            })
                        })
                }
                else{
                    return res.status(500).json({
                        error : 'otp not match',
                    })
                }
            }
        })
        .catch(error => {
            return res.status(500).json({
                error : 'error occured when otp check',
                detail : error.message
            })
        })
}