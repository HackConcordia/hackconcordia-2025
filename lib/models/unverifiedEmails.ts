import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    verified: { type: Boolean, default: false },
    verificationToken: { type: String, default: "", unique: true },
    verifiedAt: { type: Date, default: null },
  },
  { timestamps: { createdAt: "createdAt" } }
);

const UnverifiedUserEmails =
  mongoose.models.Unverified_Email ||
  mongoose.model("Unverified_Email", userSchema);

export default UnverifiedUserEmails;
