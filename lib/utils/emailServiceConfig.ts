import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  from: process.env.EMAIL_USER,
});

export const sendConfirmationEmail = async (
  email: string,
  verificationToken: string
) => {
  transporter.verify((error: unknown) => {
    if (error) {
      console.error("Error while connecting to email server: ", error);
    } else {
      console.log("Connected to email server, ready to send emails...");
      console.log("Verification Token: ", verificationToken);
    }
  });

  try {
    const verificationLink = `${process.env.BASE_URL}/verify-email?token=${verificationToken}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Please verify your email address",
      html: `<p>Greetings,</p>
            <p>Welcome to our Mailing List! To complete your subscription, please verify your email address by clicking the link below:</p>
            <p><a href="${verificationLink}">Verify Email Address</a></p>
            <p>If you didn't request this verification, you can safely ignore this email. Your account will not be signed into the mailing list until you verify your email address.</p>
            <p>Thank you,</p>
            <p>The HackConcordia Team</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return true;
  } catch (error) {
    console.error("Error while sending email: ", error);
    return false;
  }
};
