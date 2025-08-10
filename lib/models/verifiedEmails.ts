import mongoose from "mongoose";

const verifiedUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    verificationToken: { type: String, default: "", unique: false },
    verifiedAt: { type: Date, default: null },
  },
  { timestamps: { createdAt: "createdAt" } }
);

const VerifiedUserEmail =
  mongoose.models.Verified_Email ||
  mongoose.model("Verified_Email", verifiedUserSchema);

export default VerifiedUserEmail;
