import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please full name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please email is required."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please password is required."],
      trim: true,
    },
    phone: String,
    address: String,
    bio: String,
    avatarUrl: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    birthdate: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
