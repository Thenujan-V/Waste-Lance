const express = require('express')
const router = express.Router()

const scheduleController = require('../Controller/ScheduleController')

router.post('/schedule-pickups', scheduleController.schedulePickups)




module.exports = router