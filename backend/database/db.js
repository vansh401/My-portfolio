const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL,{
            family : 4
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error.message);
    }
};

module.exports = connectDB;
