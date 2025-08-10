import { NextResponse } from "next/server";
import { SuccessResponse, ErrorResponse } from "@/interfaces/response";

export const sendSuccessResponse = <T>(
  message: string,
  data: T,
  statusCode: number = 200
) => {
  const response: SuccessResponse<T> = {
    status: "success",
    message,
    data,
  };
  return new NextResponse(JSON.stringify(response), {
    status: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const sendErrorResponse = (
  message: string,
  error: unknown,
  statusCode: number = 500
) => {
  const response: ErrorResponse = {
    status: "error",
    message,
    error,
  };
  return new NextResponse(JSON.stringify(response), {
    status: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
