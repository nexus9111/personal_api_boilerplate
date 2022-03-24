const mongoose = require("mongoose");
const { mongoose_uri } = require('./vars');

mongoose.Promise = global.Promise;

exports.connect = () => {
    mongoose.connect(mongoose_uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if (!error) {
            console.log("✅ MongoDB Connection Succeeded. URL: " + process.env.MONGO_DB_URL);
        } else {
            console.log("Error in DB connection: " + error);
        }
    });
};