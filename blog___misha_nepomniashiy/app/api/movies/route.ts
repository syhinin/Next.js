import { getAllMovies } from "@/services";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const apiKey = process.env.OMDB_API_KEY || "";
  const query = "matrix";

  console.log(apiKey);

  const movies = getAllMovies(apiKey, query);

  return NextResponse.json(movies);
}
