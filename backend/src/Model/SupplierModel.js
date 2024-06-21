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



const supplier = mongoose.model("supplier", supplierSchema)
module.exports = supplier