import UnverifiedUserEmails from "@/lib/models/unverifiedEmails";
import connectMongoDB from "@/lib/mongoose";
import { sendErrorResponse, sendSuccessResponse } from "@/lib/response";
import { NextRequest } from "next/server";
import VerifiedUserEmail from "@/lib/models/verifiedEmails";

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get("token");
  console.log("Token", token);

  try {
    await connectMongoDB();
    const user = await UnverifiedUserEmails.findOne({
      verificationToken: token,
    });

    if (!user) {
      return sendErrorResponse(
        "Invalid or expired verification token",
        new Error("Invalid or expired verification token")
      );
    }

    user.verified = true;
    user.verifiedAt = new Date();
    user.verificationToken = null;

    await user.save();

    if (user.verified) {
      const verifiedUser = new VerifiedUserEmail({
        email: user.email,
        verificationToken: user.verificationToken,
        verifiedAt: new Date(),
      });

      await verifiedUser.save();
    }

    await user.deleteOne({ _id: user._id });
    console.log("Successfully removed user");

    return sendSuccessResponse(
      "Email verified successfully. Thank you for subscribing!",
      null,
      200
    );
  } catch (error) {
    return sendErrorResponse("Error while verifying email", error, 500);
  }
};
