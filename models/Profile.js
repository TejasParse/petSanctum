const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    fname : {
        type:String,
        required: true,
    },
    lname : {
        type:String,
        required: true,
    },
    phone : {
        type: Number,
        required: true,
    },
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    state : {
        type: String,
        required: true,
    },
    zip : {
        type: Number,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    imageUrl : {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Number,
        require: true,
    },
    adopted: [String],
    rescued: [String]
});

const Profile = mongoose.model("Profile",ProfileSchema);

module.exports.Profile = Profile;