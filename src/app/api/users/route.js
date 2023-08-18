import dbConnect from "@/app/utils/mongodb/dbConn";
import User from "@/app/utils/mongodb/models/userModel";
import { NextResponse } from "next/server";

/**
 *  @param  {import('next').NextApiRequest} req
 *  @param  {import('next').NextApiResponse} res
 */
export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();
    await User.create(body);
    console.log("User created");
    return NextResponse.json(
      {
        message: "User created successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json(
      {
        users: users,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
