const mongoose = require('mongoose')
const bcrypt = require('bcrypt');



const supplierSchema = new mongoose.Schema({
    supplier_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    location : {
        type : String,
        required : true
    },
    work_for : {
        type : String
    },
    phone_number : {
        type : Number,
        required : true
    },
    password : {
        type : String
    }, 
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt  : {
        type : Date,
        default : Date.now
    },
    role : {
        type : String,
        default : 'supplier'
    },
    verifiedStatus : {
        type : String,
        default : 'not verified'
    },
    activeStatus : {
        type : Boolean,
        default : true
    }

})

supplierSchema.pre('save', async function(next) {
    const supplier = this;
    if (!supplier.isModified('password')) {
        return next()
    }
    try {
        const hash = await bcrypt.hash(supplier.password, 10)
        supplier.password = hash
        next()
    } catch (error) {
        return next(error);
    }
});

supplierSchema.statics.forgot_password = async(data) => {
    console.log(data.email)
    try{
        const user = await supplier.findOne({email : data.email})
        if(!user){
             throw new Error('user not found')
        }
        return user
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.reset_password = async(id, data) => {
    try{
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const reset = await supplier.findByIdAndUpdate(id, {password : hashedPassword}, {new : true})
        return reset
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.email_verification_message = async(data) => {
    try{
        const user = await supplier.findOne({email : data.email})
        if(user){
            return user
        }
        else{
            throw new Error('user not found')
        }
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.saveOTP = async(mailVerificationOTP, data) => {
    try{
        const savedOTPNo = supplier.findOneAndUpdate(
            {email : data.email},
            {$set : {'verifiedStatus' : mailVerificationOTP}},
            {new : true}
        )
        if(!savedOTPNo){
            return res.status(404).json({message : 'user not found'})
        }
        return savedOTPNo
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.otp_check = async(data) => {
    try{
        const findOTP = await supplier.findOne({email : data.email})
        if(!findOTP){
            throw new Error('user not found')
        }
        else{
            return findOTP
        }
    }
    catch(error){
        throw error
    }
} 

supplierSchema.statics.update_verify_status = async(data) => {
    try{
        const verified = supplier.findOneAndUpdate(
            {email : data.email},
            {$set : {'verifiedStatus' : 'verified'}},
            {new : true}
        )
        if(!verified){
            return res.status(404).json({message : 'user not found'})
        }
        return verified
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.delete_account = async(userId) => {
    try{
        const existUser = await supplier.findOne({_id : userId})
        if(!existUser){
            throw new Error('User not found')
        }
        const deleteUser = await supplier.findByIdAndUpdate(userId, {activeStatus : false}, {new : true})
        return deleteUser
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.edit_account = async(userId, editData) => {
    try{
        const existUser = await supplier.findOne({_id : userId})
        if(!existUser){
            throw new Error('User not found')
        }

        const editUser = await supplier.findByIdAndUpdate(
            userId,
            {$set : editData},
            { new: true, runValidators: true }
        )
        if(editData.email){
            await supplier.findByIdAndUpdate(
                userId,
                {$set : {'verifiedStatus' : 'not verified'}},
                { new: true }
            )
        }
        return editUser

    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.show_account = async (userId) => {
    try{
        const existUser = supplier.findOne({_id : userId})
        if(!existUser){
            throw new Error('User not found')
        }
        return existUser
    }
    catch(error){
        throw error
    }
}

supplierSchema.statics.edit_password = async (userId, data) => {
    try{
        const existUser = await supplier.findOne({_id : userId})
        if(!existUser){
            throw new Error('User not found')
        }
        const oldPassword = existUser.password
        const passwordMatch = await bcrypt.compare(data.oldPassword, oldPassword)
        if(passwordMatch){
            const hashPassword = await bcrypt.hash(data.newPassword, 10)
            try{
                const passwordReset = await supplier.findByIdAndUpdate(
                    userId,
                    {$set : {'password' : hashPassword}},
                    {new : true}
                )
                return passwordReset
            }
            catch(error){
                throw error
            }
        }
        else{
            throw new Error('Old Password not match')
        }
    }
    catch(error){
        throw error
    }
}



const supplier = mongoose.model("supplier", supplierSchema)
module.exports = supplier