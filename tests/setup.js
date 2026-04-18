import dotenv from "dotenv";
import { resolve } from "path";
import { readFileSync } from "fs";

dotenv.config({ path: resolve(process.cwd(), ".env.test") });

// Override MONGO_URI with the in-memory server URI if available
try {
  const uri = readFileSync(resolve(process.cwd(), ".mongo-test-uri"), "utf8").trim();
  process.env.MONGO_URI = uri;
} catch (_) {}
