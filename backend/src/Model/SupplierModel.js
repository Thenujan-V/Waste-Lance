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
        unique : true
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


const supplier = mongoose.model("supplier", supplierSchema)

module.exports = supplier