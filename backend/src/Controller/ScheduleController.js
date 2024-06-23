const scheduleModel = require('../Model/ScheduleModel')

exports.schedulePickups = (req, res) => {
    scheduleModel.schedule_pickups(req.body)
        .then(pickupsRes => {
            if(!pickupsRes){
                return res.status(404).json({
                    message : 'user not found'
                })
            }
            return res.status(201).json({
                message : 'successfully added'
            })
        })
        .catch(error =>{
          return res.status(500).json({
            error : 'pickups schedule error',
            details : error.message
          })
        })
}

exports.pickupDetails = (req, res) => {
    if(!req.params.id){
        return res.status(400).json({
            message : 'user id not found'
        })
    }
    scheduleModel.pickup_details(req.params.id)
        .then(pickupsRes => {
            if(!pickupsRes){
                return res.status(404).json({
                    message : 'schedules not found'
                })
            }
            return res.status(201).json({
                message : 'successfully got',
                details : pickupsRes
            })
        })
        .catch(error =>{
          return res.status(500).json({
            error : 'pickups schedule error',
            details : error.message
          })
        })
}

exports.allPickupDetails = (req, res) => {
    scheduleModel.all_pickup_details()
        .then(scheduleRes => {
            if(!scheduleRes){
                return res.status(200).json({
                    message : 'no pickups there'
                })
            }
            return res.status(200).json({
                message : 'successfully got',
                detail : scheduleRes
            })
        })
        .catch(error => {
            return res.status(500).json({
                error : 'pickups schedule error',
                details : error.message
              })
        })
}