import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    name: { type: String },
    image,
    createdAt: true
})

const User = mongoose.model('User', userSchema);