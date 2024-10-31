const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^maath/random$": "<rootDir>/__mocks__/maath/random.js",
  },
  transform: {},
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

module.exports = createJestConfig(customJestConfig);
