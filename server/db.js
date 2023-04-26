const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/Crossval'
const connectToMongo = async()=>{
    const connect=await mongoose.connect(mongoURI)
}
module.exports = connectToMongo;