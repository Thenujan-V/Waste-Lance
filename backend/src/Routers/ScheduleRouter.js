const express = require('express')
const router = express.Router()

const scheduleController = require('../Controller/ScheduleController')

router.post('/schedule-pickups', scheduleController.schedulePickups)
router.get('/pickup-details/:id', scheduleController.pickupDetails)
router.get('/all-pickup-details', scheduleController.allPickupDetails)




module.exports = router