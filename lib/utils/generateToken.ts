import crypto from "crypto";

function generateToken(length: number) {
  return crypto.randomBytes(length).toString("hex");
}

export default generateToken;
