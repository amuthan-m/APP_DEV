const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String, // Will store the path to the image
        default: ''
    },
    phone: {
        type: String, // Will store the phone number
        default: ''
    },
    country: {
        type: String, // Will store the country
        default: ''
    }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
