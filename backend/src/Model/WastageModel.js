const mongoose = require('mongoose')


const wastageTypesSchema = new mongoose.Schema({
    wasteType : {
        type : String,
        required : true
    },
    amountPerKG : {
        type : Number,
        required : true
    },
    createdDate : {
        type : Date,
        default : Date.now
    }
})

wastageTypesSchema.statics.add_wastage_types = async (data) => {
    try{
        const waste =  new wastage_type({
            wasteType : data.wasteType,
            amountPerKG : data.amountPerKG
        })
        const addWastageResponse = await waste.save()
        return addWastageResponse
    }
    catch(error){
        throw error
    }
}

wastageTypesSchema.statics.get_wastage_types = async () => {
    try{
        const getWastageResponse = await wastage_type.find()
        return getWastageResponse
    }
    catch(error){
        throw error
    }
}





const wastage_type = mongoose.model("wastage_type", wastageTypesSchema)
module.exports = wastage_type