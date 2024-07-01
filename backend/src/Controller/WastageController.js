var wastageModels = require('../Model/WastageModel')


exports.addWastageTypes = (req, res) => {
    wastageModels.add_wastage_types(req.body)
        .then(wastageRes => {
            if(!wastageRes){
                return res.status(500).json({
                    error : 'Internal Server Error',
                    detail : error.message
                })
            }
            return res.status(201).json({
                detail : wastageRes
            })
        })
        .catch(error => {
            return res.status(500).json({
                error : 'Internal Server Error',
                detail : error.message
            })
        })
}