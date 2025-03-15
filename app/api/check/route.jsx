export async function GET(request) {
  return new Response(
    JSON.stringify({ message: "The weather is nice today!" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
