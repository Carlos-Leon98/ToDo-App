const { process_params } = require('express/lib/router');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const DB = process.env.MONGO_URL;

const connectDB = async() => {
    try {
        const connect = mongoose.connect(DB, {useNewUrlParser: true})
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = { connectDB };