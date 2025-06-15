import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bio: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "",
    },
    nativeLanguage: {
        type: String,
        default: "",
    },
    learningLanguage: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    },
    isOnBoarded: {
        type: Boolean,
        default: false,
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ]
},{timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;