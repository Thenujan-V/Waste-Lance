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
            if(passwordMatch){
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
                error : 'can not change password',
                detail : error.message
            })
        })
}