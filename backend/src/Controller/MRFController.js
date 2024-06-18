var MRFModels = require('../Model/MRFModel')

exports.getPickups = (req, res) => {
    MRFModels.get_pickups()
        .then(scheduleRes => {
            return res.status(200).json(scheduleRes)
        })
        .catch(error => {
            return res.status(500).json(
                {
                    error: 'Schedule fetching failed. Please try again later.',
                    details: error.message,
                }
            )
        })
}
