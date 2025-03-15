import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-3-7-sonnet-20250219"),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toDataStreamResponse();
}
