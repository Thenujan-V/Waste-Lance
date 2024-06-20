var supplierModels = require('../Model/SupplierModel')

exports.suppliersSignin = async (req, res) => {
   try{
        const existing_user = supplierModels.findOne({email : req.body.email})
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
