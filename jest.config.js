export default {
  testEnvironment: "node",
  globalSetup: "./tests/globalSetup.js",
  globalTeardown: "./tests/globalTeardown.js",
  setupFiles: ["./tests/setup.js"],
  testTimeout: 30000
};
