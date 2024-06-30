const mongoose = require('mongoose')
const Schema = mongoose.Schema

const supplierModels = require('../Model/SupplierModel')

const pickupsScheema = new Schema({
    waste_type : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    pickup_date : {
        type : Date,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    mrf_name : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    acceptance_status : {
        type : Boolean,
        default : null
    },
    pickup_status : {
        type : Boolean,
        default : null
    },
    supplier : {
        type: Schema.Types.ObjectId,
        ref : 'suppliers'
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

pickupsScheema.statics.schedule_pickups = async(body) => {
    try{
        const existingUser = await supplierModels.findOne({_id : body.supplier_id})
        console.log(existingUser)
        if(!existingUser){
            return
        }
        const pickupSchedule = new schedule_pickups({
            waste_type : body.waste_type,
            location : body.location,
            pickup_date : body.pickup_date,
            quantity : body.quantity,
            mrf_name : body.mrf_name,
            amount : body.amount,
            supplier : body.supplier_id
        })
        const pickupScheduleResponse = await pickupSchedule.save()
        return pickupScheduleResponse
    }
    catch(error){
        throw error
    }
}

pickupsScheema.statics.pickup_details = async(id) => {
    try{
        const existingUser = await supplierModels.findOne({_id : id})
        console.log(existingUser)
        if(!existingUser){
            throw new Error('user not found')
        }
        const details = await schedule_pickups.find({supplier : id})
        if(!details){
            return
        }
        else{
            return details
        }
    }
    catch(error){
        throw error
    }
}

pickupsScheema.statics.all_pickup_details = async() => {
        try{
            const response = schedule_pickups.find()
            return response
        }
        catch(error){
            throw error
        }
}











const schedule_pickups = mongoose.model("schedule_pickups", pickupsScheema)
module.exports = schedule_pickups