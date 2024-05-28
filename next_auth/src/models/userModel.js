import { verify } from "crypto";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        default: "user",
    },
    forgotPasswordToken:{
        type: String,
    },
    forgotPasswordExpire:{
        type: Date,
    },
    verifyToken:{
        type: String,
    },
    verifyExpire:{
        type: Date,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;