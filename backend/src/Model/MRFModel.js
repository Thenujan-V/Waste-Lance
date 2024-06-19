const dbConnection = require('../Confic/Db.confic')

const schedules = function(schedule){
    this.schedule_date = schedule.schedule_date
    this.MRF_name = schedule.MRF_name
    this.type = schedule.type
    this.location = schedule.location
    this.quantity = schedule.quantity
    this.supplier_id = schedule.supplier_id
}

schedules.get_pickups = (data) => {
    return new Promise((resolve, reject) => {
        try{
            const sql_query = `select * from schedule_pickup `
            dbConnection.execute(sql_query, (err, res) => {
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