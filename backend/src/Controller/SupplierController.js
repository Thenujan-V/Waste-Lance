var supplierModels = require('../Model/SupplierModel')

exports.schedulePickup = (req, res) => {
    supplierModels.schedule_pickup(req.body)
        .then(scheduleRes => {
            return res.status(200).json({message : 'created'})
        })
        .catch(error => {
            return res.status(500).json(
                {
                    error: 'Schedule added failed. Please try again later.',
                    details: error.message,
                }
            )
        })
}