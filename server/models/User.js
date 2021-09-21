// Build in Progress!!!!!!
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    //Make a list of heat sigs, link to the specific ID
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: false
    }]
});

//Pre-saves the middleware to create the user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    //callback
    next();
});

// Password check
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema)

userSchema.plugin(uniqueValidator);

module.exports = User;

//create hot sauce -can choose label
//User - main sauces
//created on user side, link by typing in name
