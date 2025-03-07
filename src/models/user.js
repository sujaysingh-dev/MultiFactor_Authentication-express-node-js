import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isMfaActive: {
      type: Boolean,
      require: false,
    },
    twoFactorSecret: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


const user = mongoose.model("User", userSchema);
export default user;