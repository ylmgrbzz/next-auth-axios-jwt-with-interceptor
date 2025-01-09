import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/db";
import User from "../../../../models/User";
import { generateToken, hashPassword } from "../../../../lib/auth";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const token = generateToken({
      userId: newUser._id,
      username: newUser.username,
    });

    return NextResponse.json(
      { message: "User created successfully", token },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
