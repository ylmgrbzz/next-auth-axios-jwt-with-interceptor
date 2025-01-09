import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";
import User from "../../../models/User";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const users = await User.find();
    return NextResponse.json({ users, token: token }, { status: 200 });
  } catch (error: any) {
    console.error("Get users error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
