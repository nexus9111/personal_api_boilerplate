const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

exports.connect = () => {
    mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if (!error) {
            console.log("✅ MongoDB Connection Succeeded. URL: " + process.env.MONGO_DB_URL);
        } else {
            console.log("Error in DB connection: " + error);
        }
    });
};