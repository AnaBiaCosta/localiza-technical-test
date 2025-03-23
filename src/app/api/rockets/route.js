import CachedDB from "@/utils/db";

export async function GET(req) {
  await CachedDB.initializeDB();

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const paginatedData = CachedDB.getPaginatedRockets(page, limit);
  return Response.json(paginatedData);
}
