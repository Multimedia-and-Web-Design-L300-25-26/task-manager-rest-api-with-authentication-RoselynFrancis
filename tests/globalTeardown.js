import { readFileSync, unlinkSync } from "fs";
import { resolve } from "path";
import { MongoMemoryServer } from "mongodb-memory-server";

export default async function globalTeardown() {
  if (global.__MONGOD__) {
    await global.__MONGOD__.stop();
  }
  try {
    unlinkSync(resolve(process.cwd(), ".mongo-test-uri"));
  } catch (_) {}
}
