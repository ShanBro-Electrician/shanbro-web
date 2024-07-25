// app/api/getFilenames.js
import { readdirSync } from "fs";
import { join } from "path";

export async function GET(request) {
  try {
    const directoryPath = join(process.cwd(), "./public/gallery");
    const filenames = readdirSync(directoryPath);

    return new Response(JSON.stringify(filenames), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
