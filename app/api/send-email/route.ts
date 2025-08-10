import { sendSuccessResponse, sendErrorResponse } from "@/lib/response";
import UnverifiedUserEmails from "@/lib/models/unverifiedEmails";
import connectMongoDB from "@/lib/mongoose";
import generateToken from "@/lib/utils/generateToken";
import { sendConfirmationEmail } from "@/lib/utils/emailServiceConfig";
import VerifiedUserEmail from "@/lib/models/verifiedEmails";

export const POST = async (req: Request) => {
  try {
    await connectMongoDB();

    const body = await req.json();
    const { email } = body;

    const user = new UnverifiedUserEmails(body);

    const verificationToken = generateToken(30);
    user.verificationToken = verificationToken;
    console.log("User", user);

    const userExists = await UnverifiedUserEmails.findOne({ email });
    const verifiedUserExists = await VerifiedUserEmail.findOne({ email });
    console.log("User exists", userExists);
    console.log("Verified User exists", verifiedUserExists);

    if (userExists) {
      return sendErrorResponse(
        "User already exists. Please verify your email.",
        { message: "User already exists. Please verify your email." },
        400
      );
    }

    if (verifiedUserExists) {
      return sendErrorResponse(
        "User already exists",
        { message: "User already exist & your email has been verified." },
        409
      );
    }

    try {
      const sendEmail = await sendConfirmationEmail(email, verificationToken);

      if (!sendEmail) {
        return sendErrorResponse(
          "Failed to send verification email",
          null,
          500
        );
      }
    } catch (error) {
      console.error("Error while sending email: ", error);
      return sendErrorResponse(
        "An error occured while sending the verification email",
        error,
        500
      );
    }

    await user.save();

    return sendSuccessResponse("User created successfully", user);
  } catch (error) {
    return sendErrorResponse("Failed to create the user", error, 500);
  }
};
