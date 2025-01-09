import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error: any) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
