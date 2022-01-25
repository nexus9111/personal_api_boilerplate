const mongoose = require("mongoose");

/**
* User Roles
*/
const roles = ["user", "admin", "root"];

/**
 * User Schema
 * @private
 */

const myModelSchema = new mongoose.Schema({
    publicId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,  //replace " hello" or "hello " by "hello"
        lowercase: true,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 128,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: roles,
        default: "user",
    },
    token: {
        expiration: {
            type: Number,
            default: Date.now()
        },
        token: {
            type: String
        }
    }
});

module.exports = mongoose.model("myModel", myModelSchema);