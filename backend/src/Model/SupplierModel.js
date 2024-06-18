const dbConnection = require('../Confic/Db.confic')

const schedules = function(schedule){
    this.schedule_date = schedule.schedule_date
    this.MRF_name = schedule.MRF_name
    this.type = schedule.type
    this.location = schedule.location
    this.quantity = schedule.quantity
    this.supplier_id = schedule.supplier_id
}

schedules.schedule_pickup = (data) => {
    return new Promise((resolve, reject) => {
        try{
            const sql_query = `insert into schedule_pickup (schedule_date, MRF_name, type, location, quantity, supplier_id) value (?, ?, ?, ?, ?, ?)`
            dbConnection.execute(sql_query, [data.schedule_date, data.MRF_name, data.type, data.location, data.quantity, data.supplier_id], 
                (err, res) => {
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(res)
                    }
                }
            )
        }
        catch(error){

        }
    })
}

module.exports = schedules