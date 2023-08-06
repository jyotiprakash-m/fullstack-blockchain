import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ error: "Called Get" }, { status: 200 });
}

export async function POST(request) {
  return NextResponse.json({ error: "Called Post" }, { status: 200 });
}
