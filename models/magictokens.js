import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    token: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.models.magictokens ||
  mongoose.model("Token", TokenSchema);