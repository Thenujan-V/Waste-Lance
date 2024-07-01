const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Server = express()

Server.use(cors())
Server.use(express.json())
Server.use(bodyParser.json())

const dbConnection = require('./src/Confic/Db.confic')
dbConnection()

const supplierRouter = require('./src/Routers/SupplierRouter')
const scheduleRouter = require('./src/Routers/ScheduleRouter')
const wastageRouter = require('./src/Routers/WastageRouter')


Server.use('/api/supplier', supplierRouter)
Server.use('/api/schedule', scheduleRouter) 
Server.use('/api/wastage', wastageRouter) 

module.exports = Server

const PORT = process.env.PORT || 4000

Server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
