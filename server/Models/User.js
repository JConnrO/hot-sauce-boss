// Build in Progress!!!!!!
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userNameSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
    // Add shop items!!!!!!!!!!!
});

//Pre-saves the middleware to create the user password
userNameSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    //callback
    next();
});

// Password check
userSchema.methods.isCorrectPassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
};

const User = mongoose.model('User', userNameSchema)

module.exports = User;
