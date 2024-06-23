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