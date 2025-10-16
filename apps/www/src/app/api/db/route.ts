import { db } from "@gnd/db";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await db.users.count({});
  return NextResponse.json({
    data,
    error: null,
  });
}
