export async function GET(request: Request) {
  return Response.json({
    status: 200,
    success: true,
    message: "Next.js+shadcn starter",
  });
}
