import { db } from "@gnd/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // get search params
  const q = req.nextUrl.searchParams.get("q");
  if (!q)
    return NextResponse.json({
      data: {},
      error: "No query provided",
    });
  const data = await db.users.count({});
  return NextResponse.json({
    data,
    error: null,
  });
}
