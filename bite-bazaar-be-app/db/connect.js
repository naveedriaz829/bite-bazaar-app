const mongoose = require("mongoose");
require('dotenv').config()

let uri = `mongoDB_Url`
mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(console.log('connected DB'))
    } catch (err) {
        console.error(err);
    }


};

module.exports = connectDB;