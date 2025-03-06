import app from "@/server";
import { handle } from "hono/vercel";

export const runtime = "edge";

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
