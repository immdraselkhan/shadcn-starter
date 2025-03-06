import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return Response.json({
    status: 200,
    success: true,
    message: "Next.js+shadcn starter",
  });
}
