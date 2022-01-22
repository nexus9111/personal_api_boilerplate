const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connect = () => {
    mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if (!err) {
            console.log('✅ MongoDB Connection Succeeded. URL: ' + process.env.MONGO_DB_URL);
        } else {
            console.log('Error in DB connection: ' + err);
        }
    });
}