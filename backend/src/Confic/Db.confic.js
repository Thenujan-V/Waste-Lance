const mongoose = require('mongoose')

async function dbConnection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/waste_lance", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected successfully');
    }
    catch(error){
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);    }
}

module.exports = dbConnection
