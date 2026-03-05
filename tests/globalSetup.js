import { MongoMemoryServer } from "mongodb-memory-server";
import { writeFileSync } from "fs";
import { resolve } from "path";

export default async function globalSetup() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const instanceData = mongod.instanceInfo;
  // Write URI for test workers to use
  writeFileSync(resolve(process.cwd(), ".mongo-test-uri"), uri, "utf8");
  // Store mongod so globalTeardown can access it (same process for global setup/teardown)
  globalThis.__MONGOD__ = mongod;
}
